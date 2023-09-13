/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/
function isArrayLengthOdd(numbers) {
    // Your code here
    if (numbers.length % 2 !=0) 
        return true; 
    else
        return false;
    }//end
    
    

    console.log("The array [1, 2, 3, 4] is odd : "+ isArrayLengthOdd([1, 2, 3, 4]));





    /**
    
    - isArrayLengthEven(numbers):
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */
    function isArrayLengthEven(numbers) {
    // Your code here
        if (isArrayLengthOdd(numbers)) 
            return false;
        return true;
        
    }
    
    console.log("The array [1, 2, 3, 4] is even : "+isArrayLengthEven([1, 2, 3, 4]));





    /**
    
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */
    function addLailaToArray(instructors) {
    // Your code here
    instructors.push("Laila");
    return instructors;
    }
    const instructors = ["Mshary", "Hasan"];
    console.log("The array before adding laila : " + instructors)
    
    console.log("The array after adding laila : " + addLailaToArray(instructors));
    




    /**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */
    function eliminateTeam(teams) {
    // Your code here
        return teams.pop();
    }
    const team1 =["Brazil", "Germany", "Italy"];
    console.log("The teams before elimination : "+team1);
    console.log("The teams eliminated is  : "+ eliminateTeam(team1));


    
    /**
    
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new array that's the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */
    function secondHalfOfArrayIfItIsEven(fruits) {
    // Your code here
         
        if( fruits.length % 2 == 0)
            return fruits.slice(fruits.length/2 , fruits.length);
        
        else 
            fruits.length=0;
        return fruits;

    }
    
    console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
    console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]));



    /**
    
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */
    function youGottaCalmDown(shout) {
    // Your code here
    
        let found = false;
        let newShout = '';

        for (let i = 0; i <= shout.length-1; i++) {
            const char = shout[i];

            if (!found && char == '!') {

                newShout = newShout + char;

                found =true;

            } else if (char != '!') {

                newShout = newShout + char;
                found = false;
            }//else if
        }//for

        return newShout;
    }//end
    console.log(youGottaCalmDown("HI!!!!!!!!!!"));
    console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
    console.log(youGottaCalmDown("Hellooooo"));