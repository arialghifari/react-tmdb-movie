import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

const About = () => {
  return (
    <div style={{ margin: "0 30px" }}>
      <p>Who are we?</p>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Link to="description">Description</Link>
        <Link to="service">Service</Link>
      </Box>
      <Outlet />
    </div>
  );
};

export default About;
