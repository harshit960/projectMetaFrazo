import React from 'react'

export default function CreateUserVerify() {
  return (
    <>



            <div className='flex items-center justify-center min-h-screen  w-screen'>
                <img src="/assets/Frame 398.png" alt="" srcset="" className='absolute w-[178px] top-8 left-8' />
                <img src="/assets/CreateUserVerify.png" alt="" srcset="" className='absolute w-[232px] top-8 left-1/2 -translate-x-1/2' />
                <div className="flex flex-col space-y-8 mt-24 w-[603px]">
                    <div className="flex flex-col space-y-3">

                        <div className="text-[24px] font-bold">
                        Verification
                        </div>
                        <div className="text-[16px] text-[#5E5E5E]">
                        Enter the verification code that was sent to supercoolmail99119@gmail.com. If you don't find the email in your inbox, please check your spam folder.
                        </div>
                    </div>
                    <div className="flex-col flex space-y-6">
                        
                        <input type="password" placeholder='OTP' className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px]' />
                        
                    </div>
                    <div className="flex flex-col space-y-3">

                        <button className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px] bg-[#0A47F2] text-white' >Verify</button>
                        <button className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px] bg-[#fff] text-[#5E5E5E]' >Resend code</button>
                        
                    </div>
                </div>


            </div>
        </>
  )
}
