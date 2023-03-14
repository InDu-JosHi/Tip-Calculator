let amount = document.querySelector(".amount");
let guests = document.querySelector(".guest");
let quality = document.querySelector("#quality");
let tipAmount = document.querySelector("#tip-amount");
let cal = document.querySelector(".calculate");

calculate = ()=>{
    let tip = ((amount.value * quality.value)/ (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';
     if (tip === 'NaN'){
        tipAmount.innerHTML = "Tip $0 each";
        showTipAmount();
     }
     else{
        tipAmount.innerHTML = "Tip $" + tip + " each";
        showTipAmount();
     }
}
cal.addEventListener("click",()=>{
    calculate();
})
showTipAmount = ()=>{
    let x = tipAmount;
    x.className= 'show';
    setTimeout(function(){
        x.className = x.className.replace('show','')},5000);
}