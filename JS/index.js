const aboutButton = document.querySelector('.about-btn');
const workButton = document.querySelector('.work-btn');
const aboutContent = document.querySelector('.main-content');
const workContent = document.querySelector('.work-content');
const odyssey = document.querySelector('.odyssey');
const wbccares = document.querySelector('.wbccares');

aboutButton.addEventListener('click', () =>{
    aboutContent.style.display = "flex";
    workContent.style.display = "none";

    aboutButton.classList.add("selected-nav-i");
    workButton.classList.remove("selected-nav-i");
})

workButton.addEventListener('click', () =>{
    aboutContent.style.display = "none";
    workContent.style.display = "flex";

    aboutButton.classList.remove("selected-nav-i");
    workButton.classList.add("selected-nav-i");
})

odyssey.addEventListener('click', () => {
    location.replace("odyssey.html")
})

wbccares.addEventListener('click', () => {
    location.replace("wbccares.html")
})



