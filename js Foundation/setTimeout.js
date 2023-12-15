// using setTimeOut
/*
function x(){
    var i =1;
    setTimeout(function(){ //this function forms a closure and it is a callback function
        //setTimeout takes the callback function and attaches a timer to it & stores it somewhere and proceeds
        console.log(i);
    } , 3000);
    console.log("hello guys")
}
x();
*/
//they will first print hello guys ,  then wait for 3000ms and then print 1
//the function forms a closures and it remember the reference to i

//print numbers after  1 after 1 sec , 2  after 2sec ...and soon
/*
function x(){
    for (var i=1 ; i<=5 ; i++){
        setTimeout(function (){
            console.log(i);

        }, i*1000);

    }
        console.log("hello guys")
    }

x();
*/
//the above function will not work properly because of the closures formation
//the loops runs and the value of i becomes 6 n when the callback function runs
//by that time the value of i  becomes 6 in the memory location
// so because of the closure , reference of i memory location always point to 6
/*
//solution

//how can we fix it , use 'let' has a block scope
//each loop interation has a new copy of i
function x(){
    for (let i=1 ; i<=5 ; i++){
        setTimeout(function (){
            console.log(i);

        }, i*1000);

    }
        console.log("hello guys")
    }

x();
*/

//if u can't use let
function x(){
    for (var i =1; i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            }, x*1000)
        }
        close(i);//i =x //everytime u call this close() function , 
        //it creates a new copy of i inside the close() function
    }
    console.log("hello ji ...kida ji");

}
x();
//problem was that it was refering to the same memory space now 
//making a new function "class" , everytime the function is called , a new copy of i is created
 
