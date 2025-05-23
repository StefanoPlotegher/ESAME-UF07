const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const FILE = path.join(__dirname, 'data', 'task.json');

app.use(express.json());
app.use(express.static('public'));

/**
 * Endpoint per la lettura e l'invio dl file JSON
 * @param {string} '/tasks' - Percorso dell'endpoint
 * @param {function} callback - Funzione di callback che legge il file JSON e lo invia al client
 */
app.get('/tasks', (req, res) => {
    // Verifica se il file esiste
    fs.access(FILE, fs.constants.F_OK, (err) => {
        if (err) {
            console.error("File non trovato:", FILE);
            return res.status(404).json({ error: 'File non trovato' });
        }
        // Legge il file JSON
        fs.readFile(FILE, "utf8", (err, data) => {
            if (err) {
                console.error("Errore nella lettura del file", err);
                return res.status(500).send("Errore del Server");
            }
            try {
                const tasks = JSON.parse(data);
                res.json(tasks);
            } catch (parseError) {
                console.error("Errore nel parsing del file", parseError);
                res.status(500).send("Errore del Server");
            }
        });
    });
});

/**
 * Endpoint per la scrittura del file JSON
 * @param {string} '/tasks' - Percorso dell'endpoint
 * @param {function} callback - Funzione di callback che scrive il file JSON
 */
app.post('/tasks', (req, res) => {
    const task = req.body;

    //recuper il contenuto del file
    fs.readFile(FILE, "utf8", (err, data) => {
        if (err){
            console.error("Errore nella lettura del file", err);
            return res.status(500).json({err:"Errore del Server"});
        }

        //aggiunge la nuova task
        const tasks = JSON.parse(data);
        tasks.push(task);

        //Scrive sul file le task aggiornate
        fs.writeFile(FILE, JSON.stringify(tasks, null, 2), (err) =>{
            if(err){
                console.error("Errore nella scrittura del file", err.message);
                return res.status(500).json({err:"Errore del Server"});
            }

            res.status(201).json({err:"Task salvata con successo"});
        });
    });
});

app.post('/mod', (req, res) => {
    const tasks = req.body;
        //Scrive sul file le task aggiornate
        fs.writeFile(FILE, JSON.stringify(tasks, null, 2), (err) =>{
            if(err){
                console.error("Errore nella scrittura del file", err.message);
                return res.status(500).json({err:"Errore del Server"});
            }

            res.status(201).json({err:"Task salvata con successo"});
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