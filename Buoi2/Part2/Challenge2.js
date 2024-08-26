function calcTip(bill) {
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
}

bills = [125, 555, 44];
tips = bills.map(bill => calcTip(bill));
total = bills.map((bill, index) => bill + tips[index]);
total.forEach((value, index) => {
    console.log(`Bill: ${bills[index]}, Tip: ${tips[index]}, Total: ${value}`);
});