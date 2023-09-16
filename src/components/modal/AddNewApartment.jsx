import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "../../lib/api/axios";

function AddNewApartment({ onCloseModal }) {
  const [formData, setFormData] = useState({
    address: "",
    rentalPrice: 0,
    numberOfRooms: 0,
  });

  const handleAddApartment = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "/apartments",
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        withCredentials: true
      },
      { params: formData }
    );
    console.log("add apartment");
  };

  const handleFormDataChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleAddApartment}
      className="absolute bg-slate-700 p-10 rounded-lg shadow-lg shadow-black flex flex-col justify-center items-center modal"
    >
      <div className="w-full flex justify-end">
        <button
          onClick={() => onCloseModal()}
          className="p-2 text-2xl text-white rounded-lg hover:shadow-lg hover:shadow-black hover:bg-slate-400 hover:text-black active:scale-95 transition"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <h2 className="text-3xl font-bold text-white mb-12">Add new apartment</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-10">
          <label htmlFor="firstName" className="text-white font-semibold">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            onChange={handleFormDataChange}
            rows={3}
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="lastName" className="text-white font-semibold">
            Rental price
          </label>
          <input
            type="number"
            name="rentalPrice"
            id="rentalPrice"
            onChange={handleFormDataChange}
            min={0}
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="address" className="text-white font-semibold">
            Number of rooms
          </label>
          <input
            type="number"
            name="numberOfRooms"
            id="numberOfRooms"
            onChange={handleFormDataChange}
            min={0}
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-center">
          <button className="w-fit rounded-md py-2 px-6 shadow-md shadow-gray-600 gap-3 bg-slate-500 font-semibold  hover:bg-slate-600 active:scale-95 transition text-white">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddNewApartment;
