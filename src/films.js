// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movies => {return movies.director});
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movies => {return movies.director === director});
  // console.log("EXERCICE 2 ->", result);
  return result;
}

function moviesAverage(array) {
  let hasScore = array.filter(movies => {return movies.score !== ''});
  let averages = array.reduce((total, movies) => {return total + movies.score}, 0);
  let result = (averages/hasScore.length);
  return result;
}
// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = moviesAverage(getMoviesFromDirector(array, director));
  // console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(movie => {return movie.title}).sort().slice(0, 20);
  // console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  // console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesInCategory = array.filter(movie => {return movie.genre.includes(genre)});
  let result = moviesAverage(moviesInCategory);
  // console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map(movie => {
    let duration = movie.duration.toString();
    let hours = parseFloat(duration.split(' ')[0]);
    let minutes = parseFloat(duration.split(' ')[1]);
    let film = {...movie};
    if (!isNaN(minutes)) {
      film.duration = (hours*60)+minutes;
    } else {
      film.duration = (hours*60);
    }
    return film;
  });
  // console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let moviesYear = array.filter(movie => {return movie.year === year});
  let bestMovie = moviesYear.reduce((a, b) => a.score > b.score ? a : b);
  let result = [];
  result.push(bestMovie);
  // console.log("EXERCICE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
