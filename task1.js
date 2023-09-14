// Q1
const myArray = [];

console.log(myArray);

//Q2

myArray.push("apple","banana","cherry" );
console.log(myArray);

//Q3

console.log(myArray[0]);

//Q4

console.log(myArray[myArray.length-1]);

//Q5
// console.log(myArray);
// const c =[];
// const b = ["mango"];
// for (let i = myArray.length; i > 0; i--) {
//     let a = myArray.pop();
//     c.push(a);
    
// }
// for (let i = c.length; i > 0; i--) {
//     let a = c.pop();
//     b.push(a);
    
// }

// console.log(b);

// for (let i = 0; i < b.length; i++) {
//      myArray[i] = b[i];
    
// }
// console.log(myArray);

const a = myArray;
a.unshift("mango");

console.log('The array after adding mango to the begginng : [ '+ a + ']');

//Q6

console.log('The last element is '+myArray.pop());
console.log('The array after removing the las element : ['+myArray + " ]");

//Q7
const numbers = [5, 10, 15, 20, 25];

let s =[];
s = numbers.slice(0,2);

console.log(s);

for (let i = 3; i < numbers.length; i++) {
    s.push(numbers[i]);
    
}
console.log(s);

//another way to solve Q7
const numbers1 = [5, 10, 15, 20, 25];

numbers1.splice(2,1);

console.log(numbers1);


//Q8

function getLength(array1){
    return array1.length;
}//end

console.log( "The length of the array is "+getLength(s));

//Q9

const temperatures = [72, 68, 74, 80, 76];
let max = 0;


for (let i = 0; i < temperatures.length; i++) {
    if ( temperatures[i] > max )
        max = temperatures[i];
    
}

console.log("The max temperature is "+ max);



//Q10

console.log(myArray);

function find(array1){
    for (let i = 0; i < array1.length; i++) {
        if ( array1[i] == "banana" )
            return true;
        
    }
    return false;

}

console.log( find(myArray));