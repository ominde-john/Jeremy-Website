# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to make it work:

## Step 1: Create an EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Connect Your Gmail Account
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Create New Service**
3. Select **Gmail** as the service type
4. Name it something like "Gmail Service" (e.g., `gmail_service`)
5. Click **Connect Account**
6. Sign in with your Gmail account (codemaster5362@gmail.com)
7. Grant EmailJS permission to send emails on your behalf
8. Click **Create Service** to confirm

**Note:** Gmail may require an app-specific password if you have 2FA enabled:
- Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Select "Mail" and "Windows Computer" (or your device)
- Copy the generated password and use it in EmailJS

## Step 3: Create an Email Template
1. In the EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Set up your template like this:

### Template Setup:
- **From Name:** `{{from_name}}`
- **From Email:** `{{from_email}}`
- **To Email:** `codemaster5362@gmail.com`
- **Subject:** `New Contact Form Submission: {{subject}}`

### Template Content (HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f5f5f5; padding: 15px; border-radius: 5px; }
        .content { margin-top: 20px; line-height: 1.6; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0066cc; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Message from Your Website</h2>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">From:</span> {{from_name}} ({{from_email}})
            </div>
            <div class="field">
                <span class="label">Subject:</span> {{subject}}
            </div>
            <div class="field">
                <span class="label">Message:</span>
                <p>{{message}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

4. Click **Save** and note your **Template ID** (looks like: `template_abc123xyz`)

## Step 4: Get Your Credentials
You need three things:

### Find Your Public Key:
1. Go to **Account Settings** → **API Keys**
2. Copy your **Public Key** (looks like: `abc123def456ghi789`)

### Find Your Service ID:
1. Go to **Email Services**
2. Copy the Service ID from the Gmail service you created (looks like: `gmail_service` or similar)

### Template ID:
- Already noted from Step 3

## Step 5: Update Your Code
Open [src/components/Connect.tsx](src/components/Connect.tsx) and replace these lines at the top:

```typescript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';
```

With your actual credentials:

```typescript
const EMAILJS_PUBLIC_KEY = 'abc123def456ghi789';  // Your public key
const EMAILJS_SERVICE_ID = 'gmail_service';        // Your service ID
const EMAILJS_TEMPLATE_ID = 'template_abc123xyz'; // Your template ID
```

⚠️ **Security Note:** For production, consider moving these to environment variables:
```typescript
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
```

Then create a `.env.local` file with these values.

## Step 6: Test Your Form
1. Run your development server: `npm run dev`
2. Fill out the contact form on your website
3. Click "Send Message"
4. You should receive the email at codemaster5362@gmail.com within a few seconds

## Troubleshooting

### "Failed to send message" error:
- Verify all three credentials are correct
- Check that your Gmail service is connected in EmailJS dashboard
- Make sure you're using an app-specific password if Gmail 2FA is enabled

### Email not received:
- Check your spam/promotions folder
- Verify the template is configured correctly
- Test sending from the EmailJS dashboard directly

### CORS Issues:
- EmailJS is designed to work from the frontend, so CORS shouldn't be an issue
- If you get CORS errors, verify your domain is whitelisted in EmailJS settings

## Free EmailJS Limits
- Free tier: 200 emails per month
- Sufficient for a portfolio/contact form
- Upgrade to paid plan if you need more

---

Once configured, visitors to your website can submit messages and they'll be sent directly to your Gmail inbox!
