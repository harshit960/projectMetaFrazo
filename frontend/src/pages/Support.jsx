import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import TopNav from '../components/TopNav'
import FolderItem from '../components/FolderItem'
import Question from '../components/Question'

function Support() {
  return (

    <>
      <div className='bg-[#F8F9FA] w-full flex'>
        <NavBar />
        <>
          <>
            <div className="flex flex-col px-16 py-6 space-y-4 w-full">
              <TopNav title={"Support"} />

              <div className="flex space-y-8 flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6  w-full justify-between rounded-[12px]">
                <div className="flex justify-between space-y-3 flex-col">
                  <div className="text-[20px] font-bold">Contact us to get help</div>
                  <div className="text-[16px]">Describe your problem and we will help you as soon as possible.</div>

                </div>
                <div className="flex flex-col ">
                  <div className="text-[16px] h-[240px] rounded-xl border-[#EBF5FF] border">
                    Problem description
                  </div>
                  <div className="flex justify-end">
                    <div className="text-[16px]"> 0/250</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex grow items-center justify-center rounded-md p-3  border-[#EBF5FF] border">Discard</div>
                  <div className="flex grow items-center justify-center rounded-md p-3 text-white bg-[#0A47F2]">Submit</div>
                </div>
              </div>
              <div className="flex px-6 pt-6">
                <div className="text-[20px] font-bold ">Frequently asked questions</div>
              </div>
              <Question title={"What sets MetaFrazo apart from other translation services?"} />
              <Question title={"What sets MetaFrazo apart from other translation services?"} />
              <Question title={"What sets MetaFrazo apart from other translation services?"} />
              <Question title={"What sets MetaFrazo apart from other translation services?"} />
              {/* <FolderItem date={"10.10.2024"} name={"UX/UI Lesson 1-4 translation"} laungage={""} mode={"Advanced"} />
              <FolderItem date={"10.10.2024"} name={"UX/UI Lesson 1-4 translation"} laungage={""} mode={"Advanced"} />
              <FolderItem date={"10.10.2024"} name={"UX/UI Lesson 1-4 translation"} laungage={""} mode={"Advanced"} /> */}


            </div>
          </>

        </>

      </div>
    </>
  )


}

export default Support