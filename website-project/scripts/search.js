const apiKey = 'ca4b292d69c9921620e1b60c182403b0';

/* 
// Search movies by title
const searchMovies = () => {
    const query = document.getElementById('searchInput').value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => displaySearchResults(data.results))
        .catch(error => console.error('Error searching for movies:', error));
};

const displaySearchResults = (movies) => {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.vote_average}</p>
      <button onclick='addFavorite(${JSON.stringify(movie)})'>Add to Favorites</button>
    `;
        searchResults.appendChild(movieCard);
    });
};

document.getElementById('searchBtn').addEventListener('click', searchMovies);
 */


const fetchGenres = () => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const genreDropdown = document.getElementById('genreDropdown');
            data.genres.forEach(genre => {
                const option = document.createElement('option');
                option.value = genre.id;
                option.textContent = genre.name;
                genreDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching genres:', error));
};

document.addEventListener('DOMContentLoaded', fetchGenres);



const searchMovies = () => {
    const query = document.getElementById('searchInput').value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results, 'searchResults'))
        .catch(error => console.error('Error searching movies:', error));
};

document.getElementById('searchBtn').addEventListener('click', searchMovies);


const filterMoviesByGenre = () => {
    const genreId = document.getElementById('genreDropdown').value;
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results, 'searchResults'))
        .catch(error => console.error('Error filtering movies by genre:', error));
};

document.getElementById('genreDropdown').addEventListener('change', filterMoviesByGenre);


const fetchRecommendations = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results, 'recommendations'))
        .catch(error => console.error('Error fetching recommendations:', error));
};

const displayMovies = (movies, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy">
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.vote_average}</p>
      <button onclick="fetchRecommendations(${movie.id})">Get Recommendations</button> `;
        container.appendChild(movieCard);
    });
};



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


