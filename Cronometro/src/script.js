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
    tempo.textContent = tTrascorso;
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