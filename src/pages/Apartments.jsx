import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GridView from "../components/GridView";
import AddNewApartment from "../components/modal/AddNewApartment";
import Loading from "../components/ui/Loading";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";

function Apartments() {
  const fields = ["address", "rentalPrice", "numberOfRooms"];
  const params = new URLSearchParams({ pageSize: 5, offset: 1 }).toString();
  const { data, isPending, error } = useFetch(
    `/apartments/pagination?${params}`
  );
  console.log(data);

  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      
      {isPending && <Loading />}
      {data && !isPending && (
        <GridView
        fields={fields}
        data={data.content}
        title={"Apartments"}
        Modal={AddNewApartment}
      />
      )}
      {error && !isPending && (
        <div className="flex flex-col justify-center items-center gap-4 text-2xl">
          <FontAwesomeIcon icon={faFaceSadTear} className="text-red-600" />
          <p>An error occurred</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Apartments;
