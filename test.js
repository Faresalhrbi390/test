const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

const handleFormData = (e) => {
    e.preventDefault();

    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const workphoneInput = document.getElementById("workphone");
    const HomephoneInput = document.getElementById("Homephone");
    const CellphoneInput = document.getElementById("Cellphone");
    const FaxInput = document.getElementById("Fax");
    const AddressInput = document.getElementById("Address");
    const Address2Input = document.getElementById("Address2");
    const CityInput = document.getElementById("City");
    const StateInput = document.getElementById("State");
    const ZipInput = document.getElementById("Zip");
    const CountryInput = document.getElementById("Country");




    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const workphone = workphoneInput.value.trim();
    const Homephone = HomephoneInput.value.trim();
    const Cellphone = CellphoneInput.value.trim();
    const Faxname = FaxInput.value.trim();
    const Address = AddressInput.value.trim();
    const Address2 = Address2Input.value.trim();
    const City = CityInput.value.trim();
    const Statename = StateInput.value.trim();
    const Zip = ZipInput.value.trim();
    const Country = CountryInput.value.trim();
 
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(emailAddress)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (Orginazation === "") {
        showError(OrginazationInput, "Enter your Orginazation");
    }
    if (Workphone === "") {
        showError(WorkphoneInput, "Enter your workphone");
    }
    if (HomePhone === "") {
        showError(HomePhoneInput, "Enter your homephone");
    }
    if (Cellphone === "") {
        showError(CellphoneInput, "Enter your Cellphone");
    }
    if (Fax === "") {
        showError(FaxInput, "Enter your Fax");
    }
    if (Address === "") {
        showError(AddressInput, "Enter your Address");
    }
    if (Address2 === "") {
        showError(Address2Input, "Enter your Address2");
    }
    if (City === "") {
        showError(CityInput, "Enter your City");
    }
    if (State === "") {
        showError(StateInput, "Enter your State");
    }
    if (Zip === "") {
        showError(ZipInput, "Enter your Zip");
    }
    if (Country === "") {
        showError(ZipInput, "Enter your Country");
    }


    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;
    // Submitting the form
    form.submit();
}
// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
// Handling form submission event
form.addEventListener("submit", handleFormData);


