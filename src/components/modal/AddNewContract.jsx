import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState, useTransition } from "react";
import useCustomers from "../../hooks/useCustomers";
import useApartments from "../../hooks/useApartments";
import { v4 } from "uuid";
import axios from "../../lib/api/axios";

function AddNewContract({ onCloseModal }) {
  const { customers } = useCustomers();
  const { apartments } = useApartments();

  let formData = {
    customerId: "",
    apartmentId: "",
    startDate: "",
    endDate: "",
  };

  const handleAddContract = async (event) => {
    event.preventDefault();
    console.log(formData);
    const response = await axios.post(
      "/contracts",
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
      { params: formData }
    );
    console.log("Add contract");
  };

  const handleFormDataChange = (event) => {
    formData = { ...formData, [event.target.name]: event.target.value };
  };

  return (
    <form
      onSubmit={handleAddContract}
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
      <h2 className="text-3xl font-bold text-white mb-12">Add new contract</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-10">
          <label htmlFor="customerId" className="text-white font-semibold">
            Customer
          </label>
          <select
            name="customerId"
            onChange={handleFormDataChange}
            className="p-1 rounded-md w-40"
          >
            <option hidden>Choose customer</option>
            {customers &&
              customers.map((customer) => (
                <option key={v4()} value={customer.id}>
                  {customer.firstName} {customer.lastName}
                </option>
              ))}
          </select>
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="apartmentId" className="text-white font-semibold">
            Apartment
          </label>
          <select
            name="apartmentId"
            id="apartmentId"
            onChange={handleFormDataChange}
            className="p-1 rounded-md w-40"
          >
            <option hidden>Choose apartment</option>
            {apartments &&
              apartments.map((apartment) => (
                <option key={v4()} value={apartment.id}>
                  {apartment.address}
                </option>
              ))}
          </select>
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="startDate" className="text-white font-semibold">
            Start date
          </label>
          <input
            type="date"
            name="startDate"
            onChange={handleFormDataChange}
            id="startDate"
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="endDate" className="text-white font-semibold">
            End date
          </label>
          <input
            type="date"
            name="endDate"
            onChange={handleFormDataChange}
            id="endDate"
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

export default AddNewContract;
