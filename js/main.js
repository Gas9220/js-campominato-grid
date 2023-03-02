'use strict';

// ---------- FUNCTIONS ----------
// Funzione che permette di creare i box
function createBox(boxTextContent) {
    // Creo un div
    const boxElement = document.createElement('div');
    // Gli assegno la classe box
    boxElement.classList.add('box');

    // Creo uno span
    const boxSpanElement = document.createElement('span');
    // Inserisco dentro lo span l'argomento passato alla funzione
    boxSpanElement.innerHTML = boxTextContent

    // Aggingo lo span al div
    boxElement.append(boxSpanElement);

    // Ritorno il box
    return boxElement
}

// Funzione che permette di creare la griglia di box
function createGrid(boxNumber, container) {
    // Faccio un ciclo for in base a quanti box vogliamo creare
    for (let index = 1; index <= boxNumber; index++) {
        // Creo un box
        const box = createBox(index);
        // Lo appendo al container
        container.append(box);
    }
}

// Funzione che crea la griglia in base al livello
function performGameSettings(level, container) {
    // svuoto il container se prima era stato già riempito
    container.innerHTML = ""

    // Faccio uno switch sul livello
    switch (level) {
        case "easy": // Se il livello è easy
            createGrid(100, container); // Creo 100 box e li appendo al container
            break;
        default:
            break;
    }
}

// -------------------------------

// Riferimenti HTML
const containerElement = document.querySelector('.container');
const playBtn = document.getElementById('play-btn');

// Livello di default
let level = "easy";