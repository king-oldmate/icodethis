// Write your JavaScript code here
// I kind of rushed the modals, but I didn't want to waste any more time on completing this challenge. If I was more bothered, I would create an interactive gallery in the modal pop-up. 
const collections = document.querySelectorAll('.collection');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    const currentlyOpen = document.querySelector('.open-modal');
    const images = currentlyOpen.querySelectorAll('img');
    images.forEach(image => {
        image.classList.toggle('hidden')
    })
    closeBtn.classList.add('hidden');
    currentlyOpen.classList.remove('open-modal');
}

collections.forEach(collection => collection.addEventListener('click', openModal));

function openModal() {
    closeBtn.classList.remove('hidden');
    this.classList.add('open-modal');
    const images = this.querySelectorAll('img');
    images.forEach(image => {
        image.classList.toggle('hidden')
    })
}