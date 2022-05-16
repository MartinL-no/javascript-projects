
const containerMovies = document.getElementById("container-movies")
const containerWatchlist = document.getElementById("container-watchlist")
const watchlistEl = document.getElementById("")
const addWatchlist = document.getElementById("watchlist")
let movieForm = document.getElementById("search")

let watchlistArray = []

window.onload = function() {
    if (window.location.href.indexOf('index.html') > -1) {
        localStorage.setItem("array:", JSON.stringify(watchlistArray))
        fetchMovieList("western")
    }   else if (localStorage.getItem("array:")) {
        watchlistArray = JSON.parse(localStorage.getItem("array:"))
        renderMovie(watchlistArray, containerWatchlist)
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
                    <span data-imdbID="${movie.imdbID}" class="watchlist movie-info">➕ Watchlist</span>
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

containerMovies.addEventListener('click', function(e){
    watchlistArray = JSON.parse(localStorage.getItem("array:"))
    watchlistArray.push({"imdbID": e.target.dataset.imdbid})
    localStorage.setItem("array:", JSON.stringify(watchlistArray))
 })