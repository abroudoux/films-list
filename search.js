const { promises: fsPromises } = require('fs');
const puppeteer = require('puppeteer');
// const axios = require('axios');

let FilmsList = [];

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

asyncReadFile('./films.txt');

function main() {
    automateSearch();
};

async function automateSearch() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
};

main();

// const url = 'https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=title&title=Cowboy%20Bepop';
// const options = {
//     method: 'GET',
//     qs: {
//         order_by: 'title',
//         title: 'Cowboy Bepop',
//         type: 'movie'
//     },
// 	headers: {
// 	    'X-RapidAPI-Key': rapideAPIKey,
// 		'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
// 	},
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const options = {
//     method: 'GET',
//     url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
//     qs: {
//         order_by: 'title',
//         title: 'Cowboy Bepop',
//         type: 'movie'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'ba2fa25a0bmsh0b79613c7d61b88p1e9c8bjsn256a25f0f2e7',
//         'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
//     }
// };

// axios
//     .get(options.url, {
//         params: options.params,
//         headers: options.headers,
//     })
//     .then((response) => {
//         const results = response.data;

//         if (results && results.results && results.results.length > 0) {
//             const firstResult = results.results[0];
//             const title = firstResult.title;

//         if (title === options.params.title) {
//             console.log('Titre valide trouvé :', title);
//         } else {
//             console.error('Aucun résultat valide trouvé.');
//         }
//         } else {
//         console.error('Aucun résultat trouvé.');
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// request(options, function (error, _response, body) {
//     if (error) {
//         console.error(error);
//         return;
//     };

//     const results = JSON.parse(body);

//     if (results && results.results && results.results.length > 0) {
//         const firstResult = results.results[0];
//         const title = firstResult.title;

//         if ( title === options.qs.title ) {
//             console.log('Titre valide trouvé :', title);
//         } else {
//           console.error('Aucun résultat valide trouvé.');
//         };
//     } else {
//         console.error('Aucun résultat trouvé.');
//     };
// });
