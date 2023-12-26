import { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'

export const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className={styles.container}>{children}</div>
}
