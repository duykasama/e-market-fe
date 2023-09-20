import { useEffect, useState } from "react";
import axios from "../lib/api/axios";
import useAuth from "./useAuth";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + auth?.accessToken
          },
          withCredentials: true,
        });

        setData(response.data.data);
        await new Promise((r) => setTimeout(r, 300));
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    };

    setIsPending(true);
    getData();
  }, [endpoint]);

  return { data, isPending, error };
};

export default useFetch;
