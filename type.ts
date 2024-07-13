type Permutation<T, K = T> = [T] extends [never]
	? []
	: K extends K
	? [K, ...Permutation<Exclude<T, K>>]
	: never;

type LengthOfString<
	S extends string,
	T extends string[] = []
> = S extends `${infer first}${infer rest}`
	? LengthOfString<rest, [...T, first]>
	: T["length"];
