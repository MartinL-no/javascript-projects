let taskArr = []
let totalArr = []
let total = 0

let carCounter = 0
let lawnCounter = 0
let weedsCounter = 0

const carCost = 10
const lawnCost = 20
const weedsCost = 30

const carDesc = "Wash Car"
const lawnDesc = "Mow Lawn"
const weedsDesc = "Pull Weeds"

const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")
const sendInvoice = document.getElementById("send-invoice")

const taskUl = document.getElementById("task-ul")
const totalUl = document.getElementById("total-ul")
const totalAmount = document.getElementById("total-amount")

washCar.addEventListener("click", function() {
    addTask(carCounter, carCost, carDesc)
    carCounter = "1"
})

mowLawn.addEventListener("click", function() {
    addTask(lawnCounter, lawnCost, lawnDesc)
    lawnCounter = "1"
})

pullWeeds.addEventListener("click", function() {
    addTask(weedsCounter, weedsCost, weedsDesc)
    weedsCounter = "1"
})

function addTask(counter, cost, desc) {
    if (counter) {
    } else {
        taskArr.push(desc)
        totalArr.push(cost)
        total += cost
        renderTasks()
    }
}

function delete10() {
    deleteTask(carCost, carDesc)
    carCounter = ""
}

function delete20() {
    deleteTask(lawnCost, lawnDesc)
    lawnCounter = ""
}

function delete30() {
    deleteTask(weedsCost, weedsDesc)
    weedsCounter = ""
}

function deleteTask(cost, taskName) {
    for (let i = 0; i < totalArr.length; i++){                     
        if (totalArr[i] === cost) { 
            totalArr.splice(i, 1)
            i--
            total -= cost
        }
        for(let i = 0; i < taskArr.length; i++){                     
            if (taskArr[i] === taskName) { 
                taskArr.splice(i, 1)
                i--
            }
        }
    }
    renderTasks()
    }

function renderTasks() {
    taskUl.innerHTML = ""
    totalUl.innerHTML = ""
    for (let i = 0; i < taskArr.length; i++) {
        taskUl.innerHTML += `<li id="${totalArr[i]}">${taskArr[i]}<button onclick="delete${totalArr[i]}()">Delete</button></li>`
        totalUl.innerHTML += `<li id="${totalArr[i]}">$${totalArr[i]}</li>`
    }
    renderTotal()
}

function renderTotal() {
    if (total) {
    totalAmount.textContent = "$" + total
    } else {
        totalAmount.textContent = "$" + total
        carCounter = 0
        lawnCounter = 0
        weedsCounter = 0
    }
}

sendInvoice.addEventListener("click", function() {
    taskArr = []
    totalArr = []
    total = 0
    renderTasks()
})