# Task Manager

## Struttura del Progetto

```
/Task Manager
├── /data
│   └── task.json
├── /public
│   ├── index.html
│   ├── /assets
│       └── style.css
│   ├── /src
│       └── script.js
│   ├── task-list-svgrepo-com.svg
├── server.js
├── README.md
```

## Descrizione
Un'applicazione web per la gestione delle attività, con funzionalità di aggiunta, modifica e rimozione delle task.
Le task sono in oltre suddivise in tre categorie "Da fare", "In corso", "completate".

## Tecnologie Utilizzate
- HTML
- CSS
- JavaScript
- Express
    - La scelta di fare un server con Express mi consente di salvare le task su un file JSON per poterle vedere in futuro anche chiudendo il browser. Vengono implementati due endpoint, uno per ricevere le informazioni sulle task e uno per modificare il file JSON