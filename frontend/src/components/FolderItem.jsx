import React, { useEffect, useState } from 'react'

function FolderItem(props) {
    const [height, setheight] = useState("h-[0px] scale-0");
    const [rotation, setrotation] = useState("");
    const handleClick = () => {
        if (rotation === "") {

            setheight("h-[296px] scale-100");
            setrotation("rotate-45");
        }
        else {

            setheight("h-[0px] scale-0");
            setrotation("");

        }
    }

    return (
        <>
            <div className={"flex-col border-[#E7EDFE] border  rounded-[12px] flex items-center justify-between px-6 py-4 duration-200"}>
                <div className="flex items-center justify-between w-full ">
                    <div className="flex space-x-4">

                        <div className="text-[18px]">{props.date}</div>
                        <div className="text-[18px]">{props.name}</div>
                        <div className="text-[18px]">{props.language}</div>
                        <div className="text-[18px]">{props.mode}</div>

                    </div>
                    <button onClick={handleClick} className={rotation + " duration-200"}>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11" width="2" height="24" rx="1" fill="#0E0E0C" />
                            <rect x="24" y="11" width="2" height="24" rx="1" transform="rotate(90 24 11)" fill="#0E0E0C" />
                        </svg>
                    </button>
                </div>
                <div className={height + " w-full duration-200"}>
                    <div className="flex flex-col mt-8 space-y-6">
                        <div className="flex text-[14px]">
                            <div className="text basis-2/5">Name</div>
                            <div className="text basis-2/5">Language</div>
                            <div className="text basis-1/5">Mode</div>
                        </div>
                        <div className="flex text-[16px]">
                            <div className="text basis-2/5">{props.name}</div>
                            <div className="text basis-2/5">{props.language}</div>
                            <div className="text basis-1/5">{props.mode}</div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                    </div>
                </div>

            </div>
        </>)
}

export default FolderItem