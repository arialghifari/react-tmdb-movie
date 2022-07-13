import axios from "axios";

const API_KEY = "4f7e619531b104898138f0f2eeb7011a";
const BASE_URL = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    with_original_language: "id",
  },
});

export default tmdb;
