//BASE URL
const base_url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API}`;
//Get current time
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return `${month}`;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDay() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return `${day}`;
  }
};
const currentYear = new Date().getFullYear();
const thisYear = `${currentYear}-${getCurrentMonth()}-${getCurrentMonth()}`;
const nextYear = `${currentYear + 1}-${getCurrentMonth()}-${getCurrentMonth()}`;
const lastYear = `${currentYear - 1}-${getCurrentMonth()}-${getCurrentMonth()}`;
//respective urls
export const upcomingMovieUrl = `${base_url}&primary_release_date.gte=${lastYear}&primary_release_date.lte=${thisYear}`;
export const newMovieUrl = `${base_url}&primary_release_date.gte=${thisYear}&primary_release_date.lte=${nextYear}`;
export const popularMovieUrl = `${base_url}&sort_by=popularity.desc`;
export const movieDetailUrl = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_MOVIE_API}`;
