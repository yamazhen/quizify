import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

const UploadBox = ({ onUploadSuccess }) => {
    const [fileName, setFileName] = useState(null);
    const [file, setFile] = useState(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setFile(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile) {
            setFileName(droppedFile.name)
            setFile(droppedFile);
        }
    }

    const uploadFile = async () => {
        if (!file) {
            alert("Please select a file first.");
        }

        const formData = new FormData();
        formData.append("pdf", file);

        try {
            const response = await axios.post("http://localhost:3000/upload-pdf", formData, {
                headers: {
                    "file-name": fileName,
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log(progress);
                }
            });

            onUploadSuccess();

            alert("File uploaded successfully");
        } catch (error) {
            alert("An error occured while uploading the file");
        }
    }

    return (
        <section id="upload-box"
            className="flex justify-center items-center">
            <div id="input-box"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border border-slate-700 p-12 mt-8 rounded-lg flex justify-center items-center flex-col gap-5 bg-slate-800">
                <h2 className="font-bold">Upload Your Lecture Resource</h2>
                <div className="rounded-3xl border-4 border-dotted border-slate-700 px-12 py-10 flex flex-col justify-center items-center gap-3">
                    <p>Drag and drop your PDF here or</p>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("fileUpload").click();
                        }}
                        className="bg-blue-600 rounded-lg px-8 py-1 gap-2 flex items-center hover:bg-blue-700 duration-300"
                    >
                        <FontAwesomeIcon icon={faFileUpload}/>
                        Click to upload
                    </button>
                    <input
                        type="file"
                        id="fileUpload"
                        accept="application/pdf"
                        style={{ display: "none" }}
                        onChange={handleFileSelect}
                    />
                    {fileName && (<p>File Selected: {fileName}</p>)}
                </div>
                {fileName && (<button className="bg-orange-400 w-full py-1 rounded-lg mt-6 hover:bg-orange-500 duration-300" onClick={uploadFile}>Generate Questions</button>)}
            </div>
        </section>
    )
}

export default UploadBox
