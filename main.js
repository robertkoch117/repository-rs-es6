//REST

function soma(a,b,...params){
    return params;
}

console.log(soma(1,3,4,4,5,6,7));

//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);