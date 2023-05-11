const getMovieData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => response.json())
    // .then((data) => console.log(data))
}

export default getMovieData