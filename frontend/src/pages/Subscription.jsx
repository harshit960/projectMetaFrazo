import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import TopNav from '../components/TopNav'
import SelectMode from '../components/SelectMode';

function Subscription() {
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

      <div className='bg-[#F8F9FA] w-full flex'>
        <NavBar />

        <div className="flex flex-col pr-6 py-8 space-y-4 w-full">
          <TopNav title={"Subscription"} />
          <div className="flex flex-col rounded-[12px] bg-white p-6 space-y-6">
          <div className="flex flex-col">
              <>
                <div className={"flex-col    rounded-[32px] flex items-center justify-between  duration-200"}>

                  <div onClick={handleClick} className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6 w-full justify-between rounded-[12px]">
                    <div className="flex justify-between ">
                      <div className="text">Subscription Details</div>
                      <div className="flex space-x-2">

                        <div className="text">
                          <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={height + " w-full duration-200"}>
                    <div className="flex flex-col space-y-6 pt-4">
                      <div className="flex space-x-2 py-4 px-6">
                        <div className="text-[16px]">Current plan</div>
                        <div className="text-[#5E5E5E]">0/month</div>
                      </div>
                      <div className="flex space-x-2 py-4 px-6">
                        <div className="text">Subscription status</div>
                        <div className="text">Inactive</div>
                      </div>
                      <div className="flex space-x-2 py-4 px-6 justify-between">
                        <div className="text">Credit usage</div>
                        <div className="text">0</div>
                      </div>
                    </div>
                  </div>

                </div>
              </>

            </div>
            <div className="flex flex-col p-6 space-y-6">
              <div className="flex justify-between">

                <div className="flex flex-col space-y-1">
                  <div className="text font-bold">Create subscription</div>
                  <div className="text-[14px] text-[#5E5E5E]">Tailor Your Subscription to Fit Your Needs</div>
                </div>
                <div className="flex">
                  Manage billing info
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="text">Which model do you plan to use more often?</div>
                <SelectMode />
              </div>
              <div className="flex flex-col space-y-3">
                <div className="text">How many minutes per month do you need?</div>
                <div className="flex">
                  <div className="flex p-2 grow">
                    <input type="text" placeholder='Enter Your Amount ' className='grow border-0 focus:outline-none' />
                    <span>/month</span>
                  </div>
                  <div className="">
                    <svg width="51" height="56" viewBox="0 0 51 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 32L35 32" stroke="#0E0E0C" stroke-width="2" stroke-linecap="round" />
                      <path d="M15 24L35 24" stroke="#0E0E0C" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  </div>
                  <div className="flex p-2 grow">
                    <input type="text" placeholder='Enter Your Amount ' className='grow border-0 focus:outline-none' />
                    <span>/month</span>
                  </div>
                </div>
                <div className="flex text-[14px] text-[#5E5E5E]">Approx. 1200 credits</div>
              </div>
              <div className="flex">
                <div className="flex grow justify-center items-center p-3">
                  <div className="text-[#5E5E5E]">Cancel</div>
                </div>
                <div className="flex grow bg-[#0A47F2] justify-center items-center p-3 rounded-[6px]">
                  <div className="text-white">Create</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default Subscription