import { defineSlotRecipe } from "@pandacss/dev";

export const timeline = defineSlotRecipe({
  className: "timeline",
  description: "Styles for the Timeline component",
  slots: [
    "root",
    "item",
    "indicator",
    "dot",
    "icon",
    "connector",
    "content",
    "time",
    "title",
    "description",
  ],
  base: {
    root: {
      "--timeline-items-gap": "{spacing.gap.component.lg}",
      "--timeline-indicator-size": "12px",

      display: "flex",
      flexDirection: "column",
      gap: "var(--timeline-items-gap)",
    },
    item: {
      display: "flex",
      position: "relative",
    },
    indicator: {
      zIndex: 1,
      flexShrink: 0,
    },
    dot: {
      minWidth: "var(--timeline-indicator-size)",
      minHeight: "var(--timeline-indicator-size)",
      borderRadius: "full",
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "var(--timeline-indicator-size)",
      height: "var(--timeline-indicator-size)",
      borderRadius: "full",
      bg: "surface.container",
      color: "text.secondary",
    },
    connector: {
      "--timeline-connector-width": "2px",
      "--timeline-connector-gap": "{spacing.gap.inline.xs}",

      position: "absolute",
      bg: "border",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
    },
    time: {
      textStyle: "sm",
      color: "text.tertiary",
    },
    title: {
      textStyle: "sm",
      fontWeight: "semibold",
      color: "text",
      mb: "gap.inline.xs",
    },
    description: {
      textStyle: "sm",
      color: "text.secondary",
    },
  },
  variants: {
    orientation: {
      vertical: {
        root: { flexDirection: "column" },
        connector: {
          top: "calc(var(--timeline-indicator-size) + var(--timeline-connector-gap))",
          minWidth: "var(--timeline-connector-width)",
          minHeight:
            "calc(100% - var(--timeline-indicator-size) - 2 * var(--timeline-connector-gap) + var(--timeline-items-gap))",
        },
        content: {
          mt: "-6px",
        },
      },
      horizontal: {
        root: { flexDirection: "row" },
        item: { flexDirection: "column", alignItems: "center", flex: "1" },
        connector: {
          left: "calc(50% + var(--timeline-indicator-size) / 2 + var(--timeline-connector-gap))",
          minHeight: "var(--timeline-connector-width)",
          minWidth:
            "calc(100% - var(--timeline-indicator-size) - 2 * var(--timeline-connector-gap) + var(--timeline-items-gap))",
        },
        content: { textAlign: "center" },
      },
    },
    placement: {
      right: {
        item: { flexDirection: "row" },
        content: {
          ml: "gap.inline.md",
          textAlign: "left",
        },
        connector: {
          left: "calc((var(--timeline-indicator-size) - var(--timeline-connector-width)) / 2)",
        },
      },
      left: {
        item: { flexDirection: "row-reverse" },
        content: {
          mr: "gap.inline.md",
          textAlign: "right",
        },
        connector: {
          left: "calc(100% - (var(--timeline-indicator-size) - var(--timeline-connector-width)) / 2)",
        },
      },
      alternate: {},
      bottom: {
        item: { flexDirection: "column" },
        connector: {
          top: "calc((var(--timeline-indicator-size) - var(--timeline-connector-width)) / 2)",
        },
        content: {
          mt: "gap.inline.md",
        },
      },
      top: {
        item: { flexDirection: "column-reverse" },
        connector: {
          top: "calc(100% - (var(--timeline-indicator-size) + var(--timeline-connector-width)) / 2)",
        },
        content: {
          justifyContent: "flex-end",
          mb: "gap.inline.md",
        },
      },
    },
    variant: {
      default: {
        dot: { bg: "fill" },
      },
      success: {
        dot: { bg: "success" },
      },
      warning: {
        dot: { bg: "warning" },
      },
      error: {
        dot: { bg: "error" },
      },
    },
    indicatorSize: {
      sm: {
        root: { "--timeline-indicator-size": "8px" },
      },
      md: {
        root: { "--timeline-indicator-size": "12px" },
      },
      lg: {
        root: { "--timeline-indicator-size": "16px" },
      },
      xl: {
        root: { "--timeline-indicator-size": "20px" },
      },
    },
    textSize: {
      sm: {
        time: { textStyle: "sm" },
        title: { textStyle: "sm" },
        description: { textStyle: "sm" },
      },
      md: {
        time: { textStyle: "md" },
        title: { textStyle: "md" },
        description: { textStyle: "md" },
      },
      lg: {
        time: { textStyle: "lg" },
        title: { textStyle: "lg" },
        description: { textStyle: "lg" },
      },
      xl: {
        time: { textStyle: "xl" },
        title: { textStyle: "xl" },
        description: { textStyle: "xl" },
      },
    },
  },
  compoundVariants: [
    {
      orientation: "vertical",
      placement: "alternate",
      css: {
        root: {
          alignItems: "center",
        },
        item: {
          width: "50%",

          _odd: {
            flexDirection: "row",
            alignSelf: "flex-end",

            "& .timeline__indicator": {
              transform: "translateX(-50%)",
            },
            "& .timeline__connector": {
              left: "calc(-1 * var(--timeline-connector-width) / 2)",
            },

            "& .timeline__content": {
              ml: "gap.inline.md",
              textAlign: "left",
            },
          },

          _even: {
            flexDirection: "row-reverse",
            alignSelf: "flex-start",

            "& .timeline__indicator": {
              transform: "translateX(50%)",
            },
            "& .timeline__connector": {
              left: "calc(100% - var(--timeline-connector-width) / 2)",
            },

            "& .timeline__content": {
              mr: "gap.inline.md",
              ml: "0",
              textAlign: "right",
            },
          },
        },
      },
    },
  ],
  defaultVariants: {
    orientation: "vertical",
    placement: "right",
    variant: "default",
    indicatorSize: "md",
    textSize: "sm",
  },
});
