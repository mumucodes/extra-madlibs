// import functions and grab DOM elements
const inputNoun = document.getElementById('input-noun-1');
const inputVerb = document.getElementById('input-verb-2');
const inputAdj= document.getElementById('input-adj-3');
const button = document.getElementById('button-click');

// this has imported the elements I defined as inputs from the user

const outputNoun = document.getElementById('output-1');
const outputVerb = document.getElementById('output-2');
const outputAdj = document.getElementById('output-3');

// now I have all the DOM elements I've defined in the document so
// I want to make sure that when the user clicks the button, the inputs
// are grabbed and placed into the outputs
// in order to do this I will call the constant button and add .addEventListener
// to it.  This has two parameter: ('click' and a set of ())

button.addEventListener('click', ()=> {
    outputNoun.textContent = inputNoun.value;  
    outputVerb.textContent = inputVerb.value;
    outputAdj.textContent = inputAdj.value;
});