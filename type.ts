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
