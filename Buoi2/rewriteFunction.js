//every, map, reduce, reduceRight, some, filter, find
//every: Tat ca element deu thoa deu kien
Array.prototype.every2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};
var arr = [1, 2, 3, 4, 5];
console.log("Every: " + arr.every2((item) => item > 0));
//map: Tao ra 1 mang moi voi gia tri duoc update
Array.prototype.map2 = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
};

var arr = [1, 2, 3, 4, 5];
console.log("Map: " + arr.map2((item) => item + 6));
//reduce: Gop cac phan tu cua mang thanh 1 gia tri (gia tri tra ve phu thuoc vao init value)
Array.prototype.reduce2 = function(callback, initValue) {
    let result = initValue;
    let length = this.length;
    for (let i = 0; i < length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var arr = [1, 2, 3, 4, 5];
console.log("Reduce: " + arr.reduce2((total, item) => total + item, 0));
//reduceRight: Gop cac phan tu cua mang thanh 1 gia tri (gia tri tra ve phu thuoc vao init value) tu phai qua trai

Array.prototype.reduceRight2 = function(callback, initValue) {
    let result = initValue;
    let length = this.length;
    for (let i = length - 1; i >= 0; i--) {
        result = callback(result, this[i], i, this);
    }
    return result;
}
var arr = [1, 2, 3, 4, 5];
console.log("ReduceRight: " + arr.reduceRight2((total, item) => total + item, 0));