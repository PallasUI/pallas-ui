/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index';
import type { Properties } from '../types/csstype';
import type { SystemProperties } from '../types/style-props';
import type { DistributiveOmit } from '../types/system-types';
import type { Tokens } from '../tokens/index';

export interface FlexProperties {
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
	align?: SystemProperties["alignItems"]
	justify?: SystemProperties["justifyContent"]
	direction?: SystemProperties["flexDirection"]
	wrap?: SystemProperties["flexWrap"]
	basis?: SystemProperties["flexBasis"]
	grow?: SystemProperties["flexGrow"]
	shrink?: SystemProperties["flexShrink"]
	gap?: SystemProperties["gap"]
	gapX?: SystemProperties["columnGap"]
	gapY?: SystemProperties["rowGap"]
}


interface FlexStyles extends FlexProperties, DistributiveOmit<SystemStyleObject, keyof FlexProperties > {}

interface FlexPatternFn {
  (styles?: FlexStyles): string
  raw: (styles?: FlexStyles) => SystemStyleObject
}


export declare const flex: FlexPatternFn;
