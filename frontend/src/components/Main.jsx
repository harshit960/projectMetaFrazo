import React from 'react'

function Main() {
    return (
        <>
            <div className="flex flex-col p-6 space-y-4">
                <div className="text-[24px]">
                    Generative AI Application To Produce American Sign Language Avatar
                </div>

                <div className="flex flex-col border w-full h-[260px] justify-between">
                    <div className="flex justify-between p-2 border-b-2 border-[#CDCDCD]">
                        <div className="text">Eng</div>
                        <div className="flex space-x-2">

                            <div className="text">Icon</div>
                            <div className="text">Icon</div>
                        </div>
                    </div>
                    <div className="flex justify-end items-end">
                        <div className="text">
                            0/100
                        </div>
                        <div className="flex px-2">
                            generate
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Main