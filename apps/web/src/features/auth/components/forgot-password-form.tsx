'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/forms/form-input';
import { Form } from '@/components/ui/form';
import { useResetPassword } from '../hooks/use-auth';

const formSchema = z.object({
    email: z.email({ message: 'Insira um email válido' })
});

type ForgotPasswordFormValue = z.infer<typeof formSchema>;

export default function ForgotPasswordForm() {
    const form = useForm<ForgotPasswordFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ''
        }
    });

    const { mutate: resetPassword, isPending } = useResetPassword();

    const onSubmit = (data: ForgotPasswordFormValue) => {
        resetPassword({ email: data.email }, {
            onSuccess: () => {
                form.reset();
            }
        })
    };

    return (
        <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
            <div className='flex flex-col gap-2'>
                <FormInput
                    control={form.control}
                    name='email'
                    label='Email'
                    placeholder='Insira seu email...'
                    type='email'
                    disabled={isPending}
                />
            </div>
            <Button disabled={isPending} className='ml-auto w-full' type='submit'>
                {isPending ? 'Enviando...' : 'Enviar email'}
            </Button>
        </Form>
    );
}
