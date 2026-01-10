import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import {
    signInMutationOptions,
    signOutMutationOptions,
    resetPasswordMutationOptions,
    updateUserMutationOptions
} from '../api/auth.mutations'
import { userOptions } from '../api/auth.queries'

export function useUser() {
    return useQuery(userOptions)
}

export function useSignIn() {
    const router = useRouter()

    return useMutation({
        ...signInMutationOptions,
        onSuccess: () => {
            toast.success('Login realizado com sucesso')
            router.push('/overview')
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })
}

export function useSignOut() {
    const router = useRouter()

    return useMutation({
        ...signOutMutationOptions,
        onSuccess: () => {
            toast.success('Logout realizado com sucesso')
            router.push('/auth/login')
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })
}

export function useResetPassword() {
    return useMutation({
        ...resetPasswordMutationOptions, onSuccess: () => {
            toast.success('Senha redefinida com sucesso')
        }, onError: (err) => {
            toast.error(err.message)
        }
    })
}

export function useUpdateUser() {
    return useMutation({
        ...updateUserMutationOptions,
        onSuccess: () => {
            toast.success('Profile updated successfully')
        },
        onError: (err) => {
            toast.error(err.message)
        }
    })
}
