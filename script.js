const billInput = document.querySelector('.bill-input input');
const tips = document.querySelectorAll('.select-tips-grid button');
const customTip = document.querySelector('.select-tips-grid custom');
const numOfPeople = document.querySelector('.num-of-people-input input');
const tipPerPerson = document.querySelector('.tip-per-person-amount');
const totalAmount = document.querySelector('.total-amount');
const resetBtn = document.querySelector('.reset-button button');


const tipCalculation = () => {
    tips.forEach((tip) => {
        tip.addEventListener('click', () => {
            console.log(tip.value);
            const tipPercentage = tip.value;        
        })
    });
    
}




resetBtn.addEventListener('click', () => {
    billInput.value = '';
    numOfPeople.value = '';
    tipPerPerson.textContent = '0.00';
    totalAmount.textContent = '0.00';
})