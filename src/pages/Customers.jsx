import { useEffect, useState } from "react";
import GridView from "../components/GridView";
import AddNewCustomer from "../components/modal/AddNewCustomer";
import useCustomers from "../hooks/useCustomers";

function Customers() {
  const fields = ["firstName", "lastName", "address", "age", "status"];
  const { customers } = useCustomers();

  return (
    <div className="w-full h-full p-8 flex justify-center items-center">
      {customers && (
        <GridView
          fields={fields}
          data={customers}
          title={"Customers"}
          Modal={AddNewCustomer}
        />
      )}
    </div>
  );
}

export default Customers;
