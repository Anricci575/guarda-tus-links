const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/links.json');

// Leer enlaces guardados
function getLinks() {
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    return [];
}

// Guardar un nuevo enlace
function addLink(link) {
    const links = getLinks();
    links.push(link);
    fs.writeFileSync(filePath, JSON.stringify(links, null, 2));
}

module.exports = { getLinks, addLink };