const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const calculateEl = document.getElementById("calculate");
const totalEl = document.getElementById("total");

calculateEl.addEventListener("click",()=>{
    const bill = Number(billEl.value);
    const tip = Number(tipEl.value);

    const total = bill + (bill * tip / 100);
    totalEl.innerText = total ;
});