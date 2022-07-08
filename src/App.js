import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import MovieList from "./containers/MovieList";
import About from "./containers/About";
import theme from "./themes/theme";
import { Routes, Route } from "react-router-dom";
import Pricing from "./containers/Pricing";
import { Subscribed } from "./containers/Subscribed";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="subscribed/:plan" element={<Subscribed />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
