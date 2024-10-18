import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import TopNav from '../components/TopNav'
import FolderItem from '../components/FolderItem'
import NewsItem from '../components/NewsItem'

function News() {
  return (
    <>
    <>
            <div className='bg-[#F8F9FA] w-full flex'>
                <NavBar />
                <>
                    <>
                        <div className="flex flex-col px-16 py-6 space-y-4 w-full">
                            <TopNav title={"News"} />

                            {/* <div className="flex flex-col border-[#E7EDFE] border shadow-[#B3C6FB40] py-4 px-6  w-full justify-between rounded-[12px]">
                                <div className="flex justify-between ">
                                    <div className="text">10.10.2024</div>
                                    <div className="flex space-x-2">

                                        <div className="text">
                                            <img src="assets/DownArrow.png" alt="" srcset="" className='w-6 h-6' />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <NewsItem date={"10.10.2024"} name={"UX/UI Lesson 1-4 translation"} laungage={""} mode={"Advanced"} />
                            <NewsItem date={"10.10.2024"} name={"UX/UI Lesson 1-4 translation"} laungage={""} mode={"Advanced"} />
                            <NewsItem date={"10.10.2024"} name={"UX/UI Lesson 1-4 translation"} laungage={""} mode={"Advanced"} />
                            


                        </div>
                    </>

                </>

            </div>
        </>
    </>
  )
}

export default News