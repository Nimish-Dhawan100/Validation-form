const Email = document.getElementById("Email")
const Password = document.getElementById("Password")
const Username = document.getElementById("Username")
const Phone = document.getElementById("Phone")
const ConfirmPassword = document.getElementById("ConfirmPassword")
const UsernameError = document.getElementById("UsernameError")
const PhoneError = document.getElementById("PhoneError")
const EmailError = document.getElementById("EmailError")
const PasswordError = document.getElementById("PasswordError")
const SubmitError = document.getElementById("SubmitError")
const ConfirmPasswordError = document.getElementById("ConfirmPasswordError")
const reset = document.getElementById("reset")
let check = true;

const ValidateEmail = () => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email.value)) {
        EmailError.innerHTML = ""
    }
    else {
        EmailError.innerHTML = "Enter a valid Email Address"
        EmailError.classList.add("error")
        check = false
    }
}
const ValidatePhone = () => {
    if (
        /^\d{10}$/.test(
            Phone.value
        )
    ) {
        PhoneError.innerHTML = ""
    }
    else {
        PhoneError.innerHTML = "Enter a valid Phone Number"
        PhoneError.classList.add("error")
        check = false
    }
}
const ValidatePassword = () => {
    if (
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(
            Password.value
        )
    ) {
        PasswordError.innerHTML = ""
    }
    else {
        PasswordError.innerHTML = "Enter a strong Password"
        check = false
        PasswordError.classList.add("error")
    }
}
const ValidateUsername = () => {
    if (
        /^[a-zA-Z0-9]([a-zA-Z0-9]){6,18}$/.test(
            Username.value
        )
    ) {
        UsernameError.innerHTML = ""
    }
    else {
        UsernameError.innerHTML = "Enter a valid Username"
        check = false
        UsernameError.classList.add("error")
    }
}
const confirmPassword = () => {
    if (
        ConfirmPassword.value === Password.value && check
    ) {
        ConfirmPassword.innerHTML = ""
    }
    else {
        ConfirmPasswordError.innerHTML = "Re-Enter Correct Password"
        check = false
        ConfirmPasswordError.classList.add("error")
    }
}

const Validation = () => {
    check = true
    ValidateUsername()
    ValidateEmail()
    ValidatePassword()
    ValidatePhone()
    confirmPassword()
    if (!check) {
        SubmitError.innerHTML = "Failed to Submit the Form"
        reset.classList.remove("clear")
        SubmitError.classList.add("error")
    } else {
        reset.classList.add("clear")
        alert("form submitted successfully")
    }
}

const resetForm = () => {
    reset.classList.add("clear")
    UsernameError.innerHTML = ""
    SubmitError.innerHTML = ""
    EmailError.innerHTML = ""
    PasswordError.innerHTML = ""
    ConfirmPasswordError.innerHTML = ""
    PhoneError.innerHTML = ""
    check = true
    SubmitError.classList.remove("error submitted")
}


