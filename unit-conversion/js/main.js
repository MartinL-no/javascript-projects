let input = document.getElementById("input").innerText

let lengthText = document.getElementById("length")
let volumeText = document.getElementById("volume")
let massText = document.getElementById("mass")

// let poundsToKilograms = input * 0.453592.toFixed(3)
// let kilogramsToPounds = input * 2.20462.toFixed(3)

function printLength() {
    let feetCalc = input * 3.28084
    let metersCalc = input * 0.3048
    lengthText.innerText = input + " meters = " + feetCalc.toFixed(3) + " feet | " + input + " feet = " + metersCalc.toFixed(3) + " meters"
}

function printVolume() {
    let litersCalc = input * 3.78541
    let gallonsCalc = input * 0.264172
    volumeText.innerText = input + " liters = " + gallonsCalc.toFixed(3) + " gallons | " + input + " gallons = " + litersCalc.toFixed(3) + " liters"
}

function printMass() {
    let kilogramsCalc = input * 0.453592
    let poundsCalc = input * 2.20462
    massText.innerText = input + " kilos = " + poundsCalc.toFixed(3) + " pounds | " + input + " pounds = " + kilogramsCalc.toFixed(3) + " kilos"
}

printLength()
printVolume()
printMass()