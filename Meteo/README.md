# Meteo App

Un'applicazione web semplice e moderna per visualizzare il meteo attuale di una posizione specifica, inserendo latitudine e longitudine o usando la propria posizione tramite geolocalizzazione.

## Funzionalità

- **Visualizzazione meteo attuale**: temperatura, umidità, precipitazioni, pioggia, copertura nuvolosa, vento e codice meteo.
- **Inserimento manuale coordinate**: inserisci latitudine e longitudine per ottenere il meteo di qualsiasi luogo.
- **Geolocalizzazione**: ottieni automaticamente le tue coordinate e visualizza il meteo della tua posizione.
- **Interfaccia responsive**: design moderno, adattabile anche su dispositivi mobili.
- **Icone meteo**: visualizzazione delle condizioni meteo tramite emoji intuitive in base al weather code (vedi sotto)

## Struttura del progetto

```
/Meteo
├── index.html
├── assets/
│   └── style.css
├── scripts/
│   └── script.js
└── README.md
```


## Tecnologie utilizzate

- **HTML5** per la struttura della pagina.
- **CSS3** per uno stile moderno e responsive.
- **JavaScript** per la logica, la chiamata all'API meteo e la gestione della geolocalizzazione.
- **[Open-Meteo API](https://open-meteo.com/)** per i dati meteo.


## WEATHER-CODE

L'API utilizza un codice numerico per identificare il meteo con questi significati:

|---------------|--------------------------------------------------------|
| Codice        | Descrizione                                            |
|---------------|--------------------------------------------------------|
| 0             | Sereno                                                 |
| 1, 2, 3       | Prevalentemente sereno, parzialmente nuvoloso, coperto |
| 45, 48        | Nebbia e nebbia con brina                              |
| 51, 53, 55    | Pioviggine: intensità leggera, moderata, forte         |
| 56, 57        | Pioviggine gelata: intensità leggera e forte           |
| 61, 63, 65    | Pioggia: intensità debole, moderata, forte             |
| 66, 67        | Pioggia gelata: intensità leggera e forte              |
| 71, 73, 75    | Neve: intensità debole, moderata, forte                |
| 77            | Granuli di neve                                        |
| 80, 81, 82    | Rovesci di pioggia: deboli, moderati, violenti         |
| 85, 86        | Rovesci di neve: deboli e forti                        |
| 95            | Temporale: debole o moderato                           |
| 96, 99        | Temporale con grandine: debole e forte                 |
|---------------|--------------------------------------------------------|