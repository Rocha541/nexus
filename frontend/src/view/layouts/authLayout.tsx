import payments from '../../assets/payments.svg'
import Logo from '../../assets/Logo.svg'

import { Outlet } from '@tanstack/react-router'

export default function AuthLayout() {
    return (
        <div className='  flex w-full h-screen bg-zinc-50'>
            <div className='w-full lg:w-1/2  h-full flex justify-center items-center flex-col gap-16'>
                <img src={Logo} className='w-10' />
                 <div className=" w-full max-w-126 px-8 ">
                    <Outlet />
                </div>

            </div>
            <div className='w-1/2 h-full justify-center items-center flex-col gap-16 p-8 hidden lg:flex '>
                <img
                    src={payments}
                    className=' object-contain w-147 h-full w-max-[30px] rounded-4xl'
                />
               
                
            </div>
        </div>
    )
}
