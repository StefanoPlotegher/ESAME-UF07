document.addEventListener('DOMContentLoaded', () =>{
    //creazione oggetto sezioni per accedere alle card delle tre sezioni
    const sezioni = {
        daFare: document.querySelector('#daFare .cards'),
        inCorso: document.querySelector('#inCorso .cards'),
        completate: document.querySelector('#completate .cards')
    }
    const dashboard = document.getElementById('dashboard');
    const form = document.getElementById('nuovaTask');

    let tasks = [];

    /**
     * funzione per caricare le task dal file json tramite il server
     */
    async function caricaTask(){
        try{
            const res = await fetch('/tasks');
            if (!res.ok){
                throw new Error('Errore nel caricamento dal server');
            }
            tasks = await res.json();
            console.log(tasks);
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

    /**
     * funzione per salvare la task sul server
     * @param {object} task - nuova task da salvare 
     */
    async function salvaTask(task){
        try {
            await fetch('/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });
        }catch(err){
            console.error("Errore nel salvataggio della trask", err.message);
        }
    }

    /**
     * Evento per la creazione della nuova task
     * @param {Event} e - evento di submit
     * 
     */
    if (form){
        form.addEventListener('submit', (e) =>{
            e.preventDefault();

            //recupero i valori dei campi del form
            const titolo = document.getElementById('titolo')?.value.trim();
            const data = document.getElementById('data')?.value;
            const desc = document.getElementById('desc')?.value.trim();
            const priorita = document.getElementById('priorita')?.value;
            const stato = 'daFare';

            //controllo campi obbligatori
            if (!titolo || !data || !desc || !priorita){
                console.error('Tutti i campi sono obbligatori');
                return;
            }

            const newTask = {titolo, data, desc, priorita, stato};

            //aggiungo la nuova task
            tasks.push(newTask);
            salvaTask(newTask);
            form.reset();

        })
    }

    //carico le task
    caricaTask()
        .then(() => {
            //creo le card solo se esiste lo spazio adibito
            if (dashboard){
                creaCards();
            }
        })
        .catch(error => console.error("Errore nel caricamento delle task:", error.message));

});