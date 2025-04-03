document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('taskId');
    const form = document.getElementById('form');

    //recupero i dati delle task
    let tasks = [];
    async function loadTasks() {
        try {
            const response = await fetch("/tasks");
            if (!response.ok) {
                throw new Error(`Errore nel caricamento delle task: ${response.statusText}`);
            }
            tasks = await response.json();
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


});