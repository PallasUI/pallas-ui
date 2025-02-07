/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index';
import type { Properties } from '../types/csstype';
import type { SystemProperties } from '../types/style-props';
import type { DistributiveOmit } from '../types/system-types';
import type { Tokens } from '../tokens/index';

export interface BoxProperties {
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
}


interface BoxStyles extends BoxProperties, DistributiveOmit<SystemStyleObject, keyof BoxProperties > {}

interface BoxPatternFn {
  (styles?: BoxStyles): string
  raw: (styles?: BoxStyles) => SystemStyleObject
}


export declare const box: BoxPatternFn;
