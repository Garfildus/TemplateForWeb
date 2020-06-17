//count = количество искажений
//bg = div в котором будут искажения


let bg = document.querySelector('.container')
let count = 20
let frameRate = 500

//Создание divов для искажения
for(let i = 0; i <count;i++){
    let glitchBox = document.createElement('div')
    glitchBox.className = 'box'
    bg.appendChild(glitchBox)
}

//рендер искажений
setInterval(()=>{
    let glitch = document.querySelectorAll('.box')
    for(let i = 0; i <glitch.length;i++){
        glitch[i].style.left = Math.floor(Math.random()*100) +'vw'
        glitch[i].style.top = Math.floor(Math.random()*100) +'vh'
        glitch[i].style.width = Math.floor(Math.random()*400) +'px'
        glitch[i].style.height = Math.floor(Math.random()*100) +'px'
        glitch[i].style.backgroundPosition = Math.floor(Math.random()*50) +'px'
    }
},frameRate)