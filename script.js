const submitValue = document.querySelector("#submitValue");
console.log(submitValue);


// submitvalue viser den konverterte verdien (kalkuleringen)
submitValue.addEventListener("click", () =>{
  
//   queryselector() henter noe fra html
    const inputValue = document.querySelector("#inputValue").value;
    console.log(inputValue) 
    
    
    //   queryselector() henter noe fra html
    const displayValue = document.querySelector("#displayValue");
console.log(displayValue);


// .value er at vi henter verdi/innhold til element
displayValue.textContent = inputValue;


// .value er at vi henter verdi/innhold til element
const fromValue = document.querySelector("#fromValue").value;
console.log(fromValue);


// .value er at vi henter verdi/innhold til element
const toValue = document.querySelector("#toValue").value;
console.log (toValue);




// formel liste i else if
let result; 


if (fromValue === "CM"& toValue === "M") {
    // kalkulering 
    result = inputValue / 100;

}
else if (fromValue === "CM" & toValue === "KM") {
    //  kalkulering
    result = inputValue / 100000
    
}
else if(fromValue === "M" & toValue === "CM") {
    // kalkulering
    result = inputValue * 100
}
    

else if (fromValue === "M" & toValue === "KM") {
 // kalkulering
 result = inputValue / 1000
}
   
  
else if (fromValue === "KM" & toValue === "CM") {
     // kalkulering
     result = inputValue * 100000
     
    }
else if (fromValue === "KM" & toValue === "M") {
     // kalkulering
     result = inputValue  * 1000
}
  
else {

    console.log (" choose two different options!")
}

displayValue.textContent = result;
});
const todoTask = [];
//starten på heile koden 
function addtodoTask(){
// nettsiden ikkje restarter når knappen er trykket på
event.preventDefault();

//henter innhold fra "input boble"
const taskInput = document.querySelector("#taskInput").value;


//fra input til array
todoTask.push(taskInput);

// henter info fra "input bobla" og sender den som log i "console"
console.log(todoTask);



// forloop that loops our Array
// loops trough our array and checks for new data

//sjekker om array har fått verdi
for(
let index = 0;
index < todoTask.length;
index = index + 1 

){

//henta informasjon fra loop ved hjelp av index
const newTodoTask = todoTask[index]



//laga ett nytt element i html
const newlistItam = document.createElement("li")
console.log(newlistItam);
// der går og skjekker om verdi fra todotask 
newlistItam.textContent = todoTask;


//henter div elementet i ul 
const taskListcontainer = document.querySelector("#taskList");
console.log(taskListcontainer);

//her legger vi til modifisering(css)
newlistItam.classList.add("newlistItam");

// å lage en knapp som sletter gjøremålet 
const deleteButton = document.createElement("button")
console.log(deleteButton);

deleteButton.textContent = "delete todo"
deleteButton.classList.add("deleteButton");
deleteButton.addEventListener("click",function () {
   
    console.log("click?") ; 

    newlistItam.remove();
    deleteButton.remove();
}) // her avslutter delete knappen

//dette sendes tilbake til HTML :
taskListcontainer.appendChild(deleteButton);
taskListcontainer.appendChild(newlistItam);

}
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click",addtodoTask);

function nextStep(){
  event.preventDefault();

  let currentStep = 1;

  if (currentStep < 4) {

      document.querySelector(`#step${currentStep}`).classList.add("hidden");

      currentStep = currentStep + 1;

      document.querySelector(`step${currentStep}`).classList.remove("hidden");
  }
}

// prviousStep
function previousStep(){
  event.preventDefault();

  let currentStep = 1;

  if (currentStep > 1) {

      document.querySelector(`#step${currentStep}`).classList.add("hidden");

      currentStep = currentStep - 1;

      document.querySelector(`step${currentStep}`).classList.remove("hidden")
}
}
import {nextButton, previousButton}from "./eventListner.js";
export {nextStep, previousStep};