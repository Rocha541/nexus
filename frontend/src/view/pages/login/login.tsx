import { Button } from '@/components/ui/button'
import { FieldLabel } from '@/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Link, useNavigate } from '@tanstack/react-router'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import { MailIcon, UserLock } from 'lucide-react'
import { loginSchema } from '@/schemas/auth/login-schema'

function Login() {
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })
    function onSubmit(data: z.infer<typeof loginSchema>) {
        navigate({ to: '/dashboard' })
        console.log(data)
    }
    return (
        <>
            <div className='w-full h-full  gap-3 flex flex-col justify-center items-center  '>
                <div>
                    <h1 className='font-sora  font-semibold text-2xl text-center tracking-[-1px]'>
                        Entre em sua conta
                    </h1>
                </div>
                <div className='flex gap-1.5'>
                    <p className='font-outfit font-normal  text-zinc-900 tracking-[-1px] '>
                        Novo por aqui?
                    </p>
                    <Link
                        to='/register'
                        className='font-outfit font-semibold text-green-600 tracking-[-0.5px] '
                    >
                        Crie sua conta em segundos
                    </Link>
                </div>
                <div className='w-full max-w-110 flex  flex-col gap-y-3'>
                    <form
                    noValidate
                     onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-2'>
                        <FieldLabel className='font-sora font-semibold text-zinc-900 px-3'>
                            E-mail
                        </FieldLabel>

                        <InputGroup className={`h-13 border-green-700 ${form.formState.errors.email ? 'border-red-400' : ''}`}>
                            <InputGroupInput
                                type='email'
                                placeholder='Enter email'
                                {...form.register('email')}
                            />
                            <InputGroupAddon align='inline-start'>
                                <MailIcon className='text-green-600' />
                            </InputGroupAddon>
                        </InputGroup>

                        {form.formState.errors.email && (
                            <p className='text-sm font-outfit font-light text-red-500 px-3'>
                                {form.formState.errors.email.message}
                            </p>
                        )}

                        <FieldLabel className='font-sora font-medium text-zinc-900 px-3 mt-2'>
                            Senha
                        </FieldLabel>

                        <InputGroup className={`h-13 border-green-700 ${form.formState.errors.password ? 'border-red-400' : ''}`}>
                            <InputGroupInput
                          
                                type='password'
                                placeholder='Enter password'
                                {...form.register('password')}
                            />
                            <InputGroupAddon align='inline-start'>
                                <UserLock className='text-green-600' />
                            </InputGroupAddon>
                        </InputGroup>

                        {form.formState.errors.password && (
                            <p className='text-sm font-outfit font-light text-red-500 px-3'>
                                {form.formState.errors.password.message}
                            </p>
                        )}

                        <Button
                            type='submit'
                            className='h-13 w-4/5 mx-auto mt-3  font-outfit  font-semibold text-green-700 bg-green-200 border border-green-700 shadow-xl hover:bg-green-700 hover:border-green-200 hover:border-2 hover:text-green-200'
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? 'Entrando...' : 'Entrar'}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login
