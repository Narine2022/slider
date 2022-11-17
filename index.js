const slides = document.querySelectorAll(".slide");
for (const slide of slides) {
    slide.addEventListener("click", () =>{
     clearActiveClasses()


        slide.classList.add("active")
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
}
const body=document.querySelector('body')
body.style.backgroundColor = 'black';

