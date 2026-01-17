import payments from '../../assets/payments.svg'

export default function AuthLayout() {
    return (
        <div className='flex w-full h-screen'>
            <div className='w-1/2 bg-ciano-500 h-full'></div>
            <div className='w-1/2 h-full flex justify-center items-center p-8 '>
                <img
                    src={payments}
                    className=' object-contain w-147 h-full w-max-[30px] rounded-4xl'
                />
                <div
                    className='bg-emerald-500  min-h-min max-w-96 p-10
                 rounded-4xl absolute bottom-75 right-30 text-align '
                >
                    <p className='font-serif text-zinc-50 text-lg font-medium'>
                        Organize e acompanhe suas finanças pessoais com o Fincheck. <br />
                        Simples, seguro e 100% gratuito.
                    </p>
                </div>
            </div>
        </div>
    )
}
