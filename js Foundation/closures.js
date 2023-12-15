//CLOSURES
//a function bind together with its lexical enviornment(finction along with its lexical scope)
/*
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();//when y is called , it logs the value of 'a'//y function is invoked as soon as it is called
}
x();

*/

//DESCRIBING THE FUNCTION

/*

When the function x() is called at the end of the code with x();, the following sequence of events occurs:

The x() function is invoked.
Inside the x() function, the variable a is declared and assigned the value 7/
The inner function y() is defined within the scope of the x() function.
The y() function is invoked immediately after its definition.- y();
Inside the y() function, console.log(a) is executed, and it logs the value of a to the console. - x() [when  function x() is called , it console log the valu of a ]
*/

/*

function x(){
    var a=7;
     function y(){//means returning function y only
        console.log(a);
    }
    a =100;//  funtion y() remembers the reference to 'a' memory location
    return y;//a gets updated to 100

    
        
        //returning y  means returning y function with its lexical scope
        //return y;( //when y is returned from another  function (x) )
        // it stills remembers its lexical scope , (remember where they were actually present)
        
    
}
var z =x();
console.log(z);
z(); //prints a ,  x remember its lexical scope , tries to find of reference of a
*/


//corner casses
// here we r trying to access its parents scope and its parent parent's scope 
function z(){
    var b =900; 
    function x(){
        var a=7;
         function y(){
            console.log(a ,b);
        }
        y();
    }
    x();
   
}
z();