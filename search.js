const {promises: fsPromises} = require('fs');

let FilmsList = [];

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
