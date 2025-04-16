// Retrieve favorites from local storage
const getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];

// Display favorite movies
const displayFavorites = () => {
    const favoritesGrid = document.getElementById('favoritesGrid');
    favoritesGrid.innerHTML = ''; // Clear previous results

    const favorites = getFavorites();
    if (favorites.length === 0) {
       
        return;
    }

    favorites.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" loading="lazy">
      <img loading="lazy">
      <img  width="200">
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.vote_average}</p>
      <button onclick="removeFavorite('${movie.id}')">Remove</button>`;
        favoritesGrid.appendChild(movieCard);
    });
};

// Remove a movie from favorites
const removeFavorite = (movieId) => {
    let favorites = getFavorites();
    favorites = favorites.filter(movie => movie.id !== parseInt(movieId));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites(); // Refresh the list
};

document.addEventListener('DOMContentLoaded', displayFavorites);




const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
