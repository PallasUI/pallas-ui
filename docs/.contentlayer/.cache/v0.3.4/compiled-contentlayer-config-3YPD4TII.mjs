// contentlayer.config.ts
import { remarkNpm2Yarn } from "@theguild/remark-npm2yarn";
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { visit as visit2 } from "unist-util-visit";

// src/lib/rehype-component.ts
import fs from "node:fs";
import path from "node:path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}
function getTextStylePreviewSource(type) {
  try {
    return fs.readFileSync(
      path.join(process.cwd(), `./src/components/previews/typography/${type}-text-style.tsx`),
      "utf8"
    );
  } catch (error) {
    return "";
  }
}
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      if (node.name === "ComponentPreview") {
        const component = getNodeAttributeByName(node, "name")?.value;
        const file = getNodeAttributeByName(node, "file")?.value ?? "index";
        if (!component) return null;
        try {
          const source = fs.readFileSync(
            path.join(process.cwd(), `./src/components/previews/${component}/${file}.tsx`),
            "utf8"
          );
          node.children?.push(
            u("element", {
              tagName: "pre",
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      // Replace default export
                      value: source.replace("export default", "export")
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentSource") {
        const directory = getNodeAttributeByName(node, "directory")?.value ?? "components/ui";
        const component = getNodeAttributeByName(node, "name")?.value;
        if (!component) return null;
        try {
          const source = fs.readFileSync(
            path.join(process.cwd(), `./src/${directory}/${component}/${component}.tsx`),
            "utf8"
          );
          node.children?.push(
            u("element", {
              tagName: "pre",
              children: [
                u("element", {
                  tagName: "code",
                  data: {
                    meta: `title="${directory}/${component}/${component}.tsx"`
                  },
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "TypographyPreview") {
        const type = getNodeAttributeByName(node, "type")?.value;
        const withTextStyle = getNodeAttributeByName(node, "withTextStyle")?.value !== void 0;
        if (!type) return null;
        try {
          const source = fs.readFileSync(
            path.join(process.cwd(), "./src/components/previews/typography/index.tsx"),
            "utf8"
          );
          const textStyleSource = withTextStyle ? getTextStylePreviewSource(type) : "";
          node.children?.push(
            u("element", {
              tagName: "pre",
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      // Replace default export
                      value: source.replace("export default", "export")
                    }
                  ]
                })
              ]
            })
          );
          if (textStyleSource) {
            node.children?.push(
              u("element", {
                tagName: "pre",
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: textStyleSource
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}

// src/lib/toc.ts
import GithubSlugger from "github-slugger";
var getTocTree = (tocData = []) => {
  if (!tocData.length) return [];
  const rootNodes = [
    tocData[0],
    ...tocData.slice(1).filter((node) => node.level <= tocData[0].level)
  ];
  const rootIndices = rootNodes.map((node) => tocData.indexOf(node));
  const chunks = rootIndices.map((rootIndex, index) => {
    const nextRootIndex = rootIndices[index + 1];
    return tocData.slice(rootIndex + 1, nextRootIndex);
  });
  const tree = rootNodes.map((node, index) => {
    const children = chunks[index];
    if (children.length) {
      node.children = getTocTree(children);
    }
    return node;
  });
  return tree;
};
var generateToc = (content, level = 3) => {
  const headerRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const slugger = new GithubSlugger();
  const tocNodes = Array.from(content.matchAll(headerRegex)).map(({ groups }) => {
    const flag = groups?.["flag"];
    const content2 = groups?.["content"] ?? "";
    if (!flag || !content2) return null;
    if (flag.length > level) return null;
    return {
      level: flag.length,
      text: content2,
      slug: content2 ? slugger.slug(content2) : ""
    };
  }).filter(Boolean);
  const toc = getTocTree(tocNodes);
  return toc;
};

// contentlayer.config.ts
var TOC_LEVEL = 3;
var RadixReferencesType = defineNestedType(() => ({
  name: "Radix",
  fields: {
    link: { type: "string" },
    api: { type: "string" }
  }
}));
var ReferencesType = defineNestedType(() => ({
  name: "References",
  fields: {
    shadcnUiLink: { type: "string" },
    radix: { type: "nested", of: RadixReferencesType }
  }
}));
var baseComputedFields = {
  url: {
    type: "string",
    resolve: (post) => `/docs/${post._raw.flattenedPath}`
  },
  tocData: {
    type: "json",
    resolve: async (doc) => {
      return generateToc(doc["body"].raw, TOC_LEVEL);
    }
  },
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  }
};
var Overview = defineDocumentType(() => ({
  name: "Overview",
  filePathPattern: "overview/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    order: { type: "number", required: true, default: 99999 },
    references: { type: "nested", of: ReferencesType },
    toc: { type: "boolean", required: false, default: true }
  },
  computedFields: {
    ...baseComputedFields
  }
}));
var Guides = defineDocumentType(() => ({
  name: "Guides",
  filePathPattern: "guides/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    order: { type: "number", required: true, default: 99999 },
    toc: { type: "boolean", required: false, default: true }
  },
  computedFields: {
    ...baseComputedFields
  }
}));
var Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: "components/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    order: { type: "number", required: true, default: 99999 },
    references: { type: "nested", of: ReferencesType },
    toc: { type: "boolean", required: false, default: true }
  },
  computedFields: {
    componentName: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^components\//, "")
    },
    ...baseComputedFields
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/contents",
  documentTypes: [Overview, Guides, Component],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      codeImport,
      [
        remarkNpm2Yarn,
        {
          packageName: "~/components/docs/tabs",
          tabNamesProp: "items",
          storageKey: "selectedPackageManager"
        }
      ]
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit2(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            node.__code__ = codeEl.children?.[0].value;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: "dark-plus",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className?.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit2(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            if (node.__code__) {
              preElement.properties["__code__"] = node.__code__;
            }
          }
        });
      }
    ],
    esbuildOptions: (options) => {
      options.external = [
        ...options.external || [],
        "styled-system/jsx",
        "@styled-system/recipes",
        "styled-system/css",
        "@styled-system/jsx",
        "@styled-system/css"
      ];
      return options;
    }
  }
});
export {
  Component,
  Guides,
  Overview,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3YPD4TII.mjs.map
