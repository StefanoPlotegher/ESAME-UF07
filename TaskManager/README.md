# Task Manager

Un'applicazione web per la gestione delle attività, con funzionalità di aggiunta, modifica e rimozione delle task.
Le task sono in oltre suddivise in tre categorie "Da fare", "In corso", "completate".

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
│       └── task.js
│   ├── /pages
│       └── nuovaTask.html
│       └── visualizzaTask.html
│   ├── task-list-svgrepo-com.svg
├── server.js
├── README.md
```

## Descrizione
Le Task sono visualizzate in card con un bordo che indentifica la priorità di esse

Sono divise in 3 sezioni rappresentanti il loro stato

Per aggiungere una task si apre la sezione apposita tramite la navabar e si inseriscono i dati desiderati

Per modificare i dati di una specifica task si clicca sulla card desiderata e si modificano i campi, è possibile non modificare nulla

## Tecnologie Utilizzate
- HTML
- CSS
- JavaScript
- Express
    - La scelta di fare un server con Express mi consente di salvare le task su un file JSON per poterle vedere in futuro anche chiudendo il browser. Vengono implementati tre endpoint, uno per ricevere le informazioni sulle task e uno per aggiungere una nuova task il file JSON e uno per le task modificate

## Utilizzo

Per utilizzare il task manager inserire i seguenti comandi da terminale dopo aver installato node:
- "npm install express"
- "npm start"