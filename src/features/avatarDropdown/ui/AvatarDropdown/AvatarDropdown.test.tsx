import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { fireEvent, screen } from '@testing-library/react'
import { AvatarDropdown } from './AvatarDropdown'

describe('AvatarDropdown', () => {
	test('renders avatar dropdown', () => {
		componentRender(<AvatarDropdown />)
		const avatarDropdown = screen.getByTestId('avatar-dropdown')

		expect(avatarDropdown).toBeInTheDocument()
	})

	test('should open avatar dropdown', () => {
		componentRender(<AvatarDropdown />)

		const avatarDropdown = screen.getByTestId('avatar-dropdown')

		fireEvent.click(avatarDropdown)

		const avatarDropdownContent = screen.getByTestId('avatar-dropdown.content')

		expect(avatarDropdownContent).toBeInTheDocument()
		expect(avatarDropdownContent).toBeVisible()
	})
})
