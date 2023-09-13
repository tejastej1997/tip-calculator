//Uso de "const" para definir variables de elementos seleccionados y cambiar a **camelCase** sus nombres

const customBtn = document.getElementById("custom-btn");
const customInput = document.getElementById("custom-input");
const reset = document.getElementById("reset");

//Change the selector of all buttons with tipcalculator__options-opt classes from: ".tipcalculator__options-opt" to ".tipcalculator__options-opt:not(.custom)", this to prevent it from including the "custom" button since it is being accessed this in the constant "customBtn" and will have its own eventListener
const tipPercentageButtons = document.querySelectorAll(
  ".tipcalculator__options-opt:not(.custom)"
);



const selectedTip = document.querySelector(".tipcalculator__selected-tip");
const enterButton = document.getElementById("enter-button");
const billInput = document.getElementById("bill-input");
const billAmount = document.getElementById("bill-ammount");
const perPerson = document.getElementById("per-person");
const peopleInput = document.getElementById("people-input");
const numberOfPeople = document.getElementById("number-of-people");
const tipInput = document.getElementById("tip-input");
const tipAmount = document.getElementById("tip-ammount");
const totalBill = document.getElementById("total-bill");
const percentageInput = document.getElementById("percentage-input");
const inputs = document.querySelectorAll("input");

//Add more descriptive variable names

let selectedTipValue;
let customTipSelected = false;
let percentageSelected = false;

customBtn.addEventListener("click", () => {
  customInput.classList.remove("hide");
  selectedTip.classList.add("hide");
  customTipSelected = true;
});

reset.addEventListener("click", () => {
  selectedTip.classList.add("hide");
  perPerson.innerHTML = "$0.00";
  totalBill.innerHTML = "$0.00";

  inputs.forEach((inputField) => {
    inputField.value = "";
  });
});

function updateTipPercentage(tipValue) {
  tipAmount.innerHTML = `${tipValue}%`;
}

//Change selectedTip[0] to selectedTip

tipPercentageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedTipValue = button.value;
    updateTipPercentage(selectedTipValue);
    selectedTip.classList.remove("hide");
    customTipSelected = false;
    percentageSelected = true;
    customInput.classList.add("hide");
    percentageInput.classList.add("hide");
  });
});

customInput.addEventListener("keyup", () => {
  toggleElementVisibility(selectedTip, true);
  updateTipPercentage(customInput.value);
});

//Separate the validation and calculation logic in a separate function, and pass to the click event of the "enterButton"

function calculateAndDisplay() {
  const bill = parseFloat(billAmount.value);
  const numberOfPeopleValue = parseInt(numberOfPeople.value);

  if (isNaN(bill) || bill <= 0) {
    billInput.classList.remove("hide");
    billInput.innerHTML =
      bill === 0
        ? "Bill ammount cannot be Zero"
        : "Bill ammount cannot be empty";
    perPerson.innerHTML = "$0.00";
  }

  if (isNaN(numberOfPeopleValue) || numberOfPeopleValue <= 0) {
    peopleInput.classList.remove("hide");
    peopleInput.innerHTML =
      numberOfPeopleValue === 0 ? "Cannot be zero" : "Cannot be empty";
    return;
  }

  let tipPercentage = customTipSelected
    ? parseFloat(customInput.value)
    : parseFloat(selectedTipValue);

  if (isNaN(tipPercentage) || tipPercentage < 0) {
    percentageInput.classList.remove("hide");
    billInput.classList.add("hide");
    return;
  }

  peopleInput.classList.add("hide");
  const perPersonAmount = (bill * tipPercentage) / 100 / numberOfPeopleValue;
  perPerson.innerHTML = perPersonAmount.toFixed(2);
  totalBill.innerHTML = (perPersonAmount * numberOfPeopleValue).toFixed(2);
}

enterButton.addEventListener("click", calculateAndDisplay);