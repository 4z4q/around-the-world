import { Box } from "@mui/material";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import ShowMessage from "../components/ShowMessage";
import EmptySearch from "../components/EmptySearch";
import useFetchData from "../useFetchData";

function Home() {
  const {
    empty,
    loading,    
    errorMessage,
    countryList,
    filteredCountryList,
    setFilteredCountryList,
    setIsEmpty,
  } = useFetchData("");

  return (
    <>
      {errorMessage.length ? (
        <ShowMessage message={errorMessage} />
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              margin: "40px auto",
            }}
          >
            <SearchInput
              countriesList={countryList}
              filterCountriesList={setFilteredCountryList}
              empty={empty}
              setIsEmpty={setIsEmpty}
            />
            <RegionMenu
              countriesList={countryList}
              filterCountriesList={setFilteredCountryList}
            />
          </Box>
          {empty && <EmptySearch />}

          <CountryList data={filteredCountryList} loading={loading} />
        </>
      )}
    </>
  );
}

export default Home;
