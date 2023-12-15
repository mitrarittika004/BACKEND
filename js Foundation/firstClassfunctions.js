//Function statement or //Function Delclaration
a();//this works ok
function a(){
    console.log("Hello guys")
}
a();

//Function Expression

//can assign variable to a function , function acts like a value
b(); //b is undefined as in this case function is treated as a variable 'b', thus it will throw error
var b =function(){
    console.log("b called");
}
b();


// Anonymous function 
//function without a name, does not have its own identity
//it is used at places where functions are treated as values
//if used idependently, it creates syntax error 
//function(){ } //creates syntax error


//named function expression
var b = function xyz(){
    console.log("xyz");
}
b();
//xyz(); //this throws an error 

//Parameters and arguments


//var b =function(param1 , param2); //param1 and param2 are parameters
//labels or idetifiers who get those values are known as parameters
//b(1,2);//1, 2 are arguments (when u call a function)//the values which we pass inside a function are known as arguments

var b =function(param1, param2){
    console.log(`the values of the parameter are", ${param1} ,${param2}`);

 }
b(1,2);

//First class function
//passing  function inside another function as arguments
//1 way
var b = function (param1){
    console.log(param1);
}
b(function(){

})
//2nd way

var b = function (param1){
    console.log(param1);
}
function xyz(){

}
b(xyz);

//3rd way
var b =function(param1){
    return function xyz(){
        console.log("hi")
    }
}
console.log(b());


//First class citizens - ability to be used like values


//Arrow Function

