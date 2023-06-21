import { useEffect, useState } from "react";
import { getNewByIdService } from "../services";

export const useNew = (idNew) => {
  const [_new, setNew] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getNewByIdService(idNew);
        setNew(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [idNew]);

  return { _new, error, loading, setError };
};
