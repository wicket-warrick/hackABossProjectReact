import { useEffect, useState, useContext } from "react";
import { getUserByIdService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const useUser = (idUser) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { refetchUser, setRefetchUser } = useContext(AuthContext);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getUserByIdService(idUser);
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [idUser, refetchUser]);

  return { userData, error, loading, setError, setRefetchUser, refetchUser };
};
