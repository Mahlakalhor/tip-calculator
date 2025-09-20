const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const calculateEl = document.getElementById("calculate");
const totalEl = document.getElementById("total");

calculateEl.addEventListener("click",()=>{
    const sum = Number(billEl.value) + Number(tipEl.value);
    totalEl.innerText= sum ;
})