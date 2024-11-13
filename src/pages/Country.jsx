import { Grid2 } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../useFetchData";
import ShowMessage from "../components/ShowMessage";
import EmptySearch from "../components/EmptySearch";

function Country() {
  const { name } = useParams();
  const { countryList, loading, errorMessage } = useFetchData(name);

  console.log(countryList);

  if (loading) {
    return <EmptySearch />;
  }

  return (
    <>
      {errorMessage.length ? (
        <ShowMessage message={errorMessage} />
      ) : (
        <>
          <Link
            className="inline-block p-3 mb-16 bg-white rounded-md md:mb-20"
            to="/"
            style={{
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              margin: "50px  auto 20px",
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.8922 3.53553L7.07071 4.71405L3.18162 8.60313L18.0309 8.60313L18.0309 10.253L3.18162 10.253L7.07071 14.1421L5.8922 15.3206L-0.000355655 9.42809L5.8922 3.53553Z"
                  fill="#111827"
                />
              </g>
            </svg>
          </Link>
          <Grid2 container spacing={4} className="mt-8 mb-8 shadow width-full">
            <Grid2 size={{ xs: 12, md: 6 }}>
              <img
                src={countryList?.flags?.svg}
                alt={countryList?.flags?.alt}
              />
            </Grid2>
            <Grid2 size={6} className="flex flex-col justify-center gap-4 p-3">
              <h1>{countryList?.name?.common}</h1>
              <p>
                <span className="font-semibold">Population: </span>
                <span className="font-light">
                  {parseInt(countryList?.population).toLocaleString()}
                </span>
              </p>

              <p>
                <span className="font-semibold">Region: </span>
                <span className="font-light">{countryList?.region}</span>
              </p>

              <p>
                <span className="font-semibold">Sub Region: </span>
                <span className="font-light">{countryList?.subregion}</span>
              </p>

              <p>
                <span className="font-semibold">Capital: </span>
                <span className="font-light">{countryList?.capital}</span>
              </p>

              <div className="flex flex-col gap-5">
                <p>
                  <span className="font-semibold">Top Level Domain: </span>
                  <span>{countryList?.tld?.join(", ")}</span>
                </p>

                <p>
                  <span className="font-semibold">Currencies: </span>
                  <span className="font-thin">
                    {countryList?.currencies &&
                      Object.keys(countryList.currencies)
                        .map(
                          (currency) =>
                            `${countryList?.currencies[currency].name}`
                        )
                        .join(", ")}
                  </span>
                </p>

                <p>
                  <span className="font-semibold">Languages: </span>
                  <span className="font-thin">
                    {countryList?.languages &&
                      Object.values(countryList.languages)
                        .map((lang) => `${lang}`)
                        .join(", ")}
                  </span>
                </p>
              </div>
            </Grid2>
          </Grid2>
        </>
      )}
    </>
  );
}

export default Country;

{
  /* <div className="">


<div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
  <img
    className="w-full"
    // src={result?.flags?.svg}
    // alt={result?.flags?.alt}
  />
  <div>
    <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
      {/* {result?.name?.common} }
      Test
    </h1>
    <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
      <div className="flex flex-col gap-5">
        <p>
          <span className="font-semibold">Population: </span>
          <span className="font-light">
            FAKE
          </span>
        </p>

        <p>
          <span className="font-semibold">Region: </span>
          <span>AHMED</span>
        </p>

        <p>
          <span className="font-semibold">Sub Region: </span>
          <span>SKODr</span>
        </p>

        <p>
          <span className="font-semibold">Capital: </span>
          <span>ssss</span>
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <p>
          <span className="font-semibold">Top Level Domain: </span>
          <span>skodr</span>
        </p>

        <p>
          <span className="font-semibold">Currencies: </span>
          <span className="font-thin"></span>
        </p>

        <p>
          <span className="font-semibold">Languages: </span>
          <span className="font-thin"></span>
        </p>
      </div>
    </div>
  </div>
</div>
</div> */
}
