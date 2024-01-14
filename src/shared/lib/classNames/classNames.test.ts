import { cn } from './classNames'

describe('classNames.test', () => {
	it('should be ok', () => {
		expect(cn('class', 'class2')).toBe('class class2')
	})
})
