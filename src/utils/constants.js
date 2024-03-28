export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/95870924?v=4";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_KEY;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTQ1ZTYwZmMyMDBmZjcwODc5Y2VlZGMyNTE0MzJjZCIsInN1YiI6IjY1ZWRhMzE4NDQ3ZjljMDE2NDVmYzJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEazGp3c-rOpAdkY9JWiffihxJqWlrCu3Z5K4V19F4E",

    // Authorization: `Bearer ${TMDB_API_KEY}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
