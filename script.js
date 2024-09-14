const billInput = document.querySelector('.bill-input input');
const tips = document.querySelectorAll('.select-tips-grid button');
const customTip = document.querySelector('.select-tips-grid custom');
const numOfPeople = document.querySelector('.num-of-people-input input');
const tipPerPerson = document.querySelector('.tip-per-person-amount');
const totalAmount = document.querySelector('.total-amount');
const resetBtn = document.querySelector('.reset-button button');

const updateDisplay = (tipAmount, totalAmountValue) => {
    tipPerPerson.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmount.textContent = `$${totalAmountValue.toFixed(2)}`;
}

const tipCalculation = () => {
    tips.forEach((tip) => {
        tip.addEventListener('click', () => {
            console.log(tip.value);
            const tipPercentage = parseFloat(tip.value) / 100;
            const tipAmount = tipOnBill(tipPercentage);
            const totalAmountValue = totalAmountPerPerson(tipPercentage);
            updateDisplay(tipAmount, totalAmountValue);

        });
    });

    const tipOnBill = (tipPercentage) => {
        let bill = parseFloat(billInput.value);
        let people = parseFloat(numOfPeople.value) || 1;
        return (tipPercentage * bill) / people;
    }

    const totalAmountPerPerson = (tipPercentage) => {
        let bill = parseFloat(billInput.value);
        let people = parseFloat(numOfPeople.value) || 1;
        return (bill + (tipPercentage * bill)) /people
    }
}

tipCalculation();



resetBtn.addEventListener('click', () => {
    billInput.value = '';
    numOfPeople.value = '';
    // customTip.value = '';
    tipPerPerson.textContent = '0.00';
    totalAmount.textContent = '0.00';
})