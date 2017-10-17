

var loopToFive = function() {
  for (var i = 0, i < 5, i++) {
    console.log(i);
  }
}

$("#debug-button").click(function(event) {
	loopToFive();
});