export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c79cdbf4f527a182a7b7331c31ab2a47&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };