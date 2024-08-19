Infor_Mark = {
    weight: 78,
    height: 1.69,
    weight2: 95,
    height2: 1.88
}

Infor_John = {
    weight: 92,
    height: 1.95,
    weight2: 85,
    height2: 1.76
}

let BMI_Mark = Infor_Mark.weight / Infor_Mark.height ** 2;
let BMI_John = Infor_John.weight / Infor_John.height ** 2;

let markHigherBMI = BMI_Mark > BMI_John;
console.log("Data 1, task1: ", task1(markHigherBMI));
console.log("Data 1, task2: ", task2(markHigherBMI, BMI_Mark, BMI_John));

BMI_Mark = Infor_Mark.weight2 / Infor_Mark.height2 ** 2;
BMI_John = Infor_John.weight2 / Infor_John.height2 ** 2;

markHigherBMI = BMI_Mark > BMI_John;
console.log("Data 2, task1: ", task1(markHigherBMI));
console.log("Data 2, task2: ", task2(markHigherBMI, BMI_Mark, BMI_John));

function task1(markHigherBMI){
    if(markHigherBMI){
        return `Mark's BMI is higher than John's)`;
    }else{
        return `John's BMI is higher than Mark's)`;
    }
}

function task2(markHigherBMI, BMI_Mark, BMI_John){
    if(markHigherBMI){
        return `Mark's BMI (${BMI_Mark}) is higher than John's BMI (${BMI_John})`;
    }else{
        return `John's BMI (${BMI_John}) is higher than Mark's BMI (${BMI_Mark})`;
    }
    
}