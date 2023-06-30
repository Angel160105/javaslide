'use strict';

const images = [
    { 'id': '1', 'url':'./img/palmeiras-logo-4.png' },
    { 'id': '2', 'url':'./img/CHRONO.JPG.jpg' },
    { 'id': '3', 'url':'./img/inuyasha.jpg' },
    { 'id': '4', 'url':'./img/ippo.png' },
    { 'id': '5', 'url':'./img/tenchi.jpg' },
    { 'id': '6', 'url':'./img/transferir.jfif' },
    { 'id': '7', 'url':'./img/transferir1.jfif' },
    { 'id': '8', 'url':'./img/yuyuhakusho.jpg' },
    { 'id': '9', 'url':'./img/naruto.jpg' }, 
    { 'id': '10', 'url':'./img/saski.jpg' }, 
    { 'id': '11', 'url':'./img/anime11.jpg' },
    { 'id': '12', 'url':'./img/anime12.jpg' }, 
    { 'id': '13', 'url':'./img/anime13.jpg' }, 
    { 'id': '14', 'url':'./img/anime14.jpg' }, 
    { 'id': '15', 'url':'./img/anime15.png' }, 
    { 'id': '16', 'url':'./img/anime16.png' }, 
    { 'id': '17', 'url':'./img/anime17.png' }, 
    { 'id': '18', 'url':'./img/anime18.jpg' }, 
    { 'id': '19', 'url':'./img/anime19.png' }, 
    { 'id': '20', 'url':'./img/anime20.jpg' }, 
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);