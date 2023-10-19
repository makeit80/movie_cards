
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjJlOTIwMzgzYzNhMTQ0OTc1ZmRmMzY1N2JhNzAxMSIsInN1YiI6IjY1MmYzODgzZWE4NGM3MDEyZDcxYzJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8z92nUs3vBjcTyH93XU1xQ4JI-1scrPHlpKv6YB3Pok'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', options)
  .then(response => {
    if (!response.ok) {
      throw new Error('오류');
    }
    console.log(response);
    return response.json(); 
  })
  .then(data => {
    const results = data.results;
    const movieList = document.getElementsByClassName('item');
    console.log(movieList[0]);

    results.forEach(movie => {
      const item = document.createElement("div")
      item.classList.add('container')
      item.classList.add('item')

      const listItem = document.createElement('div');
      listItem.classList.add('name')

      const imgItem = document.createElement('img');
      imgItem.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      item.appendChild(imgItem)

      listItem.innerHTML = `${movie.title} <br>평점: ${movie.vote_average}`;
      item.appendChild(listItem)
      const container = document.getElementsByClassName("wrap")[0]
      container.appendChild(item)
    });
  })
  .catch(error => {
    console.error('오류 발생:', error);
  });




