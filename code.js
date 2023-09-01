
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
let totalbill = document.getElementById('total-bill')
let percentageinput = document.getElementById('percentage-input')

let tipvalue;

var boolean = false;
var percentage = false;

custombtn.addEventListener('click', () => {
    custominput.classList.remove('hide')
    percentageinput.classList.add('hide')
    selectedtip[0].classList.add('hide')
    boolean = true;
})


reset.addEventListener('click', () => {
    selectedtip[0].classList.add('hide')
    percentageinput.classList.add('hide')
    perperson.innerHTML = "$0.00";
    totalbill.innerHTML = "$0.00";
    for (let inputs of input) {
        inputs.value = '';
    }
})

for (let btn = 0; btn <= tippercentage.length - 2; btn++) {
    tippercentage[btn].addEventListener('click', () => {
        tipvalue = tippercentage[btn].value;
        tipammount.innerHTML = tippercentage[btn].value + "%";
        selectedtip[0].classList.remove('hide')
        boolean = false;
        percentage= true;
        custominput.classList.add('hide')
        percentageinput.classList.add('hide')

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
    else if (percentage == false) {
        percentageinput.classList.remove('hide')
        billinput.classList.add('hide')

    }
    else if (numberofpeople.value == '' || numberofpeople.value == undefined) {
        peopleinput.classList.remove('hide')
        peopleinput.innerHTML = 'Cannot be empty'
     

    }
    else if (numberofpeople.value == 0) {
        billinput.classList.add('hide')
        peopleinput.classList.remove('hide')
        peopleinput.innerHTML = 'Cannot be Zero'

     

    }
    else if (boolean == true && custominput.value == '' || custominput.value == undefined) {
        tipinput.classList.remove('hide')
        tipinput.innerHTML = 'Cannot be Empty'
        // console.log('custom input');
    }
    else if (boolean == true && custominput.value == 0) {
        tipinput.classList.remove('hide')
        tipinput.innerHTML = 'Cannot be Zero'
        // console.log('custom input');
    }


    else {

        peopleinput.classList.add('hide')
        billinput.classList.add('hide')


        let perpersonammount;

        if (boolean != true) {
            perpersonammount = (Number(billammount.value) * Number(tipvalue)) / 100;
        }
        else {
            perpersonammount = (Number(billammount.value) * Number(custominput.value)) / 100;
        }

        perperson.innerHTML = perpersonammount.toFixed(2);
        totalbill.innerHTML = perpersonammount.toFixed(2) * numberofpeople.value;


    }


})







