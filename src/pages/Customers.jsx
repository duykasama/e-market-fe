import GridView from "../components/GridView";
import AddNewCustomer from "../components/modal/AddNewCustomer";
import useFetch from "../hooks/useFetch";
import Loading from "../components/ui/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

function Customers() {
  const fields = ["firstName", "lastName", "address", "age", "status"];
  const params = new URLSearchParams({ pageSize: 5, offset: 1 }).toString();
  const { data, isPending, error } = useFetch(
    `/customers/pagination?${params}`
  );

  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      {isPending && <Loading />}
      {data && !isPending && (
        <GridView
          fields={fields}
          data={data.content}
          title={"Customers"}
          Modal={AddNewCustomer}
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

export default Customers;
