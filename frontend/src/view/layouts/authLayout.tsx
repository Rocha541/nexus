import Illustration from '../../assets/Illustration.png'
import Logo from '../../assets/Logo.svg'
import { Outlet } from '@tanstack/react-router'

export default function AuthLayout() {
    return (
        <div className='  flex w-full h-screen bg-zinc-50'>
            <div className='w-full lg:w-1/2  h-full flex justify-center items-center flex-col gap-16'>
                <img src={Logo} className='w-full max-w-40 ' />
                <div className=' w-full max-w-126 px-8 '>
                    <Outlet />
                </div>
            </div>
            <div className='w-1/2 blur-[0.2px] bg-gradient-200 h-full justify-center items-end flex-col gap- py-4 px-16 hidden lg:flex '>
                <img
                    src={Illustration}
                    className='object-contain rounded-2xl w-160 h-full w-max-[80px] '
                />
            </div>
        </div>
    )
}
