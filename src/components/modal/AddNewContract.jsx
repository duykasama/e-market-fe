import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddNewContract({ onCloseModal }) {
  const handleAddContract = (event) => {
    event.preventDefault();
    console.log("Add contract");
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
          <label htmlFor="firstName" className="text-white font-semibold">
            Customer
          </label>
          <input
            type="number"
            name="customerId"
            id="customerId"
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="lastName" className="text-white font-semibold">
            Apartment
          </label>
          <input
            type="number"
            name="apartmentId"
            id="apartmentId"
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="address" className="text-white font-semibold">
            Start date
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="age" className="text-white font-semibold">
            End date
          </label>
          <input
            type="date"
            name="endDate"
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
