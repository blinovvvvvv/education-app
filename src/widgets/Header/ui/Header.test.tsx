import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { fireEvent, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
	test('renders header', () => {
		componentRender(<Header />)
		const header = screen.getByTestId('header')

		expect(header).toBeInTheDocument()
	})

	test('should open header curtain', () => {
		componentRender(<Header />)

		const toggleBtn = screen.getByTestId('header.btn')

		expect(screen.getByTestId('header')).toBeInTheDocument()

		fireEvent.click(toggleBtn)

		expect(screen.getByTestId('header.curtain')).toBeInTheDocument()
	})
})
