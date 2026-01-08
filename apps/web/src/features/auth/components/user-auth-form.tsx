'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/forms/form-input';
import { Form } from '@/components/ui/form';
import { useSignIn } from '../hooks/use-auth';
import { toast } from 'sonner';


const formSchema = z.object({
  email: z.email({ message: 'Insira um email válido' }),
  password: z.string().min(1, { message: 'Senha é obrigatória' })
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const signIn = useSignIn()

  const onSubmit = (data: UserFormValue) => {
    signIn.mutate({ email: data.email, password: data.password }, {
      onSuccess: () => {
        form.reset()
        toast.success('Login realizado com sucesso')
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  };

  return (
    <>
      <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4'>
        <div className='flex flex-col gap-2'>
          <FormInput
            control={form.control}
            name='email'
            label='Email'
            placeholder='Insira seu email...'
            type='email'
            disabled={signIn.isPending}
          />
          <FormInput
            control={form.control}
            name='password'
            label='Senha'
            placeholder='Insira sua senha...'
            type='password'
            disabled={signIn.isPending}
          />
        </div>
        <Button disabled={signIn.isPending} className='ml-auto w-full' type='submit'>
          {signIn.isPending ? 'Entrando...' : 'Entrar'}
        </Button>
      </Form>

    </>
  );
}

