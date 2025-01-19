console.log("Email Parameter Handler Script loaded successfully.");
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedEmail = urlParams.get("encoded_email");
    if (encodedEmail) {
        const decodedEmail = atob(encodedEmail);
        const emailField = document.querySelector('input[name="email"]');
        if (emailField) {
            emailField.value = decodedEmail;
            console.log("Email field populated with:", decodedEmail);
        } else {
            console.warn("Email input field not found.");
        }
    }
});
