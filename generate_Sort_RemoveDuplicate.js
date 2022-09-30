/*“In a language of your choice, using all best practice principles you’re aware of, could you please provide code that reads a list of 10 numbers ranging between 1 to 100.
Assuming there are 4 duplicates in the list of numbers, the output should remove the duplicates and sort the remaining numbers in descending order. Please state any assumptions you’ve made.

Please upload to a public Github repository and share the link.” */



//Generate 10 unique random numbers between 1 to 100 in a new set()
var tenRandomNumbers = new Set();
while(tenRandomNumbers.size < 10) {
    var x = Math.round(Math.random()*100);
    //add to set
    tenRandomNumbers.add(x);  
}
// Put numbers into an array list and then sort in decending order 
let sortedNumbers = [...tenRandomNumbers.values()].sort(function(a,b){return(b-a)});
//Only print unique numbers in decending order
let sortedAndNoDuplicate = sortedNumbers.filter((item,index)=> sortedNumbers.indexOf(item)===index);


//This function returns the output
function generateSortNoDuplicates(){
return sortedAndNoDuplicate;
}
//print number in decending order
console.log(generateSortNoDuplicates());



/*
Assumption:
1. I can generate 4 duplicates with new set(), along with 8 distinct numbers 
*/

