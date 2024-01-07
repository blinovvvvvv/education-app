import { cn } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTypedSelector } from '@/shared/lib/hooks/useTypedSelector/useTypedSelector'
import { Button } from '@/shared/ui/Button/Button'
import { Card } from '@/shared/ui/Card/Card'
import { Input } from '@/shared/ui/Input/Input'
import { Title } from '@/shared/ui/Title/Title'
import { FC, useCallback } from 'react'
import { loginByUsername } from '../../model/services/login.service'
import { useLoginActions } from '../../model/slice/login.slice'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
	className?: string
	onSuccess: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
	const login = useTypedSelector(state => state.login.login)
	const password = useTypedSelector(state => state.login.password)
	const { setLogin, setPassword } = useLoginActions()
	const dispatch = useAppDispatch()

	const onChangeLogin = useCallback(
		(value: string) => {
			setLogin(value)
		},
		[setLogin]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			setPassword(value)
		},
		[setPassword]
	)

	const onClickHandler = useCallback(async () => {
		if (login && password) {
			const response = await dispatch(
				loginByUsername({
					login,
					password,
				})
			)

			if (response.meta.requestStatus === 'fulfilled') {
				onSuccess()
			}
		}
	}, [dispatch, login, onSuccess, password])

	return (
		<div className='mt-36'>
			<Card className={cn(styles.form, className)}>
				<Title size='s' className='text-center my-8'>
					Войти в профиль
				</Title>
				<div className='flex flex-col gap-6'>
					<Input value={login} onChange={onChangeLogin} placeholder='Логин' />
					<Input
						min={8}
						value={password}
						onChange={onChangePassword}
						type='password'
						placeholder='Пароль'
					/>
					<Button onClick={onClickHandler}>Войти</Button>
				</div>
			</Card>
		</div>
	)
}
