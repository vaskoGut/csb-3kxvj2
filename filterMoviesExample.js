// find watched filmis in list of movies. Display it, count it.

const movies_array = [
  "Captain America: The First Avenger",
  "Captain America: Civil War",
  "Iron Man",
  "Iron Man 2"
];

function MoviesAnalyzer() {
  this.watchedMovies = [];
}

MoviesAnalyzer.prototype.getWatchedMovies = function (array, watchedFilm) {
  this.moviesCount = 0;
  this.watchedMovies = array.filter((elem, index) => {
    if (elem.indexOf(watchedFilm) !== -1) return true;
    return false;
  }, this);
  this.moviesCount = this.watchedMovies.length;
};

const itemAnalyzer = new MoviesAnalyzer();
itemAnalyzer.getWatchedMovies(movies_array, "Iron");
console.log("list of watcedMovies", itemAnalyzer.watchedMovies);
console.log("number of watched movies", itemAnalyzer.moviesCount);
