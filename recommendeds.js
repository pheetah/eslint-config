const isOk = true;

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

// 
if(isOk){ 
	alert("accepted"); 
} 

let cats = ["orange", "white", "black"];
for(let i of cats){ 
	alert("meow"); 
}

try{ 
	console.log('looks good'); 
} 
catch(error){ 
	console.log(error); 
} 