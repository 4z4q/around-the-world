import { Grid2 } from "@mui/material";
import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

export default function CountryList({ data, loading }) {

  if (loading) {
    return <EmptySearch />;
  }

  return (
    <>
      {data.length ? (
        <Grid2
          container
          spacing={{ xs: 2, sm: 3, md: 3, lg: 4 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          justifyContent={{ xs: "center", sm: "space-between" }}
          margin="0 0 50px"
        >
          {data.map((country) => (
            <CountryCard
              key={country.name.official}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
            />
          ))}
        </Grid2>
      ) : <EmptySearch />}
    </>
  );
}
