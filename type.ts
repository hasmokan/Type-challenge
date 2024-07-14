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

type StringToUnion<T extends string> = T extends `${infer first}${infer rest}`
	? first | StringToUnion<rest>
	: never;
/**
 * https://www.typescriptlang.org/play/?ssl=33&ssc=1&pln=30&pc=1#code/PQKgUABBCsCcsQLQQLIFMBOBzNkmIMLwCMBPCALQE0BlAL1IGcIAKAAWvqYEoIBiALZoAJgEsArgP4B7YgCs0AYwAuYPHw0QAiuLSNlo6QDs1UdNjQRlAd2lXSABz0RRR5XYCGEI2mv2nAHQQANJoTBDSAGZWABaWjErGwv6W0gBumBiiws4A1mHMUbGWkaIY+ikBphAAYtIYEGgAHh4CDgA2uHgABr3KjHjKjiXSdgC8EADeeFBGrWgAXBD6WUZYMxAeOEsrrutQAL6DwxCKoxAT01BQW4veksSYGwlNO8qr+xBHx04QAEp6cTtZQXVCYHAAHkiowANKdRgA+CDAYCNJpOFQiKx2R5TOZCN4fOG3JZGB6YOEvQl7I5QXrdapIgBqol8ESMEAA4qJlAAJcTEJYxZTKByMBYo-qKGIBOSMAL1LDAOCwMAgYBqUAQAD6ur1+r1ECo0nEDQAwtIchBeZhLAb7bqIOq1ENfuZITU4TQkZc8ABtfKkGguDksQNFYMAHwg4eiNW4AF0IEtA8Hmso0EZhMxYxBgwB+PMBsI0JMpktojNZnNhIo1CCFmrFoNl7xoDIYADcYAOEE1IB1DoNEAAKnoQWaPAlmEPh87RG16iDXZZJhAAKIAR3EHnacPX6KUIN7kQw0ikAHI2CvENLd501npgOIDO1GBeXSc6uMpngPKTyQwEhqTWHswBXCAACEPAaX0oEFe4BEeICoEUJZiFGToPBMb4IK8MZ3TQCFvzhaCMART9fkUKdnAmP08APDFlAhLcd3aCFCOI2EoJghE4Sua5-0Q5CNgQskkKea5TnQzC0GwvADgRPiwATftB1nR0alNZQ4gaGgMzFdSNKdDVQDwJEaBiGDLFIE0GkYaR2hfQwjHFCBhVFcVJUYaVZXlRVlXgYBsMYaxJIgZlWT8BynIMYw3I8sUJWAKUZTlBVsEC2BgBi5z4vM1B6ksM0rPaB8cASkUku83z0sVNUNSAA
 */
type Merge<F, S> = {
	[keyS in keyof S | keyof F]: keyS extends keyof S
		? S[keyS]
		: keyS extends keyof F
		? F[keyS]
		: never;
}

type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
  ? `${Uncapitalize<S1>}${KebabCase<S2>}`
  : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;
