import { ErrorPage } from '@/pages/ErrorPage'
import React, { ErrorInfo, ReactNode, Suspense } from 'react'

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true }
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error(error, info.componentStack)
	}

	render() {
		if (this.state.hasError) {
			return (
				<Suspense>
					<ErrorPage />
				</Suspense>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
