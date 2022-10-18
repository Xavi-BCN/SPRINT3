let arrayRecojido = JSON.parse(localStorage.getItem("listaCompra"));
console.log(arrayRecojido);
// localStorage.removeItem("listaCompra");
// console.log(arrayRecojido);

// Exercise 6
const formulary =document.getElementById("form-checkout");
const inputs = document.querySelectorAll("#form-checkout input");
const regularExpressions = {
	regFnameLname: /^[A-z\_\-]{3,12}$/,
	regEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	regPhone: /^\d{3,14}$/,
	regPassword: /^[a-zA-Z0-9]{3,12}$/,
	regdAdress: /^[a-zA-Z0-9]{3,100}$/
}

// Validate field with regular expressions
const validate = (element) => {
	noValidField = 0;
	switch (element.target.name){
		case "fName":
			if (regularExpressions.regFnameLname.test(fName.value)) {
				fName.classList.remove("is-invalid");
				fName.classList.add("is-valid");
			} else {
				fName.classList.remove("is-valid");
				fName.classList.add("is-invalid");
			}
		break;
		case "fLastN":
			if (regularExpressions.regFnameLname.test(fLastN.value)) {
				fLastN.classList.remove("is-invalid");
				fLastN.classList.add("is-valid");
			} else {
				fLastN.classList.remove("is-valid");
				fLastN.classList.add("is-invalid");
			}
		break;
		case "fEmail":
			if (regularExpressions.regEmail.test(fEmail.value)) {
				fEmail.classList.remove("is-invalid");
				fEmail.classList.add("is-valid");
			} else {
				fEmail.classList.remove("is-valid");
				fEmail.classList.add("is-invalid");
			}
		break;
		case "fPassword":
			if (regularExpressions.regPassword.test(fPassword.value)) {
				fPassword.classList.remove("is-invalid");
				fPassword.classList.add("is-valid");
				} else {
				fPassword.classList.remove("is-valid");
				fPassword.classList.add("is-invalid");
			}
		break;
		case "fAddress":
			if (regularExpressions.regdAdress.test(fAddress.value)) {
				fAddress.classList.remove("is-invalid");
				fAddress.classList.add("is-valid");
				} else {
				fAddress.classList.remove("is-valid");
				fAddress.classList.add("is-invalid");
			}
		break;
		case "fPhone":
			if (regularExpressions.regPhone.test(fPhone.value)) {
				fPhone.classList.remove("is-invalid");
				fPhone.classList.add("is-valid");
				} else {
				fPhone.classList.remove("is-valid");
				fPhone.classList.add("is-invalid");
			}
		break;
	}
}

// It waits for events in the fields and sends them to the "validate" function
inputs.forEach((input) => {
	input.addEventListener("keyup", validate);
	input.addEventListener("blur", validate);
});

 formulary.addEventListener("button", (element) => {
	element.preventDefault;
});

// Verify form (empty and valid inputs) with button SAVE
function checkEmpty(){
	let error = 0;
	let noValidField = 0;
	let isfieldNotWrite ;
	inputs.forEach((input) => {
		isfieldNotWrite = input.value;
		isfieldNotWrite == "" ? error++ : console.log("Field contain data");
		input.classList.contains('is-invalid') ? noValidField++ : console.log("Correct field"); 
		});
	
	if (error > 0 || noValidField > 0){
		alert("Some field is empty or contain some error");
	}else if(error == 0 && noValidField == 0){
		alert("The form is correct, thank's. Now return to home page");
		window.location.href="http://127.0.0.1:5500/SPRINT3/index.html";
	};
}

//******* NO USED:  it's old version code *****
function validateOld() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let lName = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");


	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");
	let errorEmail = document.getElementById("errorEmail");
	let errorPassword = document.getElementById("errorPassword");
	let errorAddress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	/* Validate fName */
	if (fName.value == "") {
		
		fName.classList.add("is-invalid");
	} else {
		if (regularExpressions.regFnameLname.test(fName.value)) {
			fName.classList.add("is-valid")
		} else {
			fName.classList.add("is-invalid");
		}
	}
	/* Validate lName */
	if (lName.value == "") {
		
		lName.classList.add("is-invalid");
	} else {
		if (regularExpressions.regFnameLname.test(lName.value)) {
			lName.classList.add("is-valid");
		} else {
			lName.classList.add("is-invalid");
			lName.focus;
		}
	}
	/* Validate fEmail */
	if (fEmail.value == "") {
		
		fEmail.classList.add("is-invalid");
	} else {
		if (regularExpressions.regEmail.test(fEmail.value)) {
			fEmail.classList.add("is-valid");
		} else {
			fEmail.classList.add("is-invalid");
		}
	}
	/* Validate fPassword */
	if (fPassword.value == "") {
		
		fPassword.classList.add("is-invalid");
	} else {
		if (regularExpressions.regPassword.test(fPassword.value)) {
			fPassword.classList.add("is-valid");
		} else {
			fPassword.classList.add("is-invalid");
		}
	}
	/* Validate fAddress */
	if (fAddress.value == "") {
		
		fAddress.classList.add("is-invalid");
	} else {
		if (regularExpressions.regdAdress.test(fAddress.value)) {
			fAddress.classList.add("is-valid");
		} else {
			fAddress.classList.add("is-invalid");
		}
	}
	/* Validate fPhone */
	if (fPhone.value == "") {
		fPhone.classList.add("is-invalid");
	} else {
		if (regularExpressions.regPhone.test(fPhone.value)) {
			fPhone.classList.add("is-valid");
		} else {
			fPhone.classList.add("is-invalid");
		}
	}

	if (error > 0) {
		
		alert(`You have ${error} blanck inputs. Please carrect these inputs`);

	} else {
		alert("Perfect, form is correct. You can continue");
	} 

}