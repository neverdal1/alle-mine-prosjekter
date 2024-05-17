import {nextStep, previousStep} from "./stepnavigation.js";

//nextButton
const nextButton = document.querySelector("#nextButton");
console.log(nextButton);

nextButton.addEventListener("click" ,nextStep);



// privous
const previousButton = document.querySelector("#previousButton");
previousButton.addEventListener("click", previousStep)

export {nextButton, previousButton}
