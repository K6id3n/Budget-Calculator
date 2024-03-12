function main() {
    let state = document.getElementById("state").value;
    let yearIncome = parseInt(document.getElementById("year-income").value);
    let other = parseInt(document.getElementById("other").value);
    let housing = parseInt(document.getElementById("housing").value);
    let utilities = parseInt(document.getElementById("utilities").value);
    let transportation = parseInt(document.getElementById("transportation").value);
    let food = parseInt(document.getElementById("food").value);
    let recreation = parseInt(document.getElementById("recreation").value);
    let savings = parseInt(document.getElementById("savings").value);
    let otherEx = parseInt(document.getElementById("other-ex").value);
    let takenOut = housing + utilities + transportation + food + recreation + savings + otherEx;
    console.log("entered values: ", state, yearIncome, other, housing, utilities, transportation, food, recreation, savings, otherEx);
    let a = yearIncome, b = takenOut;
    console.log("yearly income before tax; ", a);
    a = a *= .87;
    console.log("yearly income after tax; ", a);
    a = a /= 12;
    console.log("net monthly income;", a);
    a = a -= b;
    console.log("leftover monthly income;", a);
}

