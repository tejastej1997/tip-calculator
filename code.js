
let custombtn = document.getElementById('custom-btn')
let custominput = document.getElementById('custom-input')
let reset = document.getElementById('reset')
let tippercentage = document.querySelectorAll('.tipcalculator__options-opt')
let selectedtip = document.getElementsByClassName('tipcalculator__selected-tip')
let enterbutton = document.getElementById('enter-button')
let billinput = document.getElementById('bill-input')
let billammount = document.getElementById('bill-ammount')
let perperson = document.getElementById('per-person')
let peopleinput = document.getElementById('people-input')
let numberofpeople = document.getElementById('number-of-people')
let tipinput = document.getElementById('tip-input')
let tipammount = document.getElementById('tip-ammount')
let input = document.querySelectorAll('input')




let tipvalue;

var boolean = false;

custombtn.addEventListener('click', () => {
    custominput.classList.remove('hide')
    selectedtip[0].classList.add('hide')
    boolean = true;
})



reset.addEventListener('click', () => {

    for (let inputs of input) {
        inputs.value = '';
    }

})

for (let btn = 0; btn <= tippercentage.length - 2; btn++) {

    tippercentage[btn].addEventListener('click', () => {
        tipvalue = tippercentage[btn].value;
        tipammount.innerHTML = tippercentage[btn].value + "%";
        selectedtip[0].classList.remove('hide')
    })

}

custominput.addEventListener('keyup', () => {
    selectedtip[0].classList.remove('hide')
    tipammount.innerHTML = custominput.value + "%";
})



enterbutton.addEventListener('click', () => {

  

    if (billammount.value == '' || billammount.value == undefined) {
        billinput.classList.remove('hide')
        billinput.innerHTML = 'Bill ammount cannot be empty'
        perperson.innerHTML = "$0.00"
       
    }
    else if (billammount.value == 0) {
        billinput.classList.remove('hide')
        billinput.innerHTML = 'Bill ammount cannot be Zero'
        peopleinput.innerHTML = 'Cannot be Zero'
    }
    else if (peopleinput.value == " " || peopleinput.value == undefined) {
        peopleinput.classList.remove('hide')
        peopleinput.innerHTML = 'Cannot be empty'
        
    }
    else if (custominput.value == " ") {
      
        alert('clicked')
        tipinput.innerHTML = 'Cannot be empty'
    }

    else {
        billinput.classList.add('hide')
        perperson.innerHTML = (Number(billammount.value) * Number(tipvalue)) / 100;

    }


})




