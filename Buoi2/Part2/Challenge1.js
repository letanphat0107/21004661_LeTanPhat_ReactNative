Data1 = [{
    name: 'Dolphins',
    score: [44, 23, 71]
}, {
    name: 'Koalas',
    score: [65, 54, 49]
}]

Data2 = [{
    name: 'Dolphins',
    score: [85, 54, 41]
}, {
    name: 'Koalas',
    score: [23, 34, 27]
}]

function calcAverage(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum / data.length;
}


function checkWinner(data) {
    let avgDolphins = calcAverage(data[0].score);
    let avgKoalas = calcAverage(data[1].score);
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    } else if (2 * avgDolphins <= avgKoalas) {
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    } else {
        return `Draw (${avgDolphins} vs ${avgKoalas})`;
    }
}

console.log("Data 1: ", checkWinner(Data1));
console.log("Data Bonus 1: ", checkWinner(Data2));