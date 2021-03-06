
const request = require('request');
const fs = require('fs');

/*
request('https://ghibliapi.herokuapp.com/films', (err, response, body) => {
    if (err) {
        console.log(`Couldn't send request to API : ${err}`)
        return;
    }
    if (response.statusCode != 200) {
        console.log(`Expected Status Code 200 but received : ${response.statusCode}`)
        return;
    }
    console.log('Getting List of Films : ');
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie['title']} , ${movie['release_date']}`);
    });
})
*/

request('https://ghibliapi.herokuapp.com/films', (err, response, body) => {
    if (err) {
        console.log(`Couldn't send request to API : ${err}`)
        return;
    }
    if (response.statusCode != 200) {
        console.log(`Expected Status Code 200 but received : ${response.statusCode}`)
        return;
    }
    console.log('Getting List of Films : ');
    let moviesList = '';
    movies = JSON.parse(body);
    movies.forEach(movie => {
        moviesList += `${movie['title']} , ${movie['release_date']}\n`;
    });

    fs.writeFile('callbackMovies.csv', moviesList, (err) => {
        if (err) {
            console.log(`Couldn't save movies to files : ${err}`)
            return;
        }
        console.log('Saved list of movies to callbackMovies.csv');
    })

})