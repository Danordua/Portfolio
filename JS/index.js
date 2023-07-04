const aboutButton = document.querySelector('.about-btn');
const workButton = document.querySelector('.work-btn');
const aboutContent = document.querySelector('.main-content');
const workContent = document.querySelector('.work-content');
const odyssey = document.querySelector('.odyssey');
const wbccares = document.querySelector('.wbccares');
const wbcRegister = document.querySelector('.wbc-register');

odyssey.addEventListener('click', () => {
    location.replace("odyssey.html")
})

wbccares.addEventListener('click', () => {
    location.replace("wbccares.html")
})

wbcRegister.addEventListener('click', () => {
    location.replace("work-in-progress.html")
})



