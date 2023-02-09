const btn = document.getElementById("btn")
const input = document.getElementById("num")

const result1 = document.getElementById("result-l")
const result2 = document.getElementById("result-2")
const result3 = document.getElementById("result-3")


const meterToFeet = 3.280
const literToGallon = 0.264
const kiloToPounds = 2.205

btn.addEventListener("click", function() {
    let baseValue = input.value

    result1.textContent = `${baseValue} Meter = ${baseValue * meterToFeet} Feet`

    result2.textContent = `${baseValue} Liters = ${baseValue * literToGallon} Gallon`

    result3.textContent = `${baseValue} Kilo = ${baseValue * kiloToPounds} Pounds`

    input.value = ""
})


