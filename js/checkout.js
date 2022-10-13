// Exercise 6
const regularExpressions = {

	regFnameLname: /^[A-z\_\-]{3,12}$/,
	regEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	regPhone: /^\d{3,14}$/,
	regPassword: /^[a-zA-Z0-9]{3,12}$/,
	regdAdress: /^[a-zA-Z0-9]{3,100}$/
}

function validate() {
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
		error++;
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
		error++;
		lName.classList.add("is-invalid");
	} else {
		if (regularExpressions.regFnameLname.test(lName.value)) {
			lName.classList.add("is-valid");
		} else {
			lName.classList.add("is-invalid");
		}
	}
	/* Validate fEmail */
	if (fEmail.value == "") {
		error++;
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
		error++;
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
		error++;
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
		error++;
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