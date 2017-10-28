var fooHelper = function(){
   var thing = "foo";
}

var foo = function(){
  fooHelper();
  console.log(thing);
}


// $("#debug-button").click(function(event) {
// 	foo();
// });
