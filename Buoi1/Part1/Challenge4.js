function calculatorTip(bill){
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
}

Data = [275, 40, 430];

Data.forEach(element => {
    console.log(`The bill was ${element}, the tip was ${calculatorTip(element)} and the total value ${element + calculatorTip(element)}`);
});