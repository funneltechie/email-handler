console.log("Email Parameter Handler Script loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed.");

    // Function to get query parameters from the URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Decode Base64 string
    function decodeBase64(encodedString) {
        try {
            return atob(encodedString); // Built-in Base64 decoding
        } catch (error) {
            console.error("Error decoding Base64:", error);
            return null;
        }
    }

    // Poll for the email input field and populate it
    function pollForEmailField() {
        const emailField = document.querySelector('input[name="email"]');
        if (emailField) {
            console.log("Email input field found.");

            // Get the encoded email parameter
            const encodedEmail = getQueryParam("encoded_email");
            if (encodedEmail) {
                const decodedEmail = decodeBase64(encodedEmail);
                if (decodedEmail) {
                    emailField.value = decodedEmail;
                    console.log("Email field populated with:", decodedEmail);
                } else {
                    console.error("Failed to decode email parameter.");
                }
            } else {
                console.warn("No encoded_email parameter found in the URL.");
            }

            // Stop polling once the field is found and updated
            clearInterval(pollingInterval);
        } else {
            console.log("Email input field not found. Retrying...");
        }
    }

    // Start polling every 100ms
    const pollingInterval = setInterval(pollForEmailField, 100);
});
