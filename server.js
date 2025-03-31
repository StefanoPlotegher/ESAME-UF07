const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Avvio del server
 * @param {number} PORT - Porta sulla quale il server deve ascoltare
 * @param {function} callback - Funzione di callback che conferma l'avvio del server
 */
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});