
let a =1//defining variable(var,let,const)
a=2;
console.log(3);

let name="Rittika";
let age =18;
let ismarried =false;
console.log("This persons name is " + name + "and her age is " + age)

if (ismarried == true){
    console.log(name + "is married")
}
if (ismarried == false){
    console.log(name +"is not married")
}


//Loops

let answer=0;
for(i=0;i<=1000;i=i+1){
    answer=answer+i;
}
console.log(answer)

let firstname= "Rittika";
let lastname="Mitra";
console.log(" My name is  " + firstname +lastname)
let gender="Male";
if(gender=="female"){
    console.log("Hello Sir");
}
else{
    console.log("Hello ma'am");
}

//ARRAYS


const ages =[21, 22, 18,17, 25];
//const numberOfPeople =ages.length;
for(let i=0 ; i<ages.length; i++){
    if (ages[i]%2==0){
        console.log(ages[i]);
    }
}

const personArray =["Rittika","Vasu","sai", "rohit"];
const genderArray =["female", "male","male", "male"];
for(let i=0; i<personArray.length; i++){
    if(genderArray[i] =="male"){
        console.log(personArray[i]);
    }
}

//objects
 const user1 = {
    name : "Rittika",
    gender: "female"
 }
console.log(user1["gender"])

//arrays with objects
const users = [{
    name:"rittika",
    gender:"female",

},{
    name:"vasu",
    gender:"male"
},{
    name:"rohit",
    gender:"male"
},{
    name:"Ananya",
    gender:"female"
}]
for(let i =0; i<users.length; i++){
    if(users[i]["gender"]=="male"){
        console.log(users[i]["name"])
    }
}

//[1,2,3] arrays
//[{1,2,3}] arrays with objects

//FUNCTIONS & function callbacks

function sum(num1,num2, fnToCall){
    let result= num1+num2;
    fnToCall(result);
     
}
function displayResult(data){
    console.log("Result of the sum is : " + data);

}

function displayResultPassive(data){
    console.log("sum's result is : " +data);

}
displayResult(sum(2,3));

// u r only allowed to call one function after this
// How will you displayResult of a sum
// we can do this by passing a function as a argument
const ans = sum(1,3, displayResultPassive);
//callbacks

function calculateArithmatic(a,b,arithmaticFinalFunction){
   
    const ans = arithmaticFinalFunction(a,b)
    return ans;
    

}
function sum( a,b){
    return a+b;
}
function difference(a,b){
    return a-b;
}
const value = calculateArithmatic(1,2, difference);
console.log(value);

// FINDING THE SUM OF  SQUARE AND CUBE OF NUMBERS

function square(a){
    return a*a;

}
function cube (b){
    return b*b*b;
}

 function sumofSomething(a,b,fn){
    const val1 =fn(a);
    const val2= fn(b);
    return val1 +val2;
}

const ans = sumofSomething(2,3,square)
console.log(ans);

//setTimeout & setInterval


function greet(){
    console.log("hello world");
}
function greetAlien(){
    console.log("hello Alien");
}
setTimeout( greetAlien, 10*100) //after how many seconds hello world gets printed

setInterval(greet ,1*1000) //repeat after a duration


// create a counter in javascript(counts down fro 30 to 0)

function counter(){
    for(let i=30;i>=0;i--){
        console.log("The CountDownBegins : ",i);
    }
    
}
setTimeout(counter,2*1000);

/*
//you want to measure the time it takes between the setTimeout call and the actual execution of a function,
setTimeout(a, 1000); 
//after how much time the cntrl reaches to the nextt command
//it says it goes in 1 sec ...but how do u know ...
function a(){

}

*/

//create a terminal clock(HH:MM:SS)

function updateClock() {
// Get the current time
    const now = new Date();

// Extract hours, minutes, and seconds
    const hours = now.getHours().toString().padStart(2, '0');
//Converts the numeric hour to a string. This is necessary
//because the padStart method works with strings.
//using the padStart method, which pads the string with leading zeros 
//if its length is less than 2 characters. In this case, it ensures that the
//hours string always has at least two characters. For example:
//If now.getHours() returns 9, it becomes '09'.
//If now.getHours() returns 15, it remains '15'.
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Display the time in the console
    console.clear(); // Clear the console for a cleaner display
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

