import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadBox = () => {
    return (
        <section id="upload-box"
            className="flex justify-center items-center">
            <div id="input-box"
                className="border border-slate-700 p-12 mt-8 rounded-lg flex justify-center items-center flex-col gap-5 bg-slate-800">
                <h2 className="font-bold">Upload Your Lecture Resource</h2>
                <div className="rounded-3xl border-4 border-dotted border-slate-700 px-12 py-10 flex flex-col justify-center items-center gap-3">
                    <p>Drag and drop your PDF here or</p>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("fileUpload").click();
                        }}
                        className="bg-blue-600 rounded-lg px-8 py-1 gap-2 flex items-center"
                    >
                        <FontAwesomeIcon icon={faFileUpload}/>
                        Click to upload
                    </button>
                    <input
                        type="file"
                        id="fileUpload"
                        accept="application/pdf"
                        style={{ display: "none" }}
                    />
                </div>
            </div>
        </section>
    )
}

export default UploadBox
