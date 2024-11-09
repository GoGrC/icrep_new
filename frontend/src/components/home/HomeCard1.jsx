import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import blaf2 from "../../assets/DirectorImage.fe9c147d.svg";
import "./HomeCard1.css";

const HomeCard1 = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", width: "700%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="255"
          image={blaf2}
          alt="Co-ordinator's Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Co-ordinator's Message
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            Dr. Vani Kesari A.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1 }}
          >
            The primary endeavor of this centre is to accentuate ethical conduct
            of research in all realms of knowledge especially scientific
            inquiries. It attempts to create a group of students and scholars
            who would be responsible to find solutions to pressing ethical
            dilemmas in different facets of scientific pursuits...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to="/Dirmssg">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeCard1;
