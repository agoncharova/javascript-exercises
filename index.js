$('.kale-radio').click(function(event) {
	var response = event.target.value;
	if(response){ 
		alert("You like kale.");
	} else {
		alert("You are not a huge fan of kale.");
	}
});

/*
var testFuncTwo = function(bool) {	
	console.log("Awesome job!");
}

var testFuncThree = function(bool) {
	console.log("Yey, test function three");
}

var testFuncOne = function(bool) {
	if(bool) {
		testFuncTwo();
	} else {
		testFuncThree();
	}
}

var pickRandomBoolean = function() {
	var randomNumber = Math.random();
	if(randomNumber < 0.50){
		return true;
	} else {
		return false;
	}
}

$('#debug-button').click(function(event) { 
	 var randomBoolean = pickRandomBoolean();
	 debugger;
	 testFuncOne(randomBoolean);
});
*/