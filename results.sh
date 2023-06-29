npm run get

# cat notion-export.json | jq -r '.[] | select(.properties.Seen.checkbox == false) | "\(.properties.Name.title[0].plain_text) - \(.properties.Realisator.rich_text[0].plain_text)"'
jq -r '.[] | select(.properties.Seen.checkbox == false) | "\(.properties.Name.title[0].plain_text) - \(.properties.Realisator.rich_text[0].plain_text)"' > films.txt
# mapfile -t films < films.txt

npm run search


