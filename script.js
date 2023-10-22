
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
      item.classList.add('item')

      const listItem = document.createElement('div');
      listItem.classList.add('name')

      const voteList = document.createElement('div');
      voteList.classList.add('voteAverage')


      // 이미지
      const imgItem = document.createElement('img');
      imgItem.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      imgItem.classList.add('movieImg')
      item.appendChild(imgItem)

      // 클릭 이벤트
      const idItem = document.createElement('p')
      idItem.innerHTML = `id값 : ${movie.id}`
      imgItem.appendChild(idItem)
      imgItem.onclick = openImg;

      // 이름, 평점
      listItem.innerHTML = `${movie.title}`;
      voteList.innerHTML = `평점: ${movie.vote_average}`
      item.appendChild(listItem)
      item.appendChild(voteList)
      const container = document.getElementsByClassName("wrap")[0]
      container.appendChild(item)
    });
  })
  .catch(error => {
    console.error('오류 발생:', error);
  });
  

function openImg(event) {
  event.target.addEventListener('click', () => {
    alert(event.target.textContent)
  })
}


// 검색 기능
const searchInput = document.getElementById('inputBox');
console.log('test');
console.log(searchInput);
searchInput.addEventListener('keyup', (e) => {
  e.preventDefault();
  let search = document.getElementById('inputBox').value.toLowerCase();
  let itemList = document.getElementsByClassName('item');
  for (let i = 0; i < itemList.length; i++) {
    console.log(itemList[i]);
    var name = itemList[i].getElementsByClassName('name');
    console.log(name[0]);
    if (name[0].innerHTML.toLowerCase().includes(search)) {
      itemList[i].style.display = "block"
    } else {
      itemList[i].style.display = "none"
    }
  }
})




