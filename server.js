const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;
const FILE = path.join(__dirname, 'data', 'task.json');

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

/**
 * Endpoint per la lettura e l'invio dl file JSON
 * @param {string} '/read' - Percorso dell'endpoint
 * @param {function} callback - Funzione di callback che legge il file JSON e lo invia al client
 */
app.get('/read', (req, res) => {
    fs.readFile(FILE, "utf8", (err, data) => {
        if(err){
            console.error("Errore nella lettura del file", err);
            return res.status(500).json({error: 'Errore nella lettura del file'});
        }
        try{
            const tasks = JSON.parse(data);
            res.json(tasks);
        }catch(parseError){
            console.error("Errore nel parsing del file", parseError);
            res.status(500).json({error: 'Errore nel parsing del file'});
        }
    });
});

/**
 * Avvio del server
 * @param {number} PORT - Porta sulla quale il server deve ascoltare
 * @param {function} callback - Funzione di callback che conferma l'avvio del server
 */
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});