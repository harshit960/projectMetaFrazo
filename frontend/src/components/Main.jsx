import React, { useState } from 'react'
import TopNav from './TopNav'
import SelectMode from './SelectMode'
import FileUploadBox from './FileUploadBox';

function Main() {
    const [ProjectName, setProjectName] = useState("");

    return (
        <>
            <div className="flex flex-col px-16 py-6 space-y-4 w-full">
                <TopNav title={"Video Translation"} />
                <SelectMode />

                <div className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6   w-full justify-between rounded-[12px]">
                    <div className="flex justify-between ">

                        <input type="text" placeholder='Project Name' className='z-20 appearance-none w-full text-black ' value={ProjectName} onChange={(e) => setProjectName(e.target.value)} />

                        {/* <div className="text">Project Name</div> */}
                        <div className="flex space-x-2">

                            <div className="text">
                                {/* <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex  items-center">

                    <div className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6  grow justify-between rounded-[12px]">
                        <div className="flex justify-between ">
                            <div className="text">Source Language</div>
                            <div className="flex space-x-2">

                                <div className="text">
                                    <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="assets/RightArrow.png" alt="" srcset="" className=' h-4 mx-4' />
                    <div className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6 grow  justify-between rounded-[12px]">
                        <div className="flex justify-between ">
                            <div className="text">Translation Languages</div>
                            <div className="flex space-x-2">

                                <div className="text">
                                    <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-2 px-4  w-full justify-between rounded-[12px]">
                    <div className="flex space-x-2 ">
                        <div className="text p-2 rounded-[6px] bg-[#EBF5FF] text-[#0A47F2]">Upload</div>
                        <div className="text p-2">Youtube</div>
                        <div className="text p-2">TikTok</div>
                        <div className="text p-2">X</div>
                        <div className="text p-2 ">Vimeo</div>
                        <div className="text p-2 ">Url</div>
                        <div className="flex space-x-2">

                            <div className="text">
                                {/* <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex border-[#E7EDFE] border rounded-[24px] p-2">
<FileUploadBox/>
                    
                </div>

            </div>
        </>


    )
}

export default Main