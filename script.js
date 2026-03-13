let pages=document.querySelectorAll(".page")

let current=0

pages[current].classList.add("active")

function nextPage(){

pages[current].classList.remove("active")

current++

if(current>=pages.length) current=pages.length-1

pages[current].classList.add("active")

}

function prevPage(){

pages[current].classList.remove("active")

current--

if(current<0) current=0

pages[current].classList.add("active")

}

function toggleTheme(){

document.body.classList.toggle("dark")

}

function toggleMusic(){

let music=document.getElementById("bgMusic")

if(music.paused){

music.play()

}

else{

music.pause()

}

}