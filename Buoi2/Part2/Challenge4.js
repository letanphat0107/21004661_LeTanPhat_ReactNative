//Array contain 10 elements
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

function calculatorTip(bill){
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
}

bills.forEach(element => {
    tips.push(calculatorTip(element));
    totals.push(element + calculatorTip(element));
});

console.log("Data test, tips: ", tips);
console.log("Data test, totals: ", totals);

function calcAverage(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

console.log("Data test, average of totals: ", calcAverage(totals));