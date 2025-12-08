import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const LoadingData = () => {
  const { setAdatok } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const adatForrasURL = "https://retoolapi.dev/ljArL9/dataTypes";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(adatForrasURL);
        const data = response.data;
        setAdatok(data);
        console.log("Adatok betöltve:", data);
      } catch (error) {
        console.error("Hiba az adatok betöltése során:", error);
        setError("Nem sikerült betölteni az adatokat");
        setAdatok([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setAdatok]);

  if (loading) {
    return <p>Adatok betöltése...</p>;
  }

  if (error) {
    return <p className="error">Hiba: {error}</p>;
  }

  return null; // Nem jelenít meg semmit, ha minden rendben
};

export default LoadingData;