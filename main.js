/*
Místo pro váš program
*/

/*
const selectPlan = (planNumber) => {

    if(planNumber === 1) {
        let plan1Elm = document.querySelector('#plan1');
        plan1Elm.classList.add('plan--selected');
    }
    if(planNumber === 2) {
        let plan2Elm = document.querySelector('#plan2');
        plan2Elm.classList.add('plan--selected');
    }
    if(planNumber === 3) {
        let plan3Elm = document.querySelector('#plan3');
        plan3Elm.classList.add('plan--selected');
    }
}
*/

/*
let plan1Elm = document.querySelector('#plan1');
plan1Elm.classList.remove('plan--selected');
*/

const selectPlan = (planNumber) => {
    let plan1Elm = document.querySelector('#plan1');
    let plan2Elm = document.querySelector('#plan2');
    let plan3Elm = document.querySelector('#plan3');

    if(planNumber === 1) {
        plan1Elm.classList.add('plan--selected');
        plan2Elm.classList.remove('plan--selected');
        plan3Elm.classList.remove('plan--selected');
    }
    if(planNumber === 2) {
        plan2Elm.classList.add('plan--selected');
        plan1Elm.classList.remove('plan--selected');
        plan3Elm.classList.remove('plan--selected');
    }
    if(planNumber === 3) {
        plan3Elm.classList.add('plan--selected');
        plan1Elm.classList.remove('plan--selected');
        plan2Elm.classList.remove('plan--selected');
    }
}

/*
selectPlan(1);
selectPlan(2);
selectPlan(1);
*/