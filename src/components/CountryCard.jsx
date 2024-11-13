import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}) {
  return (
    <Card sx={{ width: { xs: "100%", sm: 285, md: 250 } }}>
      <Link to={name}>
        <CardActionArea>
          {flag && (
            <CardMedia
              component="img"
              height="140"
              image={flag}
              sx={{
                width: { xs: "100% ", sm: 285, md: "255px" },
                height: "140px",
                padding: "8px",
                borderRadius: "12px",
              }}
              alt="green iguana"
            />
          )}
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontFamily: "inherit", mb: 1 }}
            >
              {name}
            </Typography>
            <p>
              <span className="font-semibold">Population: </span>
              <span className="font-light">{population}</span>
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              <span className="font-light">{region}</span>
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              <span className="font-light">{capital}</span>
            </p>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
