import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Header from "../components/Header";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [mode, setMode] = useState("light");
  const [iconMode, setIconMode] = useState(true);

  const handeClick = () => {
    setIconMode((prev) => !prev);
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode,
      },
    });
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <div style={{ fontFamily: "Cairo" , height: "100vh" }}>
            <Header iconMode={iconMode} handeClick={handeClick} />
            <Outlet />
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Layout;
