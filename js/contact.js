// Checks if the required fields of the form are not empty and disables/enables accordingly.
function manage(txt) {
    let bt = document.getElementById('submit');
    let ele = document.getElementsByTagName('input');

    // Loop through each element.
    for (i = 0; i < ele.length; i++) {

        // Check the element type and if it is required .
        if ((ele[i].type == "text" || ele[i].type == "email") && ele[i].value == "" && ele[i].required == true) {
            bt.disabled = true;    // Disable the button.
            return false;
        }
        else {
            bt.disabled = false;   // Enable the button.
        }
    }
}

// Prints a text in the console and alerts after the submit button is clicked.
function submit() {
    let txt;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let comments = document.getElementById('comments').value;
    let radio = document.getElementsByName('progexp');
    let progexp;

    // Getting the checked radio element.
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            progexp = radio[i].value;
        }
    }

    // Creating the text.
    txt = `First Name : ${fname}, Last Name: ${lname}, Email: ${email}, Comment: ${comments}, Programming Experience: ${progexp}.`
    console.log(txt);
    alert(txt);
}

// Gets a reference to the form element.
const form = document.getElementById('form');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function(e) {

    // Prevents default submit function.
    e.preventDefault();
    submit();
    let ele = document.getElementsByTagName('input');

    // Loop through each element to restart the form.
    for (i = 0; i < ele.length; i++) {

        // Check the element type and delete value if needed.
        if (ele[i].type == "text" || ele[i].type == "email") {
            ele[i].value = '';
        }
        else {

            // Checking the default radio element.
            if (ele[i].type == "radio" && ele[i].value == "No experience at all") {
                ele[i].checked = true;
            }
        }
    }
    document.getElementById('submit').disabled = true;
});