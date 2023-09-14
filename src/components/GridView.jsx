import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./Pagination";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddNewModal from "./modal/AddNewModal";

function GridView({ fields, data, title }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddNew = () => {
    setShowModal(true);
    console.log("Add new clicked");
  };

  return (
    <>
      {showModal && <AddNewModal />}
      <div className="p-4 bg-slate-400 rounded-lg w-full h-full grid grid-rows-6 gap-4 shadow-lg shadow-gray-600">
        <div className="flex justify-between items-center row-span-1">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div>
            <button
              onClick={handleAddNew}
              className="flex justify-center items-center border border-gray-500 rounded-md p-2 shadow-md shadow-gray-600 gap-3 bg-slate-500 font-semibold hover:text-white hover:bg-slate-700 active:scale-95 transition"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Add new</span>
            </button>
          </div>
        </div>
        <table className="row-start-2 row-end-6">
          <thead>
            <tr>
              {fields.map((field, idx) => (
                <th key={idx}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                {fields.map((field) => (
                  <td key={item[field]} className="text-center">
                    {item[field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row-span-1 row-end-7 flex justify-center items-center">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default GridView;
