// Show objects with property "Seen.checkbox == false"
cat notion-export.json | jq 'map(select(.properties.Seen.checkbox == false))'

// Show objects with property "Seen.checkbox == false", title and director only
cat notion-export.json | jq '.[] | select(.properties.Seen.checkbox == false) | {Title: .properties.Name.title[0].plain_text, Director: .properties.Realisator.rich_text[0].plain_text}'

// Show objects with property "Seen.checkbox == false", list style
cat notion-export.json | jq '.[] | select(.properties.Seen.checkbox == false) | "\(.properties.Name.title[0].plain_text) - \(.properties.Realisator.rich_text[0].plain_text)"'