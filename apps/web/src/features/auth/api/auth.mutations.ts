import { mutationOptions, useQueryClient } from '@tanstack/react-query'
import { authKeys } from './auth.keys'
import {
    signInWithPasswordService,
    signOutService,
    resetPasswordForEmailService,
    updateUserService
} from '../services/auth.service'

export const signInMutationOptions = mutationOptions({
    mutationKey: authKeys.signIn(),
    mutationFn: signInWithPasswordService,
    onSettled: (data, error, variables, onmonMutateResult, context) => {
        context.client.invalidateQueries({ queryKey: authKeys.user() })
    }
})


export const signOutMutationOptions = mutationOptions({
    mutationKey: authKeys.signOut(),
    mutationFn: signOutService,
    onSettled: (data, error, variables, onmonMutateResult, context) => {
        context.client.clear()
    }
})


export const resetPasswordMutationOptions = mutationOptions({
    mutationKey: authKeys.resetPassword(),
    mutationFn: resetPasswordForEmailService,
    onSettled: (data, error, variables, onmonMutateResult, context) => {
        context.client.invalidateQueries({ queryKey: authKeys.user() })
    }
})


export const updateUserMutationOptions = mutationOptions({
    mutationKey: authKeys.updateUser(),
    mutationFn: updateUserService,
    onMutate: async (variables, context) => {
        await context.client.cancelQueries({ queryKey: authKeys.user() })
        const previousUser = context.client.getQueryData<any>(authKeys.user())

        return { previousUser }
    },
    onSuccess: (data, variables, onMutateResult, context) => {
    },
    onError: (error, variables, onMutateResult, context) => {
        if (onMutateResult?.previousUser) {
            context.client.setQueryData(authKeys.user(), onMutateResult.previousUser)
        }
    },
    onSettled: (data, error, variables, onmonMutateResult, context) => {
        context.client.invalidateQueries({ queryKey: authKeys.user() })
    }
})
