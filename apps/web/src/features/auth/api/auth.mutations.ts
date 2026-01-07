import { useQueryClient } from '@tanstack/react-query'
import { authKeys } from './auth.keys'
import {
    signInWithPassword,
    signOut,
    resetPasswordForEmail,
    updateUser
} from '../services/auth.service'

export const signInMutation = (queryClient: ReturnType<typeof useQueryClient>) => ({
    mutationFn: signInWithPassword,
    onSettled: () => {
        queryClient.invalidateQueries({ queryKey: authKeys.user() })
    }
})

export const signOutMutation = (queryClient: ReturnType<typeof useQueryClient>) => ({
    mutationFn: signOut,
    onSettled: () => {
        queryClient.removeQueries()
        // OR specifically queryClient.invalidateQueries({ queryKey: authKeys.user() })
        // But rule says: "Always clear the queryClient on Supabase Auth SIGNED_OUT events."
        // So clearing everything is safer/correct for logout.
        queryClient.clear()
    }
})

export const resetPasswordMutation = () => ({
    mutationFn: resetPasswordForEmail,
})

export const updateUserMutation = (queryClient: ReturnType<typeof useQueryClient>) => ({
    mutationFn: updateUser,
    onSettled: () => {
        queryClient.invalidateQueries({ queryKey: authKeys.user() })
    }
})
