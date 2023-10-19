const apiKey = 'a22e920383c3a144975fdf3657ba7011';
const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko&page=1`;
const imgUrl = 'https://api.themoviedb.org/3/movie/top_rated/r782z4H7GzkyNaf3hAtBB4pVkOj.jpg'

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  }
};
/// https://api.themoviedb.org/3/movie/top_rated/r782z4H7GzkyNaf3hAtBB4pVkOj.jpg
fetch(apiUrl, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('네트워크 오류');
    }
    console.log(response);
    return response.json(); // JSON 데이터 가져오기
  })
  .then(data => {
    const results = data.results;
    const movieList = document.getElementsByClassName('item');
    console.log(movieList[0]);


    // results = 실제로 가져온 데이터 10 => 10개 item을 만들면 됨
    results.forEach(movie => {
      const item = document.createElement("div") // <div></div>
      item.classList.add('container')
      item.classList.add('item')

      const listItem = document.createElement('div'); // <h4></h4>
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


