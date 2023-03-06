const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input")
const resultFootEl = document.querySelector(".foot")
const resultBicycleEl = document.querySelector(".bicycle")
const resultCarEl = document.querySelector(".car")
const resultPlaneEl = document.querySelector(".plane")
const ElBody = document.querySelector("body")
const ElModeBtn = document.querySelector("#ModeBtn")

ElModeBtn.addEventListener("click", event => {
    if(ElModeBtn.textContent = "Dark"){
        ElBody.classList.toggle("Light");
        ElBody.classList.remove("Dark");
        ElModeBtn.textContent = "Light";
    }else if(ElModeBtn.textContent = "Light"){
        ElBody.classList.toggle("Dark");
        ElBody.classList.remove("Light");    
        ElModeBtn.textContent = "Dark";
    }
})

formEl.addEventListener("submit", function(evt){
    evt.preventDefault();
    myFunction(inputEl.value);
})

let myFunction = function(value){
    const onFoot = value / 3.6 
    const byBicycle = value / 20.1
    const bycar = value / 70
    const byplane = value / 800
    
    resultFootEl.textContent = onFoot.toFixed(2) + " Soat"
    resultBicycleEl.textContent = byBicycle.toFixed(2)+ " Soat"
    resultCarEl.textContent = bycar.toFixed(2)+ " Soat"
    resultPlaneEl.textContent = byplane.toFixed(2)+ " Soat"
}