import React from 'react'

function FileUploadItem() {
    return (
        <>
            <div className="flex justify-between px-4" >
                <div className="flex items-center space-x-4 basis-1/2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1.08784" height="13.0541" rx="0.543919" transform="matrix(0.707108 0.707105 -0.707108 0.707105 10.2307 1)" fill="#0E0E0C" />
                        <rect width="1.08784" height="13.0541" rx="0.543919" transform="matrix(-0.707108 0.707105 -0.707108 -0.707105 11 10.2305)" fill="#0E0E0C" />
                    </svg>

                    <img src="assets/file.png" alt="" srcset="" className='w-8' />
                    <div className="text">
                        UX/UI_Lesson_4_English_to_Spanish_and_German.mp4
                    </div>
                </div>
                <div className="text-[16px] basis-1/4">168</div>
                <div className="text-[16px] basis-1/4">11.58</div>

            </div>
        </>
    )
}

export default FileUploadItem