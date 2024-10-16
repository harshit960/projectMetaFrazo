import React from 'react'

function Login() {
    return (
        <>
        <img src="assets/Frame 398.png" alt="" srcset=""  className='fixed w-[178px] top-8 left-8'/>
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-3">

                    <div className="text-[24px] font-bold">
                        Sign In
                    </div>
                    <div className="text-[16px]">
                        to continue to MetaFrazo
                    </div>
                </div>
                <div className="flex-col flex space-y-6">

                    <input type="text" placeholder='E-Mail' className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px]' />
                    <input type="password" placeholder='Password' className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px]' />
                    <div className="text-[16px]">

                        <input type="checkbox" id="vehicle1" />
                        <label for="vehicle1"> Keep me singed in</label>
                    </div>

                </div>
                <div className="flex flex-col space-y-3">

                <button className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px] bg-[#B3C6FB] text-white' >Sign In</button>
                <div className="text-[16px] text-center flex items-center justify-center space-x-1">
                    <div className="text">
                        New to MetaFrazo
                    </div>
                    <div className="text-[#0A47F2] underline">
                        Create an account
                    </div>
                </div>
                </div>
            </div>


        </div>
        </>
    )
}

export default Login