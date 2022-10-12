
// Exercise 6
const regularExpressions = {
	
	regFnameLname: /^[A-z\_\-]{3,12}$/,
	regEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\[a-zA-Z0-9-.]+$/,
	regPhone: /^\d{3,14}$/,
	regPassword: /^[a-zA-Z0-9]{3,12}$/
}

function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
