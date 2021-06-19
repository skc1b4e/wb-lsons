function onPageLoadFn() {
	alert('Hello');


}


addFn = function (a, b) { return a + b; }
minusFn = function (a, b) { return a - b; }
multiplyFn = function (a, b) { return a * b; }

function getOperator(operator) {
	switch (operator) {
		case "add":
			return addFn;
			break;
		case "minus":
			return minusFn;
			break;
		case "multiply":
			return multiplyFn;
			break;

	}
}
function testfn(a, b, fn) {

	return fn.apply(null, [a, b]);
}

function calc(event) {


	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);

	// if ( event.srcElement.id==="add")
	// {
	document.getElementById("result").value = testfn(a, b, getOperator(event.srcElement.id));
	// return addFn(a,b);
	// }
	// else if (event.srcElement.id==="minus")
	// {
	// 	document.getElementById("result").value = testfn(a,b, minusFn); 
	// //	return minusFn(a,b);
	// }
	// else if (event.srcElement.id==="multiply")
	// {
	// 	document.getElementById("result").value = testfn(a,b, multiplyFn);   
	// //	return multiplyFn(a,b);
	// }
}


function multiply() {
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);
	console.log(document.getElementById("add").innerHTML);
	document.getElementById("result").value = a * b;
	return a * b;

}

function add() {
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);
	document.getElementById("result").value = a + b;
	return a + b;
}

function minus() {
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);
	document.getElementById("result").value = a - b;
	return a - b;
}


