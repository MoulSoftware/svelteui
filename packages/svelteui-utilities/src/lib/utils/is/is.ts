/**
 * Type guards to define whether a value is of a specific type
 */

import { browser } from '$app/env';
let isClient;
if (browser) {
	isClient = typeof window !== undefined;
}

const toString = Object.prototype.toString;
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';
export const isFunction = <T extends Function>(val: any): val is T => typeof val === 'function';
export const isNumber = (val: any): val is number => typeof val === 'number';
export const isString = (val: unknown): val is string => typeof val === 'string';
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]';
export const isWindow = (val: any): val is Window =>
	typeof window !== 'undefined' && toString.call(val) === '[object Window]';
export const now = () => Date.now();
export const timestamp = () => +Date.now();
export const sleep = (ms: number = 2000) => new Promise((r) => setTimeout(r, ms));
export const rand = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { isClient };
