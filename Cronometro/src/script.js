let tInizio = 0;
let tTrascorso = 0;
let inCorso;
let giri = [];

const tempo = document.getElementById("tempo");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const giro = document.getElementById("giro");
const listaGiri = document.getElementById("listaGiri");

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
    if (!inCorso){
        tInizio = Date.now() - tTrascorso;
        inCorso = setInterval(aggiorna, 10);
        start.disabled = true;
        reset.disabled = true;
        stop.disabled = false;
        giro.disabled = false;
    }
});

/**
 * Event listener per fermare il cronometro
 */
stop.addEventListener("click", () =>{
    clearInterval(inCorso);
    inCorso = null;
    start.disabled = false;
    reset.disabled = false;
    stop.disabled = true;
    giro.disabled = true;
});

/**
 * Event listener per resettare il cronometro
 */
reset.addEventListener("click", () =>{
    tTrascorso = 0;
    tempo.textContent = "00:00:00";
    listaGiri.innerHTML = "";
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

/**
 * Funzione per registrre un giro e mostrarlo nella lista
 */
function registraGiro(){
    const nuovoGiro = giri.length<0 ? tTrascorso : tTrascorso - giri.reduce((a, b) => a + b, 0);
    giri.push(nuovoGiro);
    const li = document.createElement("li");
    li.textContent = `GIRO ${giri.length}: ${formattaTempo(nuovoGiro)}`;
    listaGiri.appendChild(li);
}

/**
 * Event listener per registrare un giro
 */
giro.addEventListener("click", () =>{
    registraGiro();
});