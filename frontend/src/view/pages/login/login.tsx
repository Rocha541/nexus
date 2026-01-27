import { Button } from '@/components/ui/button'
import { FieldLabel } from '@/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Link } from '@tanstack/react-router'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { MailIcon, UserLock } from 'lucide-react'

const formSchema = z.object({
    title: z
        .string()
        .min(5, 'Bug title must be at least 5 characters.')
        .max(32, 'Bug title must be at most 32 characters.'),
    description: z
        .string()
        .min(20, 'Description must be at least 20 characters.')
        .max(100, 'Description must be at most 100 characters.'),
})

function login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            description: '',
        },
    })
     function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data)
     }
    return (
        <>
            <div className='w-full h-full  gap-3 flex flex-col justify-center items-center  '>
                <div>
                    <h1 className='font-serif  font-bold text-2xl text-center tracking-[-1px]'>
                        Entre em sua conta
                    </h1>
                </div>
                <div className='flex gap-1.5'>
                    <p className='font-serif font-normal  text-zinc-900 tracking-[-1px] '>
                        Novo por aqui?
                    </p>
                    <Link
                        to='/register'
                        className='font-serif font-semibold text-emerald-500 tracking-[-0.5px] '
                    >
                        Crie uma conta
                    </Link>
                </div>
                <div className='w-full max-w-110 flex flex-col gap-y-3'>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-2 ' action=''>
                        <FieldLabel
                            className='font-serif font-bold text-zinc-900 px-3 '
                            htmlFor='inline-end-input'
                        >
                            E-mail
                        </FieldLabel>
                        <InputGroup className='h-13'>
                            <InputGroupAddon align='inline-start'>
                                <MailIcon className='text-emerald-500' />
                            </InputGroupAddon>
                            <InputGroupInput
                                id='inline-end-input'
                                type='email'
                                placeholder='Enter email'
                            />
                        </InputGroup>
                        <FieldLabel
                            className='font-serif font-bold text-zinc-900 px-3  mt-2'
                            htmlFor='inline-end-input'
                        >
                            Senha
                        </FieldLabel>
                        <InputGroup className='h-13 autofill:bg-transparent'>
                            <InputGroupAddon align='inline-start'>
                                <UserLock className='text-emerald-500' />
                            </InputGroupAddon>
                            <InputGroupInput
                                id='inline-end-input'
                                type='password'
                                placeholder='Enter password'
                            />
                        </InputGroup>
                    </form>

                    <Link to='/dashboard'>
                        <Button className='h-13 mt-3 text-md w-full bg-emerald-500 hover:bg-green-700 font-serif font-bold text-zinc-50'>
                            Entrar
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default login
function zodResolver(formSchema: z.ZodObject<{ title: z.ZodString; description: z.ZodString }, z.core.$strip>) {
    throw new Error('Function not implemented.')
}

function useForm<T>(arg0: { resolver: void; defaultValues: { title: string; description: string } }) {
    throw new Error('Function not implemented.')
}

