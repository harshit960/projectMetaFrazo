import React, { useEffect, useState } from 'react'
import File from './File';

function NewsItem(props) {
    const [height, setheight] = useState("h-[0px] opacity-0");
    const [rotation, setrotation] = useState("");
    const [active, setactive] = useState('');
    const handleClick = () => {
        if (rotation === "") {

            setheight("h-auto opacity-100");
            setrotation("rotate-45");
            setactive(" hidden")
        }
        else {

            setactive(" ")
            setheight("h-[0px] opacity-0");
            setrotation("");

        }
    }

    return (
        <>
            <div className={"flex-col border-[#E7EDFE] bg-white  rounded-[12px] flex items-center justify-between px-6 py-4 duration-300"}>
                <div className="flex items-center justify-between w-full h-[263px] ">
                    <div onClick={handleClick} className="flex space-x-8">
                        <div className="flex flex-col space-y-8">
                            <div className="flex justify-between">
                                <div className="text-[16px]">New Article</div>
                                <div className="text-[14px]">4 hour ago</div>
                            </div>
                            <div className="flex">
                                <div className="text-[24px] font-bold">
                                    MetaFrazo Launches Redesigned AI Video Translation Platform, Revolutionizing Multilingual Content Creation
                                </div>
                            </div>
                            <div className="flex text-[14px]">
                                <div className="tag">#Platform Update</div>
                                <div className="tag">#New Interface Walkthrough</div>
                            </div>
                        </div>
                        <div className="div h-[215px] w-[512px] bg-slate-400">

                        </div>
                    </div>
                    {/* <button onClick={handleClick} className={rotation + " duration-200"}>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11" width="2" height="24" rx="1" fill="#0E0E0C" />
                            <rect x="24" y="11" width="2" height="24" rx="1" transform="rotate(90 24 11)" fill="#0E0E0C" />
                        </svg>
                    </button> */}
                </div>
                <div className={height + " w-full duration-200 p-"}>
                    <div className="flex w-full justify-between space-x-4">
                        <div className="min-w-[326px] h-[435px] bg-slate-300"></div>
                        <div className="flex flex-col space-y-6">
                            <div className="font-bold text-[18px]">
                                With a sleek new interface and enhanced AI capabilities, MetaFrazo is set to streamline video translation for creators worldwide.
                            </div>
                            <div className="text-[14px]">
                                MetaFrazo, an innovative AI-powered video translation platform, has officially launched its newly redesigned interface, bringing a host of powerful features designed to enhance the user experience. The revamped platform embraces a sleek, intuitive design that simplifies the process of translating video content into multiple languages. With its advanced AI models, MetaFrazo offers high-quality translations, empowering creators, businesses, and educators to reach global audiences more efficiently.

                                "We wanted to create a platform where users can seamlessly translate and localize their content without the technical hassle," said the MetaFrazo team. "The redesign focuses on user-friendly functionality while still delivering top-tier translation accuracy powered by AI."

                                The new MetaFrazo also integrates a unique bento grid-style layout, allowing users to easily access features like real-time editing, automated captioning, and voiceover synchronization, all from a single page. Additionally, subscription settings have been simplified, providing seamless access to all features with easy setup directly within the translation workflow.

                                This launch marks a significant step forward in AI-driven content creation, positioning MetaFrazo as a leading tool for creators aiming to expand their reach across linguistic boundaries.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>)
}

export default NewsItem