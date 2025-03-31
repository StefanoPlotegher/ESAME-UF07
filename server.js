const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname,'public')));

/**
 * Avvio del server
 * @param {number} PORT - Porta sulla quale il server deve ascoltare
 * @param {function} callback - Funzione di callback che conferma l'avvio del server
 */
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});