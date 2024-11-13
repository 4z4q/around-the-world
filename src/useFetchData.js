import { useEffect, useState } from "react";

const useFetchData = (country) => {
  const [empty, setIsEmpty] = useState(false);
  const [loading, setLoding] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [countryList, setCounrtyList] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countryList"));
    if (data) {
      setCounrtyList(data);
      setFilteredCountryList(data);
    } else {
      fetchDataFromApi();
    }
  };

  const fetchDataFromApi = () => {
    let url = "https://restcountries.com/v3.1/all";

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }

    setLoding(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setCounrtyList(data[0]); 
          setLoding(false);
        } else {
          setCounrtyList(data);
          setFilteredCountryList(data);
          localStorage.setItem("countryList", JSON.stringify(data));
          setLoding(false);
        }
      })
      .catch(() => {
        setErrorMessage("something went wrong");
        setLoding(false);
      })
      .finally(() => {
        setIsEmpty(false);
      });
  };

  useEffect(() => {
    if (country) {
      fetchDataFromApi();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  return {
    empty,
    loading,
    errorMessage,
    countryList,
    filteredCountryList,
    setFilteredCountryList,
    setIsEmpty,
  };
};

export default useFetchData;
