const UploadBox = () => {
    return (
        <section id="upload-box"
            className="flex justify-center items-center h-[calc(100dvh-3.5rem)]">
            <div id="input-box"
                className="border border-slate-800 w-96 h-64 rounded-lg flex justify-center items-center flex-col gap-5">
                <h2 className="font-bold">Upload Your Lecture Resource</h2>
                <div className="rounded-lg border-2 border-dotted border-slate-800 px-12 py-10 flex flex-col justify-center items-center gap-3">
                    <p>Drag and drop your PDF here or</p>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("fileUpload").click();
                        }}
                        className="bg-blue-600 rounded-lg w-32 py-1"
                    >
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
