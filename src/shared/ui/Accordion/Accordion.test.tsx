import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { fireEvent, screen } from '@testing-library/react'
import { Accordion } from './Accordion'

describe('Accordion', () => {
	beforeEach(() => {
		componentRender(<Accordion title='Title' content={<div>Content</div>} />)
	})

	test('renders accordion', () => {
		const accordion = screen.getByTestId('accordion')

		expect(accordion).toBeInTheDocument()
	})

	test('should open accordion', () => {
		const accordion = screen.getByTestId('accordion')

		fireEvent.click(accordion)

		const accordionContent = screen.getByTestId('accordion.content')

		expect(accordionContent).toBeInTheDocument()
		expect(accordionContent).toBeVisible()
	})
})
