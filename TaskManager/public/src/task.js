document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('taskId');
    const form = document.getElementById('form');

    //recupero i dati delle task
    let tasks = [];
    async function caricaTask() {
        try {
            const response = await fetch("/tasks");
            if (!response.ok) {
                throw new Error(`Errore nel caricamento delle task: ${response.statusText}`);
            }
            tasks = await response.json();
            visualizzaTask();
        } catch (error) {
            console.error(error.message);
        }
    }

    /**
     * display dei dati della task
     *  
     */
    function visualizzaTask() {
        const task = tasks[id];
        if (!task) {
            console.error("Task non trovata!");
            return;
        }

        document.getElementById('titolo').value = task.titolo;
        document.getElementById('data').value = task.data;
        document.getElementById('desc').value = task.desc;
        document.getElementById('priorita').value = task.priorita;
        document.getElementById('stato').value = task.stato;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskMod = {
            titolo: document.getElementById('titolo').value.trim(),
            data: document.getElementById('data').value,
            desc: document.getElementById('desc').value.trim(),
            priorita: document.getElementById('priorita').value,
            stato: document.getElementById('stato').value,
        };

        tasks[id] = taskMod;

        salvaTask();
        window.location.href = "../index.html";
    });

    /**
     * funzione per salvare la lista modificata di task sul server
     */

    async function salvaTask() {
        try {
            await fetch('/mod', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(tasks)
            });
        } catch (err) {
            console.error("Errore nel salvataggio della task", err.message);
        }
    }

    caricaTask();
});