
let custombtn = document.getElementById('custom-btn')
let custominput = document.getElementById('custom-input')
let reset = document.getElementById('reset')
let tippercentage = document.querySelectorAll('.tipcalculator__options-opt')
let selectedtip = document.getElementsByClassName('tipcalculator__selected-tip')

console.log(selectedtip);

let tipammount = document.getElementById('tip-ammount')

let input = document.querySelectorAll('input')

custombtn.addEventListener('click',()=>{
    custominput.classList.remove('hide')
})

reset.addEventListener('click',()=>{

    for(let inputs of input){
        inputs.value='';
    }
    console.log('reset triggered');
})

for (const btn of tippercentage) {

    btn.addEventListener('click',()=>{
        tipammount.innerHTML = btn.value;
        selectedtip[0].classList.remove('hide')
        console.log(btn.value);
    })
    
}


