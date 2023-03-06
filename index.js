const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputDate = document.getElementById("input-date")
const inputWeight = document.getElementById("input-weight")
const datesFromLocalStorage = JSON.parse(localStorage.getItem("myDates"))
const weightFromLocalStorage = JSON.parse(localStorage.getItem("myWeight"))
let tableEl = document.getElementById("table-el")
let rowCount = 0

let dates = []
let weight = []

if (datesFromLocalStorage && weightFromLocalStorage) {
    dates = datesFromLocalStorage
    weight = weightFromLocalStorage
    renderData(dates, weight)
}

saveBtn.addEventListener("click", function(){
    dates.push(inputDate.value)
    weight.push(inputWeight.value)
    inputDate.value = ""
    inputWeight.value = ""
    localStorage.setItem("myDates", JSON.stringify(dates))
    localStorage.setItem("myWeight", JSON.stringify(weight))
    renderData(dates,weight)
    rowCount += 1
})

deleteBtn.addEventListener("dblclick", function(){
    for (let i = rowCount; i > 0; i--) {
        tableEl.deleteRow(i)
    }
    rowCount = 0
    localStorage.clear()
    dates = []
    weight = []
    renderData(dates,weight)
})

function renderData(dates, weight){
    let tableRows = `
        <tr>
            <th id="table-head">DATE</th>
            <th id="table-head">WEIGHT</th>
        </tr>
    `
    for (let i = 0; i < dates.length; i++){
        tableRows += `
            <tr>
                <td>${dates[i]}</td>
                <td>${weight[i]} kg</td>
            </tr>
        `
    }
    tableEl.innerHTML = tableRows
}

