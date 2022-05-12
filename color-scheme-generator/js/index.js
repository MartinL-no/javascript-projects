let colorArray = []
const colorCollector = document.getElementById("color-collector")

colorCollector.addEventListener("submit", function(event) {
    event.preventDefault()
    const colorPick = event.target.colorpicker.value.substr(1) 
    const schemePick = event.target.schemepicker.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPick}&mode=${schemePick}`)
        .then(resolve => resolve.json())
        .then( function(colorScheme) {
            colorArray = []
            for (color of colorScheme.colors) {
                 colorArray.push(color.hex.value)
                 }
            renderHex()
            renderColor()
            })
})

fetch("https://www.thecolorapi.com/scheme?hex=116f50",)
    .then(resolve => resolve.json())
    .then( function(colorScheme) {
        for (color of colorScheme.colors) {
            colorArray.push(color.hex.value)
            }
        renderHex()
        renderColor()
        })

function renderHex() {
    const ul = document.getElementById("hex-ul")
    ul.innerHTML = ""
    for (let color of colorArray) {
        let ul = document.getElementById("hex-ul")
        console.log(ul)
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(color))
        ul.appendChild(li)        
        }
    }

function renderColor() {
    for (const [i, value] of colorArray.entries()) {
        const colorPatch = document.getElementById(`color-${i}`)
        colorPatch.style.backgroundColor = value
        }
    }