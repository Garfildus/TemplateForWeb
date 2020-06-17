//https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
//https://developer.mozilla.org/ru/docs/Web/API/Element/getBoundingClientRect

const section = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')
const gradients = [
    'linear-gradient(to right top, #f46b45,#eea849)',
    'linear-gradient(to right top, #005c97,#363795)',
    'linear-gradient(to right top, #e53935,#e35d5d)'
]

const option = {
    threshold:0.7
}

function navCheck(entrise) {
    entrise.forEach(entry=>{
        const className = entry.target.className
        const activeAnchor = document.querySelector(`[data-page=${className}]`)
        const gradientIndex = entry.target.getAttribute('data-index')
        const coords = activeAnchor.getBoundingClientRect()
        const direction = {
            height: coords.height,
            width:coords.width,
            top: coords.top,
            left:coords.left
        }

        if(entry.isIntersecting){
            bubble.style.setProperty('height', `${direction.height}px`)
            bubble.style.setProperty('width', `${direction.width}px`)
            bubble.style.setProperty('top', `${direction.top}px`)
            bubble.style.setProperty('left', `${direction.left}px`)
            bubble.style.background = gradients[gradientIndex]
            console.log(gradientIndex)
        }
    })
}


let observer = new IntersectionObserver(navCheck, option)

section.forEach(section =>{
    observer.observe(section)
})