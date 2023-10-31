/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_API_BASE_URL: "https://api.themoviedb.org/3/movie",
    NEXT_API_KEY:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FjOTlkMDQ1MjY1ZDZiODQzZWU3ZTQxN2Y0ODE4ZiIsInN1YiI6IjYyMTUyOTBmMzIzZWJhMDAxZWI3Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05CExT0KbAC1DiBGzAmqFW_CrYVgk4EY-HVfpsl7v6w",
    NEXT_IMAGE_URL: "https://image.tmdb.org/t/p/original",
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
