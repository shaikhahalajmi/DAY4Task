//Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.

for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}

//Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.
for (let index = 2; index <= 20; index++) {
    if( index % 2 == 0)
        console.log(index);
    
}

//Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.

let sum1 = 0 ;
let sum2 = 0 ;
let count = 0;
while (count <= 100) {
    sum1= sum1+count;
    count++;
    
}
console.log(sum1);

for (let index = 0; index <= 100; index++) {
     sum2 = sum2 + index;
    
}
console.log(sum2);

//Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.
const a = [1,2,3,4,5];
let sum3 = 0;
for (let index = 0; index < a.length; index++) {
    sum3 = sum3 + a[index];
   
}
console.log(sum3);