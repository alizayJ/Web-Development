 let a = 10;
 let b = 2;
  b -= a; // b = b - a;
  a += b; // a = a + b;
  g = "10"; 
  b = +g ; // + with g converts into a number 
 
 let c = a % b;
 let e = a**b; //exponential operator

//practing typeof
let d = typeof a
 
// practing operators
 let num1 = 10
 let num2 = 20
 let num3 = ++num1 //pre increment operator if num1++ then post increment
 let num4 = --num2 //pre decrement operator if num2-- then post decrement 
  
 //template literal ${}
let Name  = "Aliza";
let greetings = `Hello , ${Name}!` 

 //comparison operators
 x = 4;
 y = 3;
 z = 4;
 w = "4";
 x < y ; //false
 x > y ; //true
 x <= z; //true
 x >= y; //true
 x == z; //true
 x == w; //ture doesn't care abour data type and just equate
 x === w; // false does care abour data type and also equate data type

//  conditional statement if, if else, ELse if

 cond = 10;
 if(cond<5){
    console.log("cond is less than 5");
 }
 else if (cond<10){
    console.log("cond is less than 10");
 }
 else("cond>=10")
{
    console.log("cond is equal and greater than 10");
}
// Alert and Prompt
//alert("this is a alert");
//prompt("this is a prompt");

// strings are immutable in javascript        immutable=temporay
 let first = "aliza";
 let last = "              KASHIF";
 let msg = "coders are increasing exponentially";
 let str ="";
 console.log(str.indexOf()) // gives a negative number
 // concatenate + in strings
 console.log(first+ last);
 //Methods of string
 console.log(first.toUpperCase());
 console.log(last.toLowerCase());
console.log(last.trim());  //trims the blank space before
console.log(msg.slice(1,21)); // only shows the portion after 1 and before 21, can show a slice of string
console.log(first.indexOf("a"));  // shows only the index of first if alphabets are repeated
console.log(msg.replace('increasing', 'decreasing'));
console.log(msg.repeat(5)); // repeats the msg 5 times
 // Maths methods
 console.log(Math.PI);
 console.log(Math.random());
 console.log(Math.floor(7.666)) // round off to small value
 console.log(Math.ceil(7.666)) // round off to big value
 console.log(Math.pow(2,4)) //power 2^4
 console.log(Math.abs(-4))
 // dice
 let dice = Math.floor(Math.random()*6);// always returns number less than 1, this returns a number less than 6
 console.log(dice);
 // Array, Arrays are mutable in javascript       mutable=permanent
 let alpha = ["a","b","c"];
 console.log(alpha[1])
 console.log(alpha.length)
 // multidimentional array or nested arrays
  let mul_dim = [["Red",10], ["Blue",20], ["Green",30]];
  console.log(mul_dim[0][1] + mul_dim[1][1] + mul_dim[2][1]);
  // array methods
  let num = [1, 2, 3, 4];
  let num_more = [5, 6 , 7 , 8];
  let strnum = num.toString(); // converted into string.
  console.log(num.pop()) // gives the last element from array as an output and change the original array by deleting the last element.
  let pushNum = num.push(56); // push the element in the last position in the array and it returns a new length (when saved into a variable)
  num.shift(); // returns the first element of array as output and change the original array deleting first element.
  num.unshift(78); // adds this 78 at the start of the original array and returns length of an array
  delete num[0] // delete the element at the zeroth place but it doesn't affect the array length
  num.concat(num_more) //it returns the new array concatenate into num (like num + num_more) it can also work with more like (a1,a2,a3)
  // concat doesn't change existing array
  num.sort(); // sort the array alphabetically if the there are numbers they will be sorted in the 1,2,3 not matter how large 
  //the number is 222 will always be first before 3.
  // sort function also takes compare function as an argument
  num.reverse(); // reverse the original array
  // splice and slice
  num.splice(2, 1, 1024, 1025, 1026) //splice( position to add, num of elements to remove, elements to be added.....+....)
  // splice returns an array of deleted value which we deleted from original array
  num.slice(1,3) // returns an new array which start from 1 index and ends at 2 index, second argument will not be included
  num.indexOf(3) // gives index of 3 in the array
  num.includes(6) // checks if certain array have certain element and returns true or false.
   // array with loop
  let fruits = ["mango", "Apple", "banana" , "orange", "strawberries"];
  for( let i=0 ; i<fruits.length; i++)
  {
   console.log(i, fruits[i])
  }
  // "of" in for loop for Arrays
  for(above of fruits)
{
   console.log(above) // one option
   console.log(fruits) // second option
} 

// functions 
// sum
function sum(a,b){
   console.log(a+b);
}
sum(10,20); //calling function

// name printer
function print_name(iden)
{
   return console.log(iden);
}
print_name('arshia');

// Multiplication table
function table(n){
   for(let i=n; i<=n*10; i+=n)
   console.log(i);
}
table(5);





 











