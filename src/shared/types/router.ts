import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
	isAdmin?: boolean
	authOnly?: boolean
}
