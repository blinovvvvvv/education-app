import { Home } from '@pages/home'
import { render, screen } from '../test/testing'

describe('test home component', () => {
	beforeEach(() => {
		render(<Home />)
	})

	it('should find a title', async () => {
		expect(await screen.findByText('RRRR + React')).toBeInTheDocument()
	})
})
