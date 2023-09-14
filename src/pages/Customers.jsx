import GridView from "../components/GridView";

function Customers({ customers }) {
  const fields = ["ID", "FirstName", "LastName", "Address", "Age", "Status"];

  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      <GridView fields={fields} data={customers} title={"Customers"} />
    </div>
  );
}

export default Customers;
