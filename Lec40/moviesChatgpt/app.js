let input = document.querySelector('#searchInput');
let btn = document.querySelector('#searchBtn');
let list = document.querySelector('#list');

// Default movies (5 to show on load)
// Default movies (5 to show on load)
const defaultMovies = [
  {
    name: "Shang-Chi and the Legend of the Ten Rings",
    image: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    rating: 8.0,
    date: "2021-09-01"
  },
  {
    name: "The Tomorrow War",
    image: "https://image.tmdb.org/t/p/w500/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg",
    rating: 7.7,
    date: "2021-09-03"
  },
  {
    name: "Free Guy",
    image: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    rating: 7.9,
    date: "2021-08-13"
  },
  {
    name: "Black Widow",
    image: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    rating: 6.8,
    date: "2021-07-09"
  },
  {
    name: "Eternals",
    image: "https://image.tmdb.org/t/p/w500/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg",
    rating: 6.9,
    date: "2021-11-05"
  }
];


// Search button click
btn.addEventListener('click', function () {
  let searchText = input.value.trim();
  if (searchText) {
    fetchData(searchText);
    input.value = '';
  }
});

// Press Enter to search
input.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    btn.click();
  }
});

// API call
function fetchData(searchText) {
  list.innerHTML = `<p style="text-align:center;">🔎 Searching...</p>`;

  axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function (response) {
      const movies = response.data.map(item => ({
        name: item.show.name,
        image: item.show.image ? item.show.image.original : null,
        rating: item.show.rating.average || "N/A",
        date: item.show.premiered || "Unknown"
      }));
      manipulateDom(movies);
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
      list.innerHTML = `<p style="color:red; text-align:center;">❌ No results found. Try again!</p>`;
    });
}

// Update DOM with results
function manipulateDom(movies) {
  list.innerHTML = '';

  if (!movies || movies.length === 0) {
    list.innerHTML = `<p style="text-align:center; color:red;">No movies found!</p>`;
    return;
  }

  for (let movie of movies) {
    if (movie.image) { // ✅ remove movies without photo
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.name}">
        <h2>${movie.name} <span class="rating">${movie.rating}</span></h2>
        <p>Release Date: ${movie.date}</p>
      `;
      list.appendChild(card);
    }
  }
}

// Show default movies on load
manipulateDom(defaultMovies);
