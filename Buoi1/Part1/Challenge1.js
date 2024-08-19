//Task
// 1.Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

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

console.log("Data 1:")
if(markHigherBMI){
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's BMI (${BMI_John})`);
}else{
    console.log(`John's BMI (${BMI_John}) is higher than Mark's BMI (${BMI_Mark})`);
}

BMI_Mark = Infor_Mark.weight2 / Infor_Mark.height2 ** 2;
BMI_John = Infor_John.weight2 / Infor_John.height2 ** 2;

markHigherBMI = BMI_Mark > BMI_John;

console.log("Data 2:")
if(markHigherBMI){
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's BMI (${BMI_John})`);
}
else{
    console.log(`John's BMI (${BMI_John}) is higher than Mark's BMI (${BMI_Mark})`);
}



