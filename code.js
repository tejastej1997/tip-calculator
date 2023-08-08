
let custombtn = document.getElementById('custom-btn')
let custominput = document.getElementById('custom-input')
let reset = document.getElementById('reset')

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
