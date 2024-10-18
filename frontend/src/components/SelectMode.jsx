import React, { useEffect, useState } from 'react'

function SelectMode(props) {
    const [height, setheight] = useState("h-[0px] opacity-0");
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
                {/* <div className="flex items-center justify-between w-full h-[78px]">

                    <div className="text-[16px] font-bold font-satoshi">{props.title}</div>
                    <button onClick={handleClick} className={rotation + " duration-200"}>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11" width="2" height="24" rx="1" fill="#0E0E0C" />
                            <rect x="24" y="11" width="2" height="24" rx="1" transform="rotate(90 24 11)" fill="#0E0E0C" />
                        </svg>
                    </button>
                </div> */}
                <div onClick={handleClick} className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6 w-full justify-between rounded-[12px]">
                    <div className="flex justify-between ">
                        <div className="text">Select Mode</div>
                        <div className="flex space-x-2">

                            <div className="text">
                                <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={height + " w-full duration-200"}>
                    <div className="flex flex-col  font-bold p-4 space-y-6">
                        <div className="flex p-6">
                            <div className="basis-1/6">Basic</div>
                            <div className="basis-2/6">3 videos translated at one time </div>
                            <div className="basis-2/6">3$ for minute of translated video </div>
                            <div className="basis-1/3">Fast and effective model that will give you 94% accurate translation.</div>
                        </div>
                        <div className="flex p-6">
                            <div className="basis-1/6">Advanced</div>
                            <div className="basis-2/6">5 videos translated at one time  </div>
                            <div className="basis-2/6">7$ for minute of translated video  </div>
                            <div className="basis-1/3">Try out more advanced lip sync models and exclusive on-screen text translation feature</div>
                        </div>

                    </div>
                </div>

            </div>
        </>)
}

export default SelectMode