export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4c46a13c31mshf42a16290983dc4p100acejsn26b4f2888d58",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "4c46a13c31mshf42a16290983dc4p100acejsn26b4f2888d58",
  },
};

const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
