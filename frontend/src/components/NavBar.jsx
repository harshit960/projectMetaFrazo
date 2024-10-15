import React from 'react'

function NavBar() {
  return (
    <div className='w-[202px] h-screen  p-2 px-4 border-r-[2px] border-[#EBF5FF]'>
      <div className="flex flex-col justify-between h-full">

        <div className="flex flex-col ">
          <div className="flex p-6 px-4">
            <img src="assets/Frame 398.png" className='h-[34px]' alt="" srcset="" />
            {/* <img src="assets/hug.png" className='h-[34px]' alt="" srcset="" /> */}
          </div>
          <div className="text-[#5E5E5E] p-2 px-4 hover:text-[#0A47F2] rounded-[12px] whitespace-nowrap hover:bg-[#EBF5FF]">
            Video Translation
          </div>
          <div className="text-[#5E5E5E] p-2 px-4 hover:text-[#0A47F2] rounded-[12px]  hover:bg-[#EBF5FF]">
            Folder
          </div>
          <div className="text-[#5E5E5E] p-2 px-4 hover:text-[#0A47F2] rounded-[12px]  hover:bg-[#EBF5FF]">
            Subscription
          </div>
          <div className="text-[#5E5E5E] p-2 px-4 hover:text-[#0A47F2] rounded-[12px]  hover:bg-[#EBF5FF]">
            Support
          </div>
          <div className="text-[#5E5E5E] p-2 px-4 hover:text-[#0A47F2] rounded-[12px]  hover:bg-[#EBF5FF]">
            News
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#5E5E5E] p-2 px-4 hover:text-[#0A47F2] rounded-[12px]  hover:bg-[#EBF5FF]">
            Settings
          </div>
          <div className="text-[#5E5E5E] p-2 px-4 hover:text-[#0A47F2] rounded-[12px]  hover:bg-[#EBF5FF]">
            Notification
          </div>
          <div className="text-[#5E5E5E] p-2 px-4 hover:text-[#0A47F2] rounded-[12px]  hover:bg-[#EBF5FF]">
            Profile
          </div>

        </div>
      </div>

    </div>
  )
}

export default NavBar