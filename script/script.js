// Receives a string returns a bool indicating if string has valid format
function validateEmail(emailString) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailString);
}

// Receives a string returns a bool indicating if string has valid format
function validatePhone(phoneString) {
    const re = /^\d{4}\d+$/;
    return re.test(phoneString);
}

function validateName(nameString) {
    const re = /^[a-zA-Z\s][a-zA-Z\s]*$/
    return re.test(nameString);
}

// Instance object manually
// var name = new Object();

// Literal object instantiation
// var name = {};

// Instance regular expression
// var reg = new RegExp("asdadad");

// Literal regex instantiation
// var reg = /asdasdasdasdasd/g;

function enviar()
{
    var errorBox = document.getElementById("errorBox");

    // Clear any previous error message
    errorBox.style.display = "none";
    errorBox.innerHTML = ""; // Removes text from the error box

    // Validate email
    var emailInput = document.getElementById("email"); // Get the input element
    var emailValue = emailInput.value; // The value that has entered the user
    var isCorrectEmail = validateEmail(emailValue); // Validate the email!!!
    
    // If email hasn't valid format...
    if (emailValue.length === 0)
    {
        errorBox.style.display = "block";
        errorBox.innerHTML = "Enter an email address";
    }
    else if (!isCorrectEmail)
    {
        errorBox.style.display = "block";
        errorBox.innerHTML = "Email has invalid format";
    }

    // Validate phone
    var errorBoxTel = document.getElementById("errorBoxtel");
    var nameInput = document.getElementById("phone"); // Get the input element
    var nameValue = nameInput.value; // The value that has entered the user
    var isCorrectPhone = validatePhone(nameValue); // Validate the email!!!
    
    // Clear any previous error message
    errorBoxTel.style.display = "none";
    errorBoxTel.innerHTML = ""; // Removes text from the error box

    // If email hasn't valid format...
    if (nameValue.length === 0)
    {
        errorBoxTel.style.display = "block";
        errorBoxTel.innerHTML = "Enter a phone";
    }
    else if (!isCorrectPhone)
    {
        errorBoxTel.style.display = "block";
        errorBoxTel.innerHTML = "Phone has invalid format";
    }

    // Validate nombre
    var errorBoxName = document.getElementById("errorboxname");
    var nameInput = document.getElementById("name"); // Get the input element
    var nameValue = nameInput.value; // The value that has entered the user
    var isCorrectName = validateName(nameValue); // Validate the email!!!
    
    // Clear any previous error message
    errorBoxName.style.display = "none";
    errorBoxName.innerHTML = ""; // Removes text from the error box

    // If email hasn't valid format...
    if (nameValue.length === 0)
    {
        errorBoxName.style.display = "block";
        errorBoxName.innerHTML = "Enter a name";
    }
    else if (!isCorrectName)
    {
        errorBoxName.style.display = "block";
        errorBoxName.innerHTML = "Name has invalid format";
    }

    // Validate subject
    var errorBoxSubject = document.getElementById("errorSubject");
    var subjectInput = document.getElementById("subject");
    var msgInput = document.getElementById("msg");

    errorBoxSubject.style.display = "none";
    errorBoxSubject.innerHTML = "";

    if (subjectInput.value.length == 0 || msgInput.value.length == 0)
    {
        errorBoxSubject.style.display = "block";
        errorBoxSubject.innerHTML = "You must specify a subject and its message";
    }

    // send form to a server....
}