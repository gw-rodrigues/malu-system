import Link from 'next/link';
import ForgotPasswordForm from './forgot-password-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Recuperar Senha',
    description: 'Recuperar Senha para acessar o painel de controle.'
};

export default function ForgotPasswordView() {
    return (
        <div className='flex h-full items-center justify-center p-4 lg:p-8'>
            <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
                <div className='flex flex-col items-center space-y-4 text-center'>

                    <div className='flex flex-col items-center space-y-2 text-center'>
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Esqueceu sua senha?
                        </h1>
                        <p className='text-muted-foreground text-sm'>
                            Digite seu email para receber um link de redefinição
                        </p>
                    </div>
                </div>
                <ForgotPasswordForm />

                <Link
                    href="/auth/login"
                    className="mx-auto inline-block text-sm underline-offset-4 hover:underline hover:opacity-100 opacity-60"
                >
                    Voltar para o login
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
