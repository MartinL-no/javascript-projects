
const containerMovies = document.getElementById("container-movies")
const containerWatchlist = document.getElementById("container-watchlist")
const watchlistEl = document.getElementById("")
const addWatchlist = document.getElementById("watchlist")
const watchlistLength = document.getElementById("watchlist-length")
let movieForm = document.getElementById("search")

let watchlistArray = []

window.onload = function() {
    localStorage.getItem("array:")
    watchlistArray = JSON.parse(localStorage.getItem("array:"))
    renderMovie(watchlistArray, containerWatchlist)
    if (watchlistArray === []) {
        watchlistLength.textContent = `(${0})`
    }   else {
        watchlistLength.textContent = `(${watchlistArray.length})`
    }
}

function fetchMovieList(id) {
    fetch(`http://www.omdbapi.com/?apikey=c59f01a8&s=${id}`)
    .then(resolve => resolve.json() )
    .then( data => {
        renderMovie(data.Search, containerMovies)
    })
}

function renderMovie(data, container) {
    container.innerHTML = ""
    for (let movie of data) {
        fetch(`http://www.omdbapi.com/?apikey=c59f01a8&i=${movie.imdbID}`)
        .then(resolve => resolve.json() )
        .then( movie => {
            container.innerHTML += `
            <div class="container-movie">
            <div id="column-one" class="column-one">
            <img src="${movie.Poster}" alt="poster of the movie">
            </div>
            <div id="column-two" class="column-two">
            <h2 id="title">${movie.Title}<span class="ratings">⭐${movie.imdbRating}</span></h2>
            <span class="runtime movie-info">${movie.Runtime}</span>
            <span class="genre movie-info">${movie.Genre}</span>
            <span data-imdbID="${movie.imdbID}" class="watchlist movie-info">➖ Watchlist</span>
            <p id="movie-plot">${movie.Plot}</p>
            </div>
            </div>
            `
        })
    }
}

movieForm.addEventListener("submit", event => {
    event.preventDefault()
    let ourFormData = new FormData(event.target).get("movie-input")
    fetchMovieList(ourFormData)
})

containerWatchlist.addEventListener('click', function(e){
    if (event.target.classList.contains('watchlist')) { 
        watchlistArray = JSON.parse(localStorage.getItem("array:"))
        const itemToRemove = watchlistArray.findIndex(num => num.imdbID === e.target.dataset.imdbid)
        watchlistArray.splice(itemToRemove, 1)
        localStorage.setItem("array:", JSON.stringify(watchlistArray))
        watchlistLength.textContent = `(${watchlistArray.length})`
        renderMovie(watchlistArray, containerWatchlist)
    }
    
 })