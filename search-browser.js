const puppeteer = require('puppeteer');

async function getGoogleSearchResults() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto('https://www.google.com/search?q=netflix+cyberpunk');
    await page.waitForSelector('div.g');

    const searchResults = await page.$$eval('div.g', (results) => {
        results = results.slice(0, 1);

        const titles = results.map((result) => {
            const titleElement = result.querySelector('h3');
            return titleElement ? titleElement.textContent : '';
        });

        return titles;
    });

    // console.log('Titres des résultats de recherche :');
    searchResults.forEach((title, index) => {
        // console.log(`Résultat ${index + 1}: ${title}`);
        console.log(`Premier résultat: ${title}`);
    });

    await browser.close();
};

getGoogleSearchResults().catch((error) => {
    console.error('Une erreur s\'est produite :', error);
});
