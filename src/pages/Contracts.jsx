import GridView from "../components/GridView";
import AddNewContract from "../components/modal/AddNewContract";
import useContracts from "../hooks/useContracts";

function Contracts() {
  const fields = ["customerId", "apartmentId", "startDate", "endDate"];
  const { contracts } = useContracts();

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
