import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddNewCustomer({setShowModal}) {
  const handleAddCustomer = (event) => {
    event.preventDefault();
    console.log("Add new customer");
  };

  return (
    <form
      onSubmit={handleAddCustomer}
      className="absolute bg-slate-700 p-10 rounded-lg shadow-lg shadow-black flex flex-col justify-center items-center modal"
    >
      <div className="w-full flex justify-end">
        <button onClick={() => setShowModal(false)} className="p-2 text-2xl text-white rounded-lg hover:shadow-lg hover:shadow-black hover:bg-slate-400 hover:text-black active:scale-95 transition">
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <h2 className="text-3xl font-bold text-white mb-12">Add new Customer</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-10">
          <label htmlFor="firstName" className="text-white font-semibold">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="lastName" className="text-white font-semibold">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="address" className="text-white font-semibold">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="age" className="text-white font-semibold">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between items-center gap-10">
          <label htmlFor="status" className="text-white font-semibold">
            Status
          </label>
          <input
            type="text"
            name="status"
            id="status"
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

export default AddNewCustomer;
