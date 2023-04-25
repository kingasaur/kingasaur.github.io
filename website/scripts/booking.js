/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// Yes, some of these variables need to be initialized when the page is loaded. Elements on the screen that will be clicked or modified should also be initialized when the page is loaded. These variables will need to be updated every time to provide the user with accurate real-time information.

var weekdays = [document.querySelector("#monday"),
                document.querySelector("#tuesday"),
                document.querySelector("#wednesday"),
                document.querySelector("#thursday"),
                document.querySelector("#friday")];
var dayCounter = 0;

function clickedDay() {
    dayCounter += 1;
    this.className = "clicked";
    calculateWeeklyCost();
}

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let day of weekdays) {
    day.addEventListener("click", clickedDay);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById("clear-button");
var calculatedCost = document.getElementById("calculated-cost");

clearButton.addEventListener("click", clearDays);

function clearDays () {
    let resetDays = document.querySelectorAll("#weekday");
    dayCounter = 0;
    for (let day of resetDays) {
        day.className = "blue-hover";
    }
    calculatedCost.innerHTML = 0;
    location.reload();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfDayButton = document.getElementById("half");
var dailyRate = 35;

halfDayButton.addEventListener("click", half);

function half() {
    dailyRate = 20;
    halfDayButton.className = "clicked small-button";
    fullDayButton.className = "small-button";
    calculateWeeklyCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var fullDayButton = document.getElementById("full");

fullDayButton.addEventListener("click", full);

function full() {
    dailyRate = 35;
    fullDayButton.className = "clicked small-button";
    halfDayButton.className = "small-button";
    calculateWeeklyCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateWeeklyCost() {
    let cost = dailyRate * dayCounter;
    calculatedCost.innerHTML = cost;
}