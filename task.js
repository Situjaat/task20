// Q 1 write a program to gretest three numbers using trenery number?
 let a= 1000;
let b= 400;
let c= 900;

a>b && a>c? console.log("greater"): b>a && b>c? console.log("high"): c>b && c>a? console.log("low"): console.log("very low")


// Q 2 write a program  positive and negetive number using trenery number?
 let number= 10;
 let negative;
number<0? console.log("negative"): console.log("positive")

// Q 3 imagine you have one varriable is loggedin = true /. write a js statement that assign the string "welcome back". to a varriable greeting if is loggedin
// in is true otherwise assigns "please log in". utilize a ternery operter to achive this.

let loggedin="true";
loggedin==true? console.log("welcome back"): console.log("please log in")

// Q 4 supposing you have one varriable dayofweek="monday" representing the day of Week . write a js statment that assigns"not weekend" to a varriable if dayofweek
// is saturday or sunday otherwise assign "weekend". use if else condition to solve this programm.

let Dayofweek="sunday"
 
if (Dayofweek=="saturday" || Dayofweek=="sunday") {console.log("not weekend")
}
else{
    console.log("weekend")

}