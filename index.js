const formEle = document.getElementById("form");
const passwordEle = document.getElementById("password");
const cnfPasswordEle = document.getElementById("cnfPassword");
const messageContainerEle = document.querySelector(".message_container");
const message = document.getElementById("message");

let isValid = false;
let isPasswordMatch = false;

const validateForm = () => {
	// USING CONSTRAINTS API
	isValid = form.checkValidity();

	// STYLE MAIN MESSAGE FOR AN ERROR
	if (!isValid) {
		message.textContent = "Please Fill out all Fields.";
		message.style.color = "red";
		messageContainerEle.style.borderColor = "red";

		return;
	}

	// CHECK TO SEE IF PASSWORDS MATCH
	if (passwordEle.value === cnfPasswordEle.value) {
		isPasswordMatch = true;
		passwordEle.style.borderColor = "lawngreen";
		cnfPasswordEle.style.borderColor = "lawngreen";

		// return;
	} else {
		isPasswordMatch = false;

		message.textContent = "Make sure your password matches";
		message.style.color = "red";
		messageContainerEle.style.borderColor = "red";
		passwordEle.style.borderColor = "red";
		cnfPasswordEle.style.borderColor = "red";

		return;
	}

	// IF FORM IS VALID AND PASSWORDS MATCHES
	if (isPasswordMatch && isValid) {
		message.textContent = "Successfully Registered";
		message.style.color = "lawngreen";
		messageContainerEle.style.borderColor = "lawngreen";
	}
};

const storeFormData = () => {
	const userData = {
		name: formEle.fullName.value,
		phone: formEle.phone.value,
		username: formEle.username.value,
		password: formEle.password.value,
		email: formEle.email.value,
		websiteURL: formEle.websiteURL.value,
	};

	console.log(userData);
};

const processFormData = (e) => {
	e.preventDefault();
	// console.log(e);

	// VALIDATE FORM
	validateForm();

	if (isValid && isPasswordMatch) {
		storeFormData();
	}
};

// FOR OUR EVENT LISTENER
formEle.addEventListener("submit", processFormData);
