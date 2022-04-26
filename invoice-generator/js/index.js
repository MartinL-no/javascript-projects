let taskArr = []
let totalArr = []
let total = 0

const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")

const taskUl = document.getElementById("task-ul")
const totalUl = document.getElementById("total-ul")
const totalAmount = document.getElementById("total-amount")
const sendInvoice = document.getElementById("send-invoice")

washCar.addEventListener("click", function() {
    taskArr.push("Wash Car")
    totalArr.push("10")
    total += 10
    renderTasks()
})

mowLawn.addEventListener("click", function() {
    taskArr.push("Mow Lawn")
    totalArr.push("20")
    total += 20
    renderTasks()
})

pullWeeds.addEventListener("click", function() {
    taskArr.push("Pull Weeds")
    totalArr.push("30")
    total += 30
    renderTasks()
})

function renderTasks() {
    taskUl.innerHTML = ""
    totalUl.textContent = ""
    for (let i = 0; i < taskArr.length; i++) {
        taskUl.innerHTML += `<li>${taskArr[i]}</li>`
        totalUl.innerHTML += `<li>$${totalArr[i]}</li>`
    }
    renderTotal()
}

function renderTotal() {
    if (total) {
    totalAmount.textContent = "$" + total
    } else {
        totalAmount.textContent = ""
    }
}

sendInvoice.addEventListener("click", function() {
    taskArr = []
    totalArr = []
    total = 0
    renderTasks()
})