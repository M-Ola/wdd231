
const apiKey = 'ca4b292d69c9921620e1b60c182403b0';

// Fetch and display popular movies
const fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(error => console.error('Error fetching movies:', error));
};

const displayMovies = (movies) => {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear previous results

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy" >
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.vote_average}</p>
      <button onclick='addFavorite(${JSON.stringify(movie)})'>Add to Favorites</button>
    `;
        movieGrid.appendChild(movieCard);
    });
};

// Add movie to favorites (stored in localStorage)
const addFavorite = (movie) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.id === movie.id)) {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${movie.title} added to favorites!`);
    } else {
        alert(`${movie.title} is already in favorites!`);
    }
};

document.addEventListener('DOMContentLoaded', fetchMovies);



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});







