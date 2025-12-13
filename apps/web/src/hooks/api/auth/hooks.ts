import { useMutation } from '@tanstack/react-query'
import {
    signInWithPassword,
    signOut,
    resetPasswordForEmail,
    updateUser
} from './services'

export function useSignIn() {
    return useMutation({
        mutationFn: signInWithPassword,
    })
}

export function useSignOut() {
    return useMutation({
        mutationFn: signOut,
    })
}

export function useResetPassword() {
    return useMutation({
        mutationFn: resetPasswordForEmail,
    })
}

export function useUpdateUser() {
    return useMutation({
        mutationFn: updateUser,
    })
}
