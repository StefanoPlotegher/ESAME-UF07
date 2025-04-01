document.addEventListener('DOMContentLoaded', () =>{
    //creazione oggetto sezioni per accedere alle card delle tre sezioni
    const sezioni = {
        daFare: document.querySelector('#daFare .cards'),
        inCorso: document.querySelector('#inCorso .cards'),
        completate: document.querySelector('#completate .cards')
    }

    let tasks = [];

    /**
     * funzione per caricare le task dal file json tramite il server
     */
    async function caricaTask(){
        try{
            const res = await fetch('/read');
            if (!res.ok){
                throw new Error('Errore nel caricamento dal server');
            }
            tasks = await res.json();
            console.log(tasks);
            creaCards();
        }catch(err){
            console.error(err.message);
        }
    }

    /**
     * funzione per creare le card delle task e filtrarle in base al titolo
     * @param {string} filtro - stringa per filtrare le task in base al titolo
     * 
     */
    function creaCards(filtro= ''){
        Object.values(sezioni).forEach(sezione => sezione.innerHTML = '');

        tasks.filter(task=>task.titolo.toLowerCase().includes(filtro))
            .forEach(task =>{
                const card = document.createElement('div');
                data = new Date(task.data).toLocaleDateString();//conversione della data nel formato DD/MM/YYYY
                card.className = `card ${task.priorita}`;
                card.innerHTML = `
                    <h3>${task.titolo}</h3>
                    <p>Scadenza: ${data}</p>
                    <p>Descrizione: ${task.desc}</p>
                `;
                sezioni[task.stato].appendChild(card);
            });
        };

    caricaTask();
});