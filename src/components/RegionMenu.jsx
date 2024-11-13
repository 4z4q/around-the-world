import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

import { useTheme } from "@mui/material/styles";

const RegionMenu = ({ countriesList, filterCountriesList }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";


  const handleRegionChange = (e) => {
    const region = e.label;

    const filteredCountries =
      region === "All regions"
        ? countriesList
        : countriesList.filter((country) => country.region === region);
    filterCountriesList(filteredCountries);
  };

  return (
    <Select
      defaultValue={options[0]}
      onChange={handleRegionChange}
      options={options}
      classNames={{
        input: () => (darkMode ? "text-gray-100" : "text-gray-900"),
        singleValue: () => (darkMode ? "text-gray-100" : "text-gray-900"),
        // control: () =>
        //   darkMode
        //     ? "flex h-[39px]  items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100"
        //     : "flex h-[39px]  items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow bg-white text-gray-900", // تعيين الطول هنا

        indicatorSeparator: () => "hidden",
        option: () =>
          darkMode
            ? "hover:!text-gray-800 dark:hover:text-gray-200"
            : "hover:!text-gray-700 hover:text-gray-900",
        menu: () =>
          darkMode
            ? " bg-gray-800 dark:text-gray-100"
            : "bg-white text-gray-900",
        menuList: () => (darkMode ? "dark:bg-gray-800" : "bg-white"),
      }}
    />
  );
};

export default RegionMenu;
