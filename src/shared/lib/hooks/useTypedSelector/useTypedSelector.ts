import { StoreState } from '@/app/providers/StoreProvider'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<StoreState> = useSelector
