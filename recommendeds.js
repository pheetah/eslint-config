/* 
	JavaScript Coding Standard Example Project
	- There exist rules for the list in "Kentkart Mobile Javascript Coding Standards Document"

	- Date Created: Aug 4, 2022
	- Last Edited: Aug 5, 2020 (9:28 AM)

	Rules:
	- Please leave 2 newlines after each example.
	- Please wrap your examples in scopes. Avoid creating global variables.
	- Please edit the file with understandable format. Try to keep it simple.
	- No example with more than 10 rows should be accepted.
*/

/* 
	2.1.2: use lower camel case for function naming:
*/
function sayHello(){}


/*
	2.1.3: There should be no space between function name and the function parameters 
		and also no space between parameters and curl-brackets. 
*/
function sayHello2(){ 
	console.log("hello"); 
} 


/* 
	2.1.4: Put spacing on long parameter pass and bundle primitives into objects.
*/
function respond( 
	recipient,
	message
){}


/*
	3.1: Ternary operators should be put on a single line. 
*/
{
	const someValue = 4;
	let status = (someValue >= 5) ? "true" : "false";
}


/*
	3.2: There should be a spacing before and after of each infix operator.
*/
{
	const count = 5;
	const isOk = true;

	if(isOk === "no" && count === 1){
		console.log('wrong')
	}
}


/*
 	3.3: Use strict equality or inequality.
*/
{
	const name = "Ahmet";
	console.log(name === "Fatih");
}


/*
	5.1: Handle errors in try-catch blocks or create if-else statements in the following format.
*/
try{ 
	console.log('looks good'); 
} 
catch(error){ 
	console.log(error); 
}


/* 
	5.2: There should be no space between a control statement keyword and its opening parenthesis. 
		There should be no space between the parentheses and the opening curly brace. 
		Also in scope define and initialize properly using a let keyword.
*/
{
	const isOk = true;

	if(isOk){ 
		alert("accepted"); 
	}
}


/* 
	5.2: There should be no space between a control statement keyword and its opening parenthesis. 
		There should be no space between the parentheses and the opening curly brace. 
		Also in scope define and initialize properly using a let keyword.
*/
{
	let cats = ["orange", "white", "black"];

	for(let i of cats){ 
		alert("meow"); 
	}
}


/* 
	6.1: Use literals on initializing arrays. Do not use constructors on initializing arrays.
*/
{
	let productList = [];
}


/* 
	6.2: Use literals on initializing objects. Do not use constructors on initializing objects.
*/
{
	let product = {};
}