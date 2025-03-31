document.addEventListener('DOMContentLoaded', () =>{
    const dashboard = document.getElementById('dashboard');
    //creazione oggetto sezioni per accedere alle card delle tre sezioni
    const sezioni = {
        daFare: document.querySelector('#daFare .cards'),
        inCorso: document.querySelector('#inCorso .cards'),
        completate: document.querySelector('#completate .cards')
    }

    let tasks = [];

    //Caricamento dlle task dal server
    async function caricaTask(){
        try{
            const res = await fetch('/tasks');
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