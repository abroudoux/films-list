import { Client } from "@notionhq/client";
import { writeFileSync } from "fs";
import { join } from "path";

require("dotenv").config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function getBlocks(block_id) { 

    let { results: children } = await notion.blocks.children.list({ block_id });

    for ( const child of children ) {
        const grandChildren = await getBlocks(child.id);
        child.children = grandChildren; 
    }
    return children;
};

async function importPages() {

    let { results: pages } = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    });

    for ( const page of pages ) {
        const blocks = await getBlocks(page.id);
        page.children = blocks ;
    };

    const outputFile = join(__dirname, "notion-export.json");
    writeFileSync(outputFile, JSON.stringify(pages, null, 2));
    console.log('Wrote ${pages.length} pages to ${pages.output}');
};

importPages();
