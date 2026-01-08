'use client'
import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';
import { useTheme } from 'next-themes';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage() {


  const { resolvedTheme } = useTheme()

  return (
    <div className='relative h-screen flex-col items-center justify-center'>

      <div className='flex h-full items-center justify-center p-4 lg:p-8'>
        <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            {resolvedTheme && <Image
              width={200}
              height={58}
              src={(resolvedTheme === 'dark') ? '/logo-dark.svg' : '/logo.svg'}
              alt="Malu System Logo"
            />}
            <p className='text-muted-foreground text-sm'>
              Faça login para acessar o painel de controle
            </p>
          </div>
          <UserAuthForm />
          <Link
            href="/auth/forgot-password"
            className="mx-auto inline-block text-sm underline-offset-4 hover:underline hover:opacity-100 opacity-60"
          >
            Esqueceu sua senha? Redefina aqui.
          </Link>

          <p className='text-muted-foreground px-8 text-center text-sm'>
            By clicking continue, you agree to our{' '}
            <Link
              href='/terms'
              className='hover:text-primary underline underline-offset-4'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy'
              className='hover:text-primary underline underline-offset-4'
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
