const slides = document.querySelectorAll('.slide');

slides[0]

for (const slide of slides) {
    slide.addEventListener('click', () => {
        cleareActiveClasses()
        slide.classList.add('active')
    })
}

function cleareActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

function slidesPlug() {

}