// Write your JavaScript code here
let currentAlbum = 0;
const albumWidth = 344;
const albums = document.querySelectorAll('.album')
const totalAlbums = albums.length - 1;
const prevButton = document.querySelector('.prev-album');
const nextButton = document.querySelector('.next-album');

const albumDeets = document.querySelector('.album-details');
albumDeets.innerText = document.querySelector(`.album-${currentAlbum}`).dataset.name;

const galleryContainer = document.querySelector('.gallery');
let currentScrolling = false;

galleryContainer.addEventListener('scroll', () => currentScrolling = true);

galleryContainer.addEventListener('scrollend', () => currentScrolling = false);

prevButton.addEventListener('click', () => {
    if (currentAlbum > 0 && !currentScrolling) {
        currentAlbum -= 1;
        const newName = document.querySelector(`.album-${currentAlbum}`).dataset.name;
        albumDeets.innerText = newName;
        galleryContainer.scrollLeft -= albumWidth;
    }
})

nextButton.addEventListener('click', () => {
    if (currentAlbum < totalAlbums && !currentScrolling) {
        currentAlbum += 1;
        const newName = document.querySelector(`.album-${currentAlbum}`).dataset.name;
        albumDeets.innerText = newName;
        galleryContainer.scrollLeft += albumWidth;
    }
})