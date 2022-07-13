import { useEffect, useState } from "react";
import "../App.css";
import tmdb from "../apis/tmdb";
import { Box, Button } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";

const Indonesian = () => {
  const [movies, setMovies] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams("");

  const setSortParams = (type) => {
    queryParams.set("sort", type);

    setQueryParams(queryParams);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdb.get("discover/movie");

        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const sortMovies = (type) => {
      if (type === "asc") {
        const sortAsc = [...movies].sort(
          (a, b) => a.vote_average - b.vote_average
        );

        setMovies(sortAsc);
      }

      if (type === "desc") {
        const sortDesc = [...movies].sort(
          (a, b) => b.vote_average - a.vote_average
        );

        setMovies(sortDesc);
      }
    };

    sortMovies(queryParams.get("sort"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

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

export default Indonesian;
