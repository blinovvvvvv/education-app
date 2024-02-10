import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { fireEvent, screen } from '@testing-library/react'
import { Dropdown } from './Dropdown'

describe('SwitchExercise', () => {
	beforeEach(() => {
		componentRender(
			<Dropdown buttonText='Text' content={[{ link: '/', text: 'text' }]} />
		)
	})
	test('renders dropdown', () => {
		const dropdown = screen.getByTestId('dropdown')

		expect(dropdown).toBeInTheDocument()
	})

	test('dropdown is opening', () => {
		const dropdown = screen.getByTestId('dropdown')

		fireEvent.mouseEnter(dropdown)

		const dropdownContent = screen.getByTestId('dropdown.content')

		expect(dropdownContent).toBeInTheDocument()
		expect(dropdownContent).toBeVisible()
	})

	test('dropdown is closing', () => {
		const dropdown = screen.getByTestId('dropdown')

		fireEvent.mouseEnter(dropdown)

		const dropdownContent = screen.getByTestId('dropdown.content')

		fireEvent.mouseLeave(dropdown)

		expect(dropdownContent).not.toBeVisible()
	})
})
