const {promises: fsPromises} = require('fs');
// const request = require('request');

let FilmsList = [];
// let ArrayTest = ["Cowboy Bepop", "Hunter x Hunter", "The Office"]

const rapideAPIKey = process.env.NETFLIX_API_KEY;

async function asyncReadFile(filename) {
    try {
        const contents = await fsPromises.readFile(filename, 'utf-8');
        FilmsList = contents.split(/\r?\n/);
        console.log(FilmsList);

        return FilmsList;
    } catch (err) {
        console.log(err);
    }
};

console.log(FilmsList);

asyncReadFile('./films.txt');

const options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
    qs: {
        order_by: 'date',
        title: 'Cowboy Bepop',
        type: 'movie'
    },
    headers: {
        'X-RapidAPI-Key': rapideAPIKey,
        'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});