import React from 'react'

function CreateUser() {
    return (
        <>
            <img src="assets/Frame 398.png" alt="" srcset="" className='fixed w-[178px] top-8 left-8' />
            <div className='flex items-center justify-center h-screen w-screen'>
                <div className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-3">

                        <div className="text-[24px] font-bold">
                            Create your MetaFrazo Account
                        </div>
                        <div className="text-[16px]">
                            to continue to MetaFrazo
                        </div>
                    </div>
                    <div className="flex-col flex space-y-6">
                        <div className="flex w-[603px]">

                            <input type="text" placeholder='Name' className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 grow' />
                            <input type="text" placeholder='Surname' className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 grow' />
                        </div>
                        <input type="E-mail" placeholder='E-mail' className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px]' />
                        <input type="password" placeholder='Password' className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px]' />
                        <input type="password" placeholder='Repeat Password' className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px]' />
                        <div className="text-[16px]">

                            <input type="checkbox" id="vehicle1" />
                            <label for="vehicle1"> I agree to terms and conditions</label>
                        </div>

                    </div>
                    <div className="flex flex-col space-y-3">

                        <button className='border rounded-[12px] border-[#EBF5FF] p-2 px-4 w-[603px] bg-[#B3C6FB] text-white' >Create Account</button>
                        <div className="text-[16px] text-center flex items-center justify-center space-x-1">
                            <div className="text">
                            Already have an  account?
                            </div>
                            <div className="text-[#0A47F2] underline">
                            Sign in
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CreateUser