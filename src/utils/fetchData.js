export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": process.env.REACT_APP_EXERCISE_DB_RAPIDAPI_HOST,
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": process.env.REACT_APP_YOUTUBE_RAPIDAPI_HOST,
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
