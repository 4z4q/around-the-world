import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 font-semibold ">
      <TravelExploreIcon />
      Around the world
    </Link>
  );
};

export default Logo;
