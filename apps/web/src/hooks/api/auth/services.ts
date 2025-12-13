import { createClient } from '@/lib/supabase/client'
import { SignInParams, ResetPasswordParams, UpdatePasswordParams } from './types'

const supabase = createClient()

export async function signInWithPassword({ email, password }: SignInParams) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if (error) throw error
    return data
}

export async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}

export async function resetPasswordForEmail({ email }: ResetPasswordParams) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
    })
    if (error) throw error
    return data
}

export async function updateUser({ password }: UpdatePasswordParams) {
    const { data, error } = await supabase.auth.updateUser({
        password
    })
    if (error) throw error
    return data
}
