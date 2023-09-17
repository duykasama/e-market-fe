import { faClose, faFile, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useTransition } from "react";

function FileUploader({ setShowFileUploader }) {
  const inputFileRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleFilesChange = (event) => {
    const targetFiles = event.target.files;
    let temp = files;
    for (let i = 0; i < targetFiles.length; i++) {
      if (!files.some((file) => file.name === targetFiles[i].name)) {
        temp.push(targetFiles[i]);
      }
    }
    setFiles(temp);
    startTransition(() => {}, []);
  };

  const handleDelete = (selectedFile) => {
    let temp = files;
    const fileIndex = files.indexOf(selectedFile);
    temp.splice(fileIndex, 1);
    setFiles(temp);
    startTransition(() => {}, []);
  };

  const uploadFiles = () => {
    console.log("files uploaded");
  };

  return (
    <div className="absolute bg-slate-700 p-10 rounded-lg shadow-lg shadow-black flex flex-col justify-center items-center gap-4 modal">
      <div className="w-full flex justify-end">
        <button
          onClick={() => setShowFileUploader(false)}
          className="-mt-6 -mr-6 p-2 text-2xl text-white rounded-lg hover:shadow-lg hover:shadow-black hover:bg-slate-400 hover:text-black active:scale-95 transition"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div
        onClick={() => inputFileRef.current.click()}
        className="text-black cursor-pointer flex flex-col gap-2 justify-center items-center bg-slate-400 p-4 rounded-md"
      >
        <FontAwesomeIcon icon={faFile} className="text-3xl" />
        <p>Upload files</p>
        <input
          onChange={handleFilesChange}
          type="file"
          multiple
          accept=".csv"
          hidden
          ref={inputFileRef}
        />
      </div>
      {files && files.length > 0 && (
        <>
          <div className="flex flex-col gap-2">
            {files.map((file, idx) => (
              <div key={idx} className="flex justify-between gap-4">
                <span className="text-gray-100">{file.name}</span>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(file)}
                  className="text-xl text-red-700 cursor-pointer active:scale-110"
                />
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={uploadFiles}
              className="flex justify-center items-center border border-gray-500 rounded-md p-2 shadow-md shadow-gray-600 gap-3 bg-slate-500 font-semibold hover:text-white hover:bg-slate-700 active:scale-95 transition"
            >
              Upload
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FileUploader;
