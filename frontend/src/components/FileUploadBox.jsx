import React, { useState } from "react";
import File from "./File";
import FileUploadItem from "./FileUploadItem";

const FileUploadBox = () => {
    const [files, setFiles] = useState([]); // Array to hold multiple files
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (e) => {
        setFiles([...e.target.files]); // Store all selected files
    };

    const handleDragOver = (e) => {
        if (files.length == 0) {

            e.preventDefault();
            e.stopPropagation();
            setDragActive(true);
        }
    };

    const handleDragLeave = (e) => {
        if (files.length == 0) {

            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        if (files.length == 0) {

            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
            if (e.dataTransfer.files) {
                setFiles([...e.dataTransfer.files]); // Store all dropped files
            }
        }
    };

    const handleClick = () => {
        if (files.length == 0) {

            document.getElementById("fileInput").click();
        }
    };

    return (
        <div className="flex flex-col border border-[#B3C6FB] border-dashed w-full h-[360px] justify-between rounded-[24px]"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
        >
            <div className="">
                <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    multiple // Allow multiple file selection
                />
                {files.length > 0 ? (
                    <div className="text-sm font-bold text-green-600">
                        {/* {files.length} file(s) selected */}
                    </div>
                ) : (
                    <>
                        <div className="flex items-center justify-center flex-col h-full space-y-2">

                            <img src="assets/AddVid.png" alt="upload icon" className="w-20" />
                            <div className="text-sm font-bold">Click to upload file(s) or drag and drop</div>
                            <div className="text-sm">File up to 200mb, 20mins</div>
                        </div>
                    </>
                )}
                {files.length > 0 && (<>
                    <div className="text-[16px] font-bold px-6 pt-6">

                        Uploaded {files.length} files
                    </div>
                    <div className="flex flex-col space-y-6 px-6 py-6">
                        <div className="flex  justify-between">
                            {/* <div className="w-8"></div> */}
                            <div className="text basis-1/2">File Name</div>
                            <div className="text basis-1/4">Credit</div>
                            <div className="text basis-1/4">Duration</div>
                        </div>
                        {files.map((file, index) => (
                            <FileUploadItem key={index} file={file} />
                        ))}
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default FileUploadBox;
