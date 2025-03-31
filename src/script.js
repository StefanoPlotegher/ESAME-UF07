document.addEventListener('DOMContentLoaded', () =>{
    const dashboard = document.getElementById('dashboard');
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
        }catch(err){
            console.error(error.message);
        }
    }

    loadTasks();
});