import React from 'react'
import TopNav from './TopNav'

function Main() {
    return (
        <>
            <div className="flex flex-col px-16 py-6 space-y-4 w-full">
                <TopNav title={"Video Translation"} />
                <div className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6  w-full justify-between rounded-[12px]">
                    <div className="flex justify-between ">
                        <div className="text">Select Mode</div>
                        <div className="flex space-x-2">

                            <div className="text">
                                <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6   w-full justify-between rounded-[12px]">
                    <div className="flex justify-between ">
                        <div className="text">Project Name</div>
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
                            <div className="text">Select Mode</div>
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
                            <div className="text">Select Mode</div>
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

                    <div className="flex flex-col border border-[#B3C6FB] border-dashed  w-full h-[360px] justify-between rounded-[24px]">
                        <div className="flex items-center justify-center flex-col h-full space-y-2">
                            <img src="assets/AddVid.png" alt="" srcset="" className='w-20' />
                            <div className="text-sm font-bold">Click to upload a file or drag and drop</div>
                            <div className="text-sm ">File up to 200mb, 20mins </div>

                        </div>

                    </div>
                </div>

            </div>
        </>


    )
}

export default Main