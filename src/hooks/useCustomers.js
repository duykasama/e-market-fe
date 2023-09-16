import { useEffect, useState } from "react";
import axios from "../lib/api/axios";

const useCustomers = () => {
  const [customers, setCustomers] = useState();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const response = await axios.get("/customers", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        setCustomers(response.data);
      } catch (error) {
        console.log("An error occurred");
        console.log(error.message);
        setCustomers([]);
      }
    };
    getCustomers();
  }, []);

  return { customers };
};

export default useCustomers;
