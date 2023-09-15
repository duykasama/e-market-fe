import GridView from "../components/GridView";
import AddNewContract from "../components/modal/AddNewContract";

function Contracts({ contracts }) {
  const fields = ["ID", "CustomerID", "ApartmentID", "StartDate", "EndDate"];

  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      <GridView
        fields={fields}
        data={contracts}
        title={"Contracts"}
        Modal={AddNewContract}
      />
    </div>
  );
}

export default Contracts;
