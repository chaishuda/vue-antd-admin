import { useUser } from './modules/user'
export default function useStore() {
    return {
        user: useUser()
    }
}