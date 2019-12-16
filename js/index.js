document.querySelector("#text-input").addEventListener("keydown", function(e){
	var textValue = this.value;
	
	document.querySelector("#text-display").innerHTML=textValue;
});

document.querySelector("#text-input").addEventListener("keyup", function(e){
	var textValue = this.value;
	
	document.querySelector("#text-display").innerHTML=textValue;
});