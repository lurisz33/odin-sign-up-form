const statusContainer =document.getElementById('statusField');

function checkPassword(form) {
    let password1 = form.password.value;
    let password2 = form.confirmPassword.value;

    if (password1 === password2) {
        statusContainer.textContent = "";
        return true;
    } else {
        statusContainer.textContent = "Please enter equal passwords";
        return false;
    }
}