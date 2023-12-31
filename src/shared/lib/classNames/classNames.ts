export type Mods = Record<string, boolean | string | undefined>

export function cn(...args: (string | Mods | undefined)[]) {
	let strings: string[] = []
	let lastArgument: Mods = {}

	if (args.length > 0) {
		const lastArg = args[args.length - 1]
		if (typeof lastArg === 'object' && !Array.isArray(lastArg)) {
			lastArgument = args.pop() as Record<string, any>
			strings = args as string[]
		} else {
			strings = args as string[]
		}
	}

	return [
		...strings.filter(Boolean),
		Object.entries(lastArgument)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ')
}
