const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjJlOTIwMzgzYzNhMTQ0OTc1ZmRmMzY1N2JhNzAxMSIsInN1YiI6IjY1MmYzODgzZWE4NGM3MDEyZDcxYzJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8z92nUs3vBjcTyH93XU1xQ4JI-1scrPHlpKv6YB3Pok'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));