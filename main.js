let firstSlide = document.getElementById("slide-1")
let secondSlide = document.getElementById("slide-2")

let prevSlide1 = document.getElementById("icon-prev1")
let nextSlide1 = document.getElementById("icon-next1")

let prevSlide2 = document.getElementById("icon-prev2")
let nextSlide2 = document.getElementById("icon-next2")

nextSlide1.addEventListener('click', () =>{
    firstSlide.style.display = "none"
    secondSlide.style.display = "flex"
})

prevSlide1.addEventListener('click', () =>{
    firstSlide.style.display = "none"
    secondSlide.style.display = "flex"
})

nextSlide2.addEventListener('click', () =>{
    firstSlide.style.display = "flex"
    secondSlide.style.display = "none"
    firstSlide.style.animation = "slide-in 2s"
})

prevSlide2.addEventListener('click', () =>{
    firstSlide.style.display = "flex"
    secondSlide.style.display = "none"
    firstSlide.style.animation = "slide-in 2s"
})

