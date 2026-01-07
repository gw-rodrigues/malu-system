import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import {
    signInMutation,
    signOutMutation,
    resetPasswordMutation,
    updateUserMutation
} from '../api/auth.mutations'
import { userOptions } from '../api/auth.queries'

export function useUser() {
    return useQuery(userOptions)
}

export function useSignIn() {
    const queryClient = useQueryClient()
    const router = useRouter()

    // We destruct the mutation config to override onSuccess for navigation
    // But we keep onSettled from the factory.
    // Actually, useMutation accepts one object. merging is tricky.
    // Let's us the factory pattern fully.

    // The previous implementation had onSuccess navigation.
    // We should probably keep that UI logic here in the hook or pass it to the mutation factory?
    // Rule: "Hooks are thin Data Shapers... connect components to API layer"

    const mutationConfig = signInMutation(queryClient)

    return useMutation({
        ...mutationConfig,
        onSuccess: (data, variables, context) => {
            router.push('/overview')
        }
    })
}

export function useSignOut() {
    const queryClient = useQueryClient()
    const router = useRouter()

    const mutationConfig = signOutMutation(queryClient)

    return useMutation({
        ...mutationConfig,
        onSuccess: (data, variables, context) => {
            router.push('/auth/login')
        }
    })
}

export function useResetPassword() {
    return useMutation(resetPasswordMutation())
}

export function useUpdateUser() {
    const queryClient = useQueryClient()
    return useMutation(updateUserMutation(queryClient))
}
