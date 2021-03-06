
const axios = require('axios');
const fs = require('fs').promises;

/*
async function getMovies() {
    let response = await axios.get('https://ghibliapi.herokuapp.com/films')
    response.data.forEach(movie => {
        console.log(`${movie['title']} , ${movie['release_date']}\n`);
    });
}
*/

/*
async function saveMovies() {
    let response = await axios.get('https://ghibliapi.herokuapp.com/films')
    let moviesList = '';
    response.data.forEach(movie => {
        moviesList += `${movie['title']} , ${movie['release_date']}\n`;
    });
    await fs.writeFile('asynawaitMovies.csv', moviesList);
}
*/

async function saveMovies() {
    try {
        let response = await axios.get('https://ghibliapi.herokuapp.com/films1')
        let moviesList = '';
        response.data.forEach(movie => {
            moviesList += `${movie['title']} , ${movie['release_date']}\n`;
        });
        await fs.writeFile('asynawaitMovies.csv', moviesList);
    } catch (error) {
        console.log(`Couldn't save the movies to file.. : ${error}`);
    }
}

// getMovies();
saveMovies();