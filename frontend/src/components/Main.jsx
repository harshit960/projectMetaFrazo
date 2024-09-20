import React from 'react'

function Main() {
    return (
        <>
            <div className="flex flex-col px-16 py-6 space-y-4 w-full">
                <div className="text-[24px]">
                    Generative AI Application To Produce American Sign Language Avatar
                </div>

                <div className="flex flex-col border border-[#B3C6FB] border-dashed  w-full h-[260px] justify-between rounded-[24px]">
                    <div className="flex justify-between p-2 px-4 border-b-2 border-[#CDCDCD]">
                        <div className="text">English</div>
                        <div className="flex space-x-2">

                            <div className="text">Icon</div>
                            <div className="text">Icon</div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center space-x-2 m-2">
                        <div className="text">
                            0/100
                        </div>
                        <div className="flex p-2 bg-[#0A47F2] text-white rounded-[24px] w-[123px] items-center justify-center ">
                            Generate
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex flex-col border border-[#B3C6FB] border-dashed w-1/2 h-[260px] justify-center items-center rounded-[24px]">
                        <div className="text-[20px]">
                            Avator
                        </div>
                    </div>
                    <div className="flex flex-col border border-[#B3C6FB] border-dashed w-1/2 h-[260px] justify-center items-center rounded-[24px]">
                        <div className="text-[20px]">
                        American Sign Language
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}

export default Main