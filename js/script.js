var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");
var tripInfo = function () {
    var totalBudget = Number(prompt("What is your total budget?"));
    var accomdation = Number(prompt("What are your accomdation costs?"));
    var numDays = Number(prompt("How many days does your trip last"));

    calculateDailyBudget(totalBudget, accomdation, numDays);
};

var calculateDailyBudget = function (totalBudget, accomdation, numDays) {
    var daily = ((totalBudget - accomdation) / numDays).toFixed(2);

    dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`
};

tripInfoButton.addEventListener("click", tripInfo);