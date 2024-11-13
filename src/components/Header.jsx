import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import ThemeSwithcer from "./ThemeSwithcer";

function Header(props) {
  const { iconMode, handeClick } = props;
  return (
    <>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Logo />
          </Typography>
          <ThemeSwithcer iconMode={iconMode} handeClick={handeClick} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
