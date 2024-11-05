import React from 'react'

function TopNav(props) {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="text-[20px] font-bold">
                    {props.title}
                </div>
                <div className="flex">
                    <div className="p-1">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="34" height="34" rx="17" fill="" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.22145 22.898H17.0001H24.7788C25.4877 22.898 25.8009 22.0052 25.2473 21.5623L22.9722 19.7423C22.6164 19.4576 22.4092 19.0266 22.4092 18.571V13.432C22.4092 12.5305 21.5077 8.47363 17.0001 8.47363C12.4925 8.47363 11.591 12.5305 11.591 13.432V18.571C11.591 19.0266 11.3838 19.4576 11.028 19.7423L8.75293 21.5623C8.19933 22.0052 8.51249 22.898 9.22145 22.898ZM14.7501 23.7954C14.7501 23.7702 14.7707 23.75 14.796 23.75H19.2042C19.2295 23.75 19.2501 23.7702 19.2501 23.7954C19.2501 25.0381 18.2427 26.0454 17.0001 26.0454C15.7575 26.0454 14.7501 25.0381 14.7501 23.7954Z" fill="#5E5E5E" />
                            <circle cx="20.75" cy="10.25" r="2.25" fill="#FF7979" />
                        </svg>

                    </div>
                    <div className0="p-1">
                        <img src="/assets/user.png" alt="" srcset="" className='w-[34px]'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav