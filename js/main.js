'use strict';

// ---------- FUNCTIONS ----------
function createBox(boxTextContent) {
    const boxElement = document.createElement('div');
    boxElement.classList.add('box');

    const boxSpanElement = document.createElement('span');
    boxSpanElement.innerHTML = boxTextContent

    boxElement.append(boxSpanElement);

    return boxElement
}

// -------------------------------

// Riferimenti HTML
const containerElement = document.querySelector('.container');
const playBtn = document.getElementById('play-btn');

// Livello di default
let level = "easy";