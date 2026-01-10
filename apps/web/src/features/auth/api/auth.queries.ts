import { queryOptions } from '@tanstack/react-query'
import { authKeys } from './auth.keys'
import { getUserService } from '../services/auth.service'

export const userOptions = queryOptions({
    queryKey: authKeys.user(),
    queryFn: () => getUserService(),
    staleTime: 1000 * 60 * 60, // 1 hour (optimizing for fewer auth checks, assuming session persistence)
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
})
