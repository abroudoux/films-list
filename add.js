const dotenv = require('dotenv');
const { Client } = require('@notionhq/client');
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

async function addToDatabase(databaseId, title, real, status) {
    try {
        const response = await notion.pages.create({
            parent: {
                database_id: databaseId,
            },
            properties: {
                'Name': {
                    type: 'title',
                    title: [
                    {
                        type: 'text',
                        text: {
                            content: title,
                        },
                    },
                    ],
                },
                'Realisator' : {
                    type: 'rich_text',
                    rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: real,
                        },
                    }
                    ],
            },
                'Seen': {
                    type: 'checkbox',
                    checkbox: status
                },
            }
        });
        console.log(response);
    } catch (error) {
        console.error(error.body);
    };
};

if ( process.argv.length === 5 ) {
    const title = process.argv[2];
    const real = process.argv[3];
    const status = process.argv[4] === 'true' || process.argv[4] === 'false';

    addToDatabase(databaseId, title, real, status);
} else {
    console.error('Veuillez fournir les 3 arguments nécessaires: title, real, status');
};
