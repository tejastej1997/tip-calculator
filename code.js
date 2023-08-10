
let custombtn = document.getElementById('custom-btn')
let custominput = document.getElementById('custom-input')
let reset = document.getElementById('reset')
let tippercentage = document.querySelectorAll('.tipcalculator__options-opt')
let selectedtip = document.getElementsByClassName('tipcalculator__selected-tip')
let enterbutton = document.getElementById('enter-button')
let billinput = document.getElementById('bill-input')
let billammount = document.getElementById('bill-ammount')

console.log(tippercentage.length);

let tipammount = document.getElementById('tip-ammount')

let input = document.querySelectorAll('input')

custombtn.addEventListener('click',()=>{
    custominput.classList.remove('hide')
    selectedtip[0].classList.add('hide')

})

reset.addEventListener('click',()=>{

    for(let inputs of input){
        inputs.value='';
    }
    console.log('reset triggered');
})

for (let btn =0; btn<=tippercentage.length-2;btn++ ) {

    tippercentage[btn].addEventListener('click',()=>{
        tipammount.innerHTML = tippercentage[btn].value;
        selectedtip[0].classList.remove('hide')
        // console.log(btn.value);
    })
    
}

custominput.addEventListener('keyup',()=>{
    selectedtip[0].classList.remove('hide')
    tipammount.innerHTML = custominput.value + "%";


})

enterbutton.addEventListener('click',()=>{

    if (billammount.value== '' || billammount.value== undefined) {
        billinput.classList.remove('hide')
       
    }
    else{
        billinput.classList.add('hide')
    }

    

    
})


