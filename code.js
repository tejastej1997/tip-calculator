
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

let tipvalue;

let tipammount = document.getElementById('tip-ammount')

let input = document.querySelectorAll('input')

custombtn.addEventListener('click', () => {
    custominput.classList.remove('hide')
    selectedtip[0].classList.add('hide')

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
        // console.log(btn.value);
    })

}

custominput.addEventListener('keyup', () => {
    selectedtip[0].classList.remove('hide')
    tipammount.innerHTML = custominput.value + "%";


})

enterbutton.addEventListener('click', () => {

    if (billammount.value == '' || billammount.value == undefined || custominput.value == "" || custominput.value == undefined ||
        peopleinput.value == " " || peopleinput.value == undefined
    ) {
        billinput.classList.remove('hide')
        peopleinput.classList.remove('hide')
        peopleinput.innerHTML = 'Cannot be empty'
        billinput.innerHTML = 'Bill ammount cannot be empty'
        perperson.innerHTML = "$0.00"

    }

    else if (billammount.value == 0 || peopleinput.value == 0) {
        billinput.classList.remove('hide')
        peopleinput.classList.remove('hide')
        billinput.innerHTML = 'Bill ammount cannot be Zero'
        peopleinput.innerHTML = 'Cannot be Zero'
    }

    else if (custombtn.click == true && custominput.value == "") {

        tipinput.innerHTML = 'Cannot be Empty'
    }

    else if (custombtn.click == true && custominput.value == 0) {

        tipinput.innerHTML = 'Cannot be Zero'

    }

    else {
        billinput.classList.add('hide')
        perperson.innerHTML = (Number(billammount.value) * Number(tipvalue)) / 100;

    }






})


