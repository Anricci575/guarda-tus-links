const express = require('express');
const path = require('path');
const storage = require('./storage');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.get('/links', (req, res) => {
    const links = storage.getLinks();
    res.json(links);
});

app.post('/links', (req, res) => {
    const { url, description } = req.body;
    if (!url || !description) {
        return res.status(400).send('URL y descripción son requeridas');
    }
    storage.addLink({ url, description });
    res.status(200).send('URL guardada');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});