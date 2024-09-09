Infor_Mark = {
    mass: 78,
    height: 1.69,
    BMI: 0
}

Infor_John = {
    mass: 92,
    height: 1.95,
    BMI: 0
}

function calcBMI(infor){
    return infor.mass / infor.height**2;
}

Infor_Mark.BMI = calcBMI(Infor_Mark);
Infor_John.BMI = calcBMI(Infor_John);

let markHigherBMI =  Infor_Mark.BMI > Infor_John.BMI;
console.log("Data 1, task2: ", task2(markHigherBMI, Infor_Mark.BMI, Infor_John.BMI));


function task2(markHigherBMI, BMI_Mark, BMI_John){
    if(markHigherBMI){
        return `Mark's BMI (${BMI_Mark}) is higher than John's BMI (${BMI_John})`;
    }else{
        return `John's BMI (${BMI_John}) is higher than Mark's BMI (${BMI_Mark})`;
    }
    
}