import GridView from "../components/GridView";
import AddNewApartment from "../components/modal/AddNewApartment";
import useApartments from "../hooks/useApartments";

function Apartments() {
  const fields = ["address", "rentalPrice", "numberOfRooms"];
  const { apartments } = useApartments();

  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      <GridView
        fields={fields}
        data={apartments}
        title={"Apartments"}
        Modal={AddNewApartment}
      />
    </div>
  );
}

export default Apartments;
