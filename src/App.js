import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import theme from "./themes/theme";
import Navbar from "./components/Navbar";
import MovieList from "./containers/MovieList";
import Indonesian from "./containers/Indonesian";
import Pricing from "./containers/Pricing";
import About from "./containers/About";
import Subscribed from "./containers/Subscribed";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="indonesian" element={<Indonesian />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />}>
            <Route path="description" element={<p>Provides movies</p>} />
            <Route path="service" element={<p>Streaming movies</p>} />
          </Route>
          <Route path="subscribed/:plan" element={<Subscribed />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
