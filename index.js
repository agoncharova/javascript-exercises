$('.kale-radio').click(function(event) {
	var radioId = event.target.id;
	var response = event.target.value;
	if(response){ 
		alert("You like kale.");
	} else {
		alert("You are not a huge fan of kale.");
	}
})