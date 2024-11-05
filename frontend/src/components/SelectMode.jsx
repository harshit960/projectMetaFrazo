import React, { useEffect, useState } from 'react'

function SelectMode(props) {
    const [height, setheight] = useState("h-[0px] opacity-0");
    const [mode, setmode] = useState("Select Mode");
    const [rotation, setrotation] = useState("");
    const handleClick = () => {
        if (rotation === "") {

            setheight("h-[296px] opacity-100");
            setrotation("rotate-45");
        }
        else {

            setheight("h-[0px] opacity-0");
            setrotation("");

        }
    }

    return (
        <>
            <div className={"flex-col    rounded-[32px] flex items-center justify-between  duration-200"}>
                
                <div onClick={handleClick} className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6 w-full justify-between rounded-[12px]">
                    <div className="flex justify-between ">
                        <div className="text">{mode}</div>
                        <div className="flex space-x-2">

                            <div className="text">
                                <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={height + " w-full duration-200"}>
                    <div className="flex flex-col  text-[16px] p-4 space-y-6">
                        <div onClick={() => {setmode("Basic"); handleClick()}} className="flex p-6">
                            <div className="basis-1/6 font-bold">Basic</div>
                            <div className="basis-2/6">3 videos translated at one time </div>
                            <div className="basis-2/6">3$ for minute of translated video </div>
                            <div className="basis-1/3">Fast and effective model that will give you 94% accurate translation.</div>
                        </div>
                        <div onClick={() => {setmode("Advanced"); handleClick()}}  className="flex p-6">
                            <div className="basis-1/6 font-bold">Advanced</div>
                            <div className="basis-2/6">5 videos translated at one time  </div>
                            <div className="basis-2/6">7$ for minute of translated video  </div>
                            <div className="basis-1/3">Try out more advanced lip sync models and exclusive on-screen text translation feature</div>
                        </div>

                    </div>
                </div>

            </div>
        </>
        )
}

export default SelectMode