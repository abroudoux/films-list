npm run get

cat notion-export.json | jq '.[] | select(.properties.Seen.checkbox == false) | "\(.properties.Name.title[0].plain_text) - \(.properties.Realisator.rich_text[0].plain_text)"' > films.txt

npm run search
