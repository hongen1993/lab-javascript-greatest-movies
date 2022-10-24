// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')
    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    let filter = moviesArray.filter(movie => movie.score)
    let order = filter.reduce((a, b) => a + b.score, 0) / moviesArray.length
    let roundDecimal = Math.round((order + Number.EPSILON) * 100) / 100
    return roundDecimal
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) return 0
    let allDramaMvies = moviesArray.filter(movie => movie.genre.includes('Drama'))
    if (!allDramaMvies.length) return 0
    let dramaScores = allDramaMvies.map(drama => drama.score)
    let dramaScrAverage = parseFloat(dramaScores.reduce((a, b) => a + b) / dramaScores.length)
    let roundDecimal = Math.round((dramaScrAverage + Number.EPSILON) * 100) / 100

    return roundDecimal
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let mapArray = moviesArray.map(movie => movie)
    let sortArray = mapArray.sort((movieA, movieB) => {
        if (movieA.year !== movieB.year) {
            return movieA.year - movieB.year
        } else {
            return movieA.title.localeCompare(movieB.title)
        }
    })
    return sortArray
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movieTitle = moviesArray.map(movie => movie.title)
    let movieSort = movieTitle.sort()

    let newArray = []
    if (movieSort.length < 20) {
        movieSort.forEach(movie => newArray.push(movie))
    } else {
        for (let i = 0; i < 20; i++) {
            newArray.push(movieSort[i])
        }
    }
    return newArray

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null
    let countList = moviesArray.reduce((a, b) => {
        a[b.score] = (a[b.score] || 0) + 1;
        return a;
    }, {});
    console.log(countList)
}
