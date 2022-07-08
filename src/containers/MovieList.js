import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import tmdb from "../apis/tmdb";
import { useSearchParams } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams("");
  const [moviesReady, setMoviesReady] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdb.get("trending/movie/week");

        setMovies(response.data.results);
        setMoviesReady(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (!moviesReady) return;

    const sortMovies = (type) => {
      if (type === "asc") {
        const sortedAsc = movies.sort(
          (a, b) => a.vote_average - b.vote_average
        );
        setMovies(sortedAsc);
      }

      if (type === "desc") {
        const sortedDesc = movies.sort(
          (a, b) => b.vote_average - a.vote_average
        );
        setMovies(sortedDesc);
      }
    };

    sortMovies(queryParams.get("sort"));
  }, [queryParams, moviesReady]);

  const setSortParams = (type) => {
    queryParams.set("sort", type);

    setQueryParams(queryParams);
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        Sort by rating
        <Button onClick={() => setSortParams("asc")}>Asc</Button>
        <Button onClick={() => setSortParams("desc")}>Desc</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          my: 6,
          gap: 5,
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </Box>
    </>
  );
};

export default MovieList;
