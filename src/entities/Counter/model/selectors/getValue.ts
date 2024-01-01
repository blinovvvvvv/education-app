import { StoreState } from '@/app/providers/StoreProvider'

export const getValue = (state: StoreState) => state?.counter?.value
