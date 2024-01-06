import { StoreState } from '@/app/providers/StoreProvider'

//@ts-ignore
export const getValue = (state: StoreState) => state?.counter?.value
