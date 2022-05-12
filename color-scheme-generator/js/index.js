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
    for (const [i, value] of colorArray.entries()) {
        const printHex = document.getElementById(`hex-${i}`)
        printHex.textContent = value
        }
    }

function renderColor() {
    for (const [i, value] of colorArray.entries()) {
        const colorPatch = document.getElementById(`color-${i}`)
        colorPatch.style.backgroundColor = value
        }
    }

document.querySelectorAll('.copy').forEach(item => {
    item.addEventListener('click', event => {
        event.target.classList.add('animate__animated', 'animate__heartBeat')
        event.target.addEventListener('animationend', () => {
            event.target.classList.remove('animate__animated', 'animate__heartBeat')
            navigator.clipboard.writeText(event.target.textContent)
            alert("Color Copied!")
        })
    })
  })