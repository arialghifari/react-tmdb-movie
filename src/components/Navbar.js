import { MovieFilter } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { text: "Indonesian", link: "/indonesian" },
  { text: "Pricing", link: "/pricing" },
  { text: "About", link: "/about" },
];

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", marginBottom: "80px" }}>
      <AppBar component="nav">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" className="nav-main">
            <MovieFilter />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              NONTON
            </Typography>
          </Link>
          <Box>
            {navItems.map((item) => (
              <NavLink
                key={item.text}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-inactive"
                }
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
