import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import tmdb from "../apis/tmdb";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await tmdb.get("trending/movie/week");

      setMovies(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        my: 14,
        gap: 5,
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
    </Box>
  );
};

export default MovieList;
