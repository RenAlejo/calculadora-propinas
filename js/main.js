
// IMPORTS
import { Calculator } from './calculator.js';

// DOM ELEMENTS 
const calculatorForm = document.querySelector('form');
const divPerPersonAmount = document.querySelector('.result__perPersonAmount');
const divTotalAccountAmount = document.querySelector('.result__totalAccountAmount');
const divResult = document.querySelector('.result');
const amountInput = document.querySelector('.accountAmount');
const amountOfPeopleInput = document.querySelector('.amountOfPeople');
const btnCalculate = document.querySelector('.calc__sendbtn');

// PARSEAMOS NUMERO TOTAL DE LA CUENTA AGREGANDOLE DECIMALES
amountInput.addEventListener('keyup', event => {

    let input = event.target.value.replace(/[^\d]/g, '');
    const totalAmount = Number(input);
    const formattedAmount = totalAmount.toLocaleString('es');
    amountInput.value = formattedAmount;

});

// VÁLIDAMOS TOTAL PERSONAS
amountOfPeopleInput.addEventListener('keyup', event => {

    const input = event.target.value.trim();
    if (  input == 0 ) {
        amountOfPeopleInput.value = '';
    } 

    if (  input.length > 5 ) {
        console.log('entro');
        amountOfPeopleInput.value = input.split(0,5);
    } 

});

// VÁLIDAMOS CAMPOS REQUERIDOS PARA HABILITAR BOTÓN DE ENVIO 
calculatorForm.addEventListener( 'keyup', event => {

    const formData = {};

    Array.from( calculatorForm.elements )
    .forEach( element => {
        if ( element.name.length === 0 ) return;
        formData[element.name] = element.value;
    });


    if( formData.accountAmount != '' 
        && formData.accountAmount > 0 
        && formData.amountOfPeople != '' 
        && formData.amountOfPeople > 0 
    ) {
        btnCalculate.disabled = false;
    }

});


// CAPTURAMOS EVENTO SUBMIT DEL FORMULARIO
calculatorForm.addEventListener( 'submit', event => {
    
    event.preventDefault();
    const formData = {};

    Array.from( calculatorForm.elements )
    .forEach( element => {
        if ( element.name.length === 0 ) return;
        formData[element.name] = element.value;
    });

    divResult.style.display = 'block';
    const calculator = new Calculator( formData );
    divPerPersonAmount.innerHTML = calculator.getPerPersonAmount().toLocaleString('es');
    divTotalAccountAmount.innerHTML = calculator.getTotalAccount().toLocaleString('es');

});



