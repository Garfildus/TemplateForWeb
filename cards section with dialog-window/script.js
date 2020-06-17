const body = document.querySelector('body')

function myFunction(e) {
    let containerD = document.createElement('div')
    let dialogD = document.createElement('div')
    let imgD = document.createElement('img')
    let textD = document.createElement('div')
    containerD.classList.add('dialog-container')
    containerD.onclick = function() {closeDoverlay(event)}
    dialogD.classList.add('dialog')
    imgD.classList.add('dialog-img')
    imgD.src = `${e.composedPath()[1].children[0].src}`
    textD.classList.add('dialog-text')
    textD.innerText = 'asdasdasdasd asd as das dsa d sad as d'
    textD.innerHTML = `<h3>${e.target.children[0].innerText}</h3>
                       <p>${e.target.children[1].innerText}</p>
                       <p>Attribute1: Lorem ipsum dolor sit.</p>
                       <p>Attribute2: Lorem ipsum dolor sit.</p>
                       <p>Attribute3: Lorem ipsum dolor sit.</p>
                       <p>Attribute4: Lorem ipsum dolor sit.</p>
                       <button onclick="closeDbutton()">close</button>`
    body.append(containerD)
    containerD.append(dialogD)
    dialogD.append(imgD)
    dialogD.append(textD)
}

function closeDbutton() {
    const dlog = document.querySelector('.dialog-container')
    dlog.remove()
}

function closeDoverlay(e) {
    const dlog = document.querySelector('.dialog-container')
    if(e.target.classList.contains("dialog-container")){
        dlog.remove()
    }
}

// document.addEventListener('click',(e)=>{
//     if(e.target.classList.contains("dialog-container")){
//         console.log(e.target)
//     }
// })


/*

<div class="dialog-container">
        <div class="dialog">
            <img class='dialog-img' src="img/1.png" alt="">
            <div class="dialog-text">

                <h3>dialog-header</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ad distinctio earum
                    esse, fugiat minus nobis non officiis
                    optio sapiente? Repellendus.</p>
                <p>Attribute1: Lorem ipsum dolor sit.</p>
                <p>Attribute2: Lorem ipsum dolor sit.</p>
                <p>Attribute3: Lorem ipsum dolor sit.</p>
                <p>Attribute4: Lorem ipsum dolor sit.</p>

            </div>
        </div>
    </div>

*/