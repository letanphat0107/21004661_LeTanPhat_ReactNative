Data1 = [{
    name:'Dolphins',
    score: [96,108,89]
},{
    name:'Koalas',
    score: [88,91,110]
}]

DataBonus1 = [{
    name:'Dolphins',
    score: [97,112,101]
},{
    name:'Koalas',
    score: [109,95,123]
}]

DataBonus2 = [{
    name:'Dolphins',
    score: [97,112,101]
},{
    name:'Koalas',
    score: [109,95,106]
}]

function averageScore(data){
    let sum = 0;
    for(let i = 0; i < data.length; i++){
        sum += data[i];
    }
    return sum / data.length;
}


function winner(data){
    let avgDolphins = averageScore(data[0].score);
    let avgKoalas = averageScore(data[1].score);
    if(avgDolphins > avgKoalas){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    }else if(avgDolphins < avgKoalas){
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    }else{
        return `Draw (${avgDolphins} vs ${avgKoalas})`;
    }
}

function winnerWithRule(data){
    let avgDolphins = averageScore(data[0].score);
    let avgKoalas = averageScore(data[1].score);
    if(avgDolphins >= 100 && avgDolphins > avgKoalas){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
    }else if(avgKoalas >= 100 && avgDolphins < avgKoalas){
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    }else if(avgDolphins >= 100 && avgKoalas >= 100 && avgDolphins === avgKoalas){
        return `Draw (${avgDolphins} vs ${avgKoalas})`;
    }else{
        return `No one win`;
    }
}

console.log("Data 1, task1 + task 2 include calculate and determine the winner:", winner(Data1));
console.log("Data Bonus 1, task3 + task 4 include calculate and determine the winner with rule:", winnerWithRule(Data1));
console.log("Data Bonus 2, task3 + task 4 include calculate and determine the winner with rule:", winnerWithRule(DataBonus2));