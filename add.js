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


addToDatabase(databaseId, 'Oppenheimer', 'Christopher Nolan', true);
