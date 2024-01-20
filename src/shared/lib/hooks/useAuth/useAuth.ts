import { useTypedSelector } from '../useTypedSelector/useTypedSelector'

export const useAuth = () => useTypedSelector(state => state.user.data!)
