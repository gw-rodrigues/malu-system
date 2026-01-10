export const authKeys = {
    all: () => ['auth'] as const,
    user: () => [...authKeys.all(), 'user'] as const,
    signIn: () => [...authKeys.all(), 'signIn'] as const,
    signOut: () => [...authKeys.all(), 'signOut'] as const,
    resetPassword: () => [...authKeys.all(), 'resetPassword'] as const,
    updateUser: () => [...authKeys.all(), 'updateUser'] as const,
} as const;
