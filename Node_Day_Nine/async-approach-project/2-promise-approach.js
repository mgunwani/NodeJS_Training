
const axios = require('axios');
const fs = require('fs').promises;
/*
axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        console.log('Getting List of Movies: ');
        response.data.forEach(movie => {
            console.log(`${movie['title']} , ${movie['release_date']}`);
        });
    })
    .catch((error) => { console.log(`Getting Some Errors : ${error}`); })
*/

axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        let moviesList = '';
        console.log('Getting List of Movies: ');
        response.data.forEach(movie => {
            moviesList += `${movie['title']} , ${movie['release_date']}\n`;
        });
        return fs.writeFile('promiseMovies.csv', moviesList);
    })
    .then(() => { console.log('Saved list of movies to promiseMovies.csv') })
    .catch((error) => { console.log(`Getting Some Errors : ${error}`); })
