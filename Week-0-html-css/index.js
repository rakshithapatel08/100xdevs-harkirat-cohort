/*
  The js file is attacjed to html using script tag.
  we write defer beacuse the html has to wait until the DOM is created.

  Defer: This attribute makes sure that all the scripts are downloaded but
         it will not be executed until the DOM is ready.
*/ 

const capitalInput = document.getElementById("capital");
const yearsInput = document.getElementById("years");
const rateInput = document.getElementById("rate");
const buttonElement = document.getElementById("calculate");
const divElement = document.getElementById("calculator-div")
let amount = 0;

buttonElement.addEventListener("click",()=>{
   let simpleInterest = ( capitalInput.value * yearsInput.value * rateInput.value )/ 100;
   amount = simpleInterest + capitalInput.value;
   console.log(amount)
   buttonElement.style.setProperty("display","none");
   //created new element
   const answerElement = document.createElement("h2");
   // added text to new element
   const node = document.createTextNode(`Amount received is : ${amount}`);
   // appended text to new element
   answerElement.appendChild(node);
   // appended the entire answer element to existing div element
   divElement.appendChild(answerElement);
})