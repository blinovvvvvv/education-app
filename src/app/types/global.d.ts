type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
	  }
	: T

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T
}

declare const __API__: string
declare const __IS_DEV__: string
