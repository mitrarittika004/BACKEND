//1.
function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  function findSumTill100() {
    console.log(findSum(100));
    return findSum(100);//function exits after a return statement, so it should always be at last
  }
  
  setTimeout(findSumTill100, 1000) //The thread  will no wait on this command
  console.log("hello world");//the thread will go the other command
  
//2.

//read a file
const fs = require("fs");
fs.readFile("hi.txt","utf-8", function(err,data) {
    console.log(data);
});
console.log("This is a message");


//3.

//Promises
const fs = require('fs');

// my own asynchronous function
function rittikaReadFile() {
  return new Promise(function(resolve) {
    fs.readFile("hi.txt", "utf-8", function(err, data) {
      resolve(data);
    });
  })
}


//This code defines a function named rittikaReadFile.
//Inside this function, a new Promise is created. 
//The promise will perform an asynchronous operation using the fs.readFile 
//function to read the contents of the "hi.txt" file with UTF-8 encoding.
//callback function to call

//The resolve function is provided as an argument to the Promise constructor. 
//When the fs.readFile operation completes successfully, 
//it calls resolve with the file data, thereby fulfilling the promise.


function onDone(data) {
  console.log(data)
}
//This code defines a callback function named onDone. 
//This function takes data as a parameter and simply logs it to the console.


rittikaReadFile().then(onDone);

//This line invokes the rittikaReadFile function, which returns a Promise. The then method is used
// to attach a callback (onDone) that will be called when the promise is resolved (when the file reading is complete).
//In this case, when the file reading is finished, the resolve(data) inside the promise calls the onDone callback,
// and data (the content of the file) is logged to the console.





