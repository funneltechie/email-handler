# Email Parameter Auto-Fill Script

This JavaScript utility automatically decodes a Base64-encoded email address from the URL and injects it into an email input field on your webpage. It’s perfect for use cases like opt-in confirmations, manage-preferences pages, or personalized form pre-fills — especially when you want to avoid exposing raw email addresses in URLs.

## 🚀 Features

- Detects and decodes the `encoded_email` query parameter (Base64)
- Waits for the DOM to fully load
- Polls for a dynamic form field (`input[name="email"]`) until found
- Injects the decoded email value into the field
- Graceful error handling and developer-friendly console logs

## 🧠 Example Use Case

If you send users to a page like:

https://yourdomain.com/preferences?encoded_email=am9obi5kb2VAZXhhbXBsZS5jb20=


The script will decode the email (`john.doe@example.com`) and auto-fill it into the form’s `email` input field.

## 🔧 Usage

1. **Include the script** in your HTML page:
   ```html
   <script src="path/to/email-handler.js"></script>
