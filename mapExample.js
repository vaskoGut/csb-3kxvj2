// find watched films looping through array and checking key word

function MoviesConstructor() {
  this.watchedMovies = [];
}

MoviesConstructor.prototype.getMoviesStatus = function (array, wathedFilm) {
  this.watchedMovies = array.map((element) => {
    if (element.indexOf(wathedFilm) === -1) {
      return element + " pending";
    }
    return element + " watched";
  }, this);
};

const MoviesInstance = new MoviesConstructor();

let movies_array = [
  "Captain America: The First Avenger",
  "Captain America: Civil War",
  "Iron Man",
  "Iron Man 2"
];
console.log(MoviesInstance.getMoviesStatus(movies_array, "Iron Man"));
console.log("watched movies: ", MoviesInstance.watchedMovies);
