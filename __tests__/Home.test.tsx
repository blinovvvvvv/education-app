import { render, screen } from '../test/testing'
import Home from 'pages/home/Home'

describe('test home component', () => {
	beforeEach(() => {
		render(<Home />)
	})

	it('should find a title', async () => {
		expect(await screen.findByText('RRRR + React')).toBeInTheDocument()
	})
})
