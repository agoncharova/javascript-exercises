var fooHelper = function(){
   var thing = "foo";
}

var foo = function(){
  caseTwoHelper();
  console.log(thing);
}


$("#debug-button").click(function(event) {
	foo();
});
