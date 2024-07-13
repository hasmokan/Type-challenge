type Permutation<T, K = T> = [T] extends [never]
	? []
	: K extends K
	? [K, ...Permutation<Exclude<T, K>>]
	: never;

/**
 * medium
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
 */
type LengthOfString<
	S extends string,
	T extends string[] = []
> = S extends `${infer first}${infer rest}`
	? LengthOfString<rest, [...T, first]>
	: T["length"];

type Flatten<T extends any[]> = T extends [infer first, ...infer rest]
	? first extends any[]
		? Flatten<[...first, ...rest]>
		: [first, ...Flatten<rest>]
	: T;


    
type result = Flatten<[1, 2, [3, 4], [[[5]]]]>; 