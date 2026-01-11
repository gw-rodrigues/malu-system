
import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';
import Logo from '@/components/logo';

export const metadata: Metadata = {
  title: 'Autenticação',
  description: 'Autenticação para acessar o painel de controle.'
};

export default function SignInViewPage() {
  return (
    <div className='flex h-full items-center justify-center p-4 lg:p-8'>
      <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <Logo />
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
          Ao clicar em continuar, você concorda com nossos{' '}
          <Link
            href='/terms'
            className='hover:text-primary underline underline-offset-4'
          >
            Termos de Serviço
          </Link>{' '}
          e{' '}
          <Link
            href='/privacy'
            className='hover:text-primary underline underline-offset-4'
          >
            Política de Privacidade
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
