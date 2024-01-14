import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
	test('renders header', () => {
		componentRender(<Header />)
		const element = screen.getByTestId('header')

		expect(element).toBeInTheDocument()
	})
})
