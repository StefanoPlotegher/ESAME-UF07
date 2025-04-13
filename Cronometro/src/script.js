let tInizio = 0;
let tTrascorso = 0;
let intervallo;

const tempo = document.getElementById("tempo");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

/**
 * Funzione per aggiornare il cronometro
 */
function aggiorna(){
    const now = Date.now();
    tTrascorso = now - tInizio;
    tempo.textContent = formattaTempo(tTrascorso);
}


/**
 * Event listener per vviare il cronometro
 * e aggiornarlo ogni 10 millisecondi
 * disabilta il pulsante start
 */
start.addEventListener("click", () =>{
    if (!intervallo){
        tInizio = Date.now() - tTrascorso;
        intervallo = setInterval(aggiorna, 10);
        start.disabled = true;
        reset.disabled = true;
        stop.disabled = false;
    }
});

/**
 * Funzione per formattare il cronometro in mm:ss:ms
 * @param {number} ms 
 * @returns {string}
 */
function formattaTempo(ms){
    const minuti = Math.floor(ms / 60000).toString().padStart(2, '0');
    const secondi = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
    const millisecondi = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');

    return `${minuti}:${secondi}:${millisecondi}`;
}