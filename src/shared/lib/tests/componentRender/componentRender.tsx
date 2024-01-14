import { ReduxProvider, StoreState } from '@/app/providers/StoreProvider'
import { render } from '@testing-library/react'
import { FC, PropsWithChildren, ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'

export interface componentRenderOptions {
	route?: string
	initialState?: DeepPartial<StoreState>
}

interface TestProviderProps {
	options?: componentRenderOptions
}

export const TestProvider: FC<PropsWithChildren<TestProviderProps>> = ({
	options = {},
	children,
}) => {
	const { initialState, route = '/' } = options
	return (
		<MemoryRouter initialEntries={[route]}>
			<ReduxProvider initialState={initialState}>{children}</ReduxProvider>
		</MemoryRouter>
	)
}

export function componentRender(
	element: ReactElement,
	options?: componentRenderOptions
) {
	return render(<TestProvider options={options}>{element}</TestProvider>)
}
