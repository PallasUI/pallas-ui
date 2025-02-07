/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index';
import type { Properties } from '../types/csstype';
import type { SystemProperties } from '../types/style-props';
import type { DistributiveOmit } from '../types/system-types';
import type { Tokens } from '../tokens/index';

export interface GridProperties {
   p?: SystemProperties["padding"]
	px?: SystemProperties["paddingInline"]
	py?: SystemProperties["paddingBlock"]
	pt?: SystemProperties["paddingTop"]
	pr?: SystemProperties["paddingRight"]
	pb?: SystemProperties["paddingBottom"]
	pl?: SystemProperties["paddingLeft"]
	width?: SystemProperties["width"]
	minWidth?: SystemProperties["minWidth"]
	maxWidth?: SystemProperties["maxWidth"]
	height?: SystemProperties["height"]
	minHeight?: SystemProperties["minHeight"]
	maxHeight?: SystemProperties["maxHeight"]
	position?: SystemProperties["position"]
	gap?: SystemProperties["gap"]
	columnGap?: SystemProperties["gap"]
	rowGap?: SystemProperties["gap"]
	columns?: ConditionalValue<number>
	minChildWidth?: ConditionalValue<Tokens["sizes"] | Properties["width"]>
}


interface GridStyles extends GridProperties, DistributiveOmit<SystemStyleObject, keyof GridProperties > {}

interface GridPatternFn {
  (styles?: GridStyles): string
  raw: (styles?: GridStyles) => SystemStyleObject
}


export declare const grid: GridPatternFn;
