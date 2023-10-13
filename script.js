const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const inputFields = document.querySelectorAll('.input-field');
const modal = document.querySelector('.success-card');
const modalClose = document.querySelector('.close');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // form.display.style = 'none';
    modal.style.display = "flex";
    inputs.forEach(input => {
        if(input.classList.contains('name-input')){
            containsNameInput(input)
        }else if(input.classList.contains('date')){
            containsDateInput(input)
        }else{
            containsOtherInput(input)
        }

        if (input.parentElement.classList.contains('error-empty') ||
            input.parentElement.classList.contains('error-invalid') ||
            input.parentElement.parentElement.classList.contains('error-invalid') ||
            input.parentElement.parentElement.classList.contains('error-empty')) {
            modal.style.display = 'none';
        }
    })
})

const containsNameInput = function(input){
    if(input.value === ''){
        input.parentElement.classList.add('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) !== null){
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.add('error-invalid');
    }
    else{
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }
}

const containsDateInput = function(input){
    if(input.value === ''){
        input.parentElement.parentElement.classList.add('error-empty');
        input.parentElement.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){  // wil return null if value has anything accept number
        input.parentElement.parentElement.classList.remove('error-empty');
        input.parentElement.parentElement.classList.add('error-invalid');
    }else{
        input.parentElement.parentElement.classList.remove('error-empty');
        input.parentElement.parentElement.classList.remove('error-invalid');
    }
}

const containsOtherInput = function(input){
    if(input.value === ''){
        input.parentElement.classList.add('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.add('error-invalid');
    }else{
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }
}

modalClose.addEventListener('click',()=>{
    modal.style.display = "none";
    form.style.display = 'block';
})

//realtime card

const nameInput = document.querySelector('.name-input');
nameInput.addEventListener('input',(e)=>{
    document.querySelector('.name-output').textContent = e.target.value;
})

const numberInput = document.querySelector('.number-input');
numberInput.addEventListener('input',(e)=>{
    let formattedNumber = e.target.value.toString().replace(/\d{4}(?=.)/g, '$& ');
    document.querySelector('.number-output').textContent = formattedNumber;
})

const monthInput = document.querySelector('.month-input');
monthInput.addEventListener('input',(e)=>{
    formattedMonth = ('0' + e.target.value).slice(-2);
    document.querySelector('.month-output').textContent = formattedMonth;
})

const yearInput = document.querySelector('.year-input');
yearInput.addEventListener('input',(e)=>{
    formattedYear = ('0' + e.target.value).slice(-2);
    document.querySelector('.year-output').textContent = formattedYear;
})

const cvcInput = document.querySelector('.cvc-input');
cvcInput.addEventListener('input',(e)=>{
    document.querySelector('.cvc-output').textContent = e.target.value;
})