/* 
	JavaScript Coding Standard Example Project
	- There exist rules for the list in "Kentkart Mobile Javascript Coding Standards Document"
    - This file is created to show possible incorrect coding practices.

	- Date Created: Aug 4, 2022
	- Last Edited: Aug 5, 2020 (9:28 AM)

    Usage:
    For the selected rule;
    - Remove the eslint disable command
    - Remove the eslint enable command
    - Run "eslint not-recommendeds.js"

	Rules:
	- Please leave 2 newlines after each example.
	- Please wrap your examples in scopes. Avoid creating global variables.
	- Please edit the file with understandable format. Try to keep it simple.
	- No example with more than 10 rows should be accepted.
*/

/* 
	2.2: use lower camel case for function naming:
*/
/* eslint-disable */
function say_Hello(){ }
/* eslint-enable */


/* 
	2.2: use lower camel case for function naming:
*/
/* exceptionally accepted - still not recommended */
function SayHello(){ }


/* 
    2.3: There should be no space between function name and the function parameters 
        and also no space between parameters and curl-brackets. 
*/
/* eslint-disable */
function sayHello() { 
	console.log("hello"); 
}
/* eslint-enable */


/*
    2.4: Put spacing on long parameter pass and bundle primitives into objects.
*/
function respond(recipient, userMessage, userId, userName){ }


/*
    3.1: Put spacing on long parameter pass and bundle primitives into objects.
*/
/* eslint-disable */
{
    const q = 10;

    let status = (q >= 5) 
	    ? "x"
        : "y";
}
/* eslint-enable */


/*
    3.2:  There should be a spacing before and after of each operator.
*/
/* eslint-disable */
{
    const isOk = "yes";
    let count = 1;

    if(isOk === "no"&&count === 1){
        console.log('fail case');
    }
}
/* eslint-enable */


/*
    3.3:  Use strict equality or inequality. 
*/
/* eslint-disable */
{
    let name = "Fatih";
    
    if(name == "Fatih"){
        console.log("You are the chosen one");
    }
}
/* eslint-enable */


/*
    5.1:  Don't handle errors in try-catch blocks or create if-else statements in the following format.
*/
/* eslint-disable */
try{ 
	console.log("meow");
}catch(error){ 
	console.log(error); 
}
/* eslint-enable */


/*
    5.1:  Don't handle errors in try-catch blocks or create if-else statements in the following format.
*/
/* eslint-disable */
try{ 
	console.log("meow");
} catch(error){ 
	console.log(error); 
}
/* eslint-enable */


/* 
	6.1: Use literals on initializing arrays. Do not use constructors on initializing arrays.
*/
{
    /* exceptionally accepted - still not recommended */
    let productList = new Array(10);
    
    /* eslint-disable */
    let favoritesList = new Array(
        0,
        1,
        2
    );
    /* eslint-enable */
}


/* 
	6.2: Use literals on initializing objects. Do not use constructors on initializing objects.
*/
{
    /* eslint-disable */
    let product = new Object();
    /* eslint-enable */
}