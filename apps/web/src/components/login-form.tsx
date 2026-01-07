'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Spinner } from '@/components/ui/spinner'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import {
  InputGroup,
  InputGroupInput,
} from './ui/input-group'
import { Eye, EyeClosed } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Item, ItemMedia } from './ui/item'
import { useSignIn } from '@/features/auth/hooks/use-auth'
import { useTheme } from 'next-themes'

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const signIn = useSignIn()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const handlePasswordVisibilityToggle = () => {
    setIsPasswordHidden((prev) => !prev)
  }
  const router = useRouter()
  const { resolvedTheme } = useTheme()

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    signIn.mutate({ email, password })
    // if (signIn.isError) return
    // router.push('/overview')
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="w-full flex flex-col items-center space-y-4">
        {resolvedTheme && <Image
          width={200}
          height={58}
          src={(resolvedTheme === 'dark') ? '/logo-dark.svg' : '/logo.svg'}
          alt="Malu System Logo"
        />}
        <small className="dark:text-neutral-400 text-sm">
          Faça login para acessar o painel de controle
        </small>
      </div>
      <Card>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Senha:</Label>
                <InputGroup>
                  <InputGroupInput
                    id="password"
                    type={isPasswordHidden ? 'password' : 'text'}
                    placeholder="********"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Item
                        variant="default"
                        className="p-2 cursor-pointer border-l-border opacity-70 hover:opacity-100 hover:text-primary"
                        onClick={() => handlePasswordVisibilityToggle()}
                      >
                        <ItemMedia className="w-4 h-4">
                          {isPasswordHidden ? <Eye /> : <EyeClosed />}
                        </ItemMedia>
                      </Item>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>A senha ficará visível para todos!</p>
                    </TooltipContent>
                  </Tooltip>
                </InputGroup>
              </div>
              {signIn.isError && <p className="text-sm text-red-500">{signIn.error?.message}</p>}
              <Button type="submit" className="w-full" disabled={signIn.isPending}>
                {signIn.isPending ? <Spinner /> : 'Entrar'}
              </Button>
              <Link
                href="/auth/forgot-password"
                className="mx-auto inline-block text-sm underline-offset-4 hover:underline hover:opacity-100 opacity-60"
              >
                Esqueceu sua senha? Redefina aqui.
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
