// nextStep

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

export {nextStep, previousStep};