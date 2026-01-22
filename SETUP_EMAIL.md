# Email Setup Guide

Your portfolio contact form is configured to send you emails using your existing Yahoo Mail account!

## ✅ Already Configured!

Your Yahoo Mail credentials are already set up in `.env.local`:

```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=m.maboya@yahoo.com
EMAIL_PASSWORD=wekpqglwrdsgmbsm
EMAIL_FROM=m.maboya@yahoo.com
CONTACT_EMAIL=m.maboya@yahoo.com
```

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```

3. **Test the form:**
   - Visit http://localhost:3000
   - Scroll to the contact section
   - Fill out the form and submit
   - Check your Yahoo Mail inbox!

## What Happens When Someone Contacts You?

1. **Recruiter fills out the form** on your portfolio
2. **Beautiful HTML email sent** to m.maboya@yahoo.com
3. **Reply-to is set** to the recruiter's email - just hit reply!
4. **User sees confirmation** that their message was sent

## Email Features

✅ **Uses your existing Yahoo Mail** - no new accounts needed  
✅ **Beautiful HTML emails** with gradient design  
✅ **Reply-to functionality** - recruiters' emails auto-filled  
✅ **Input validation** - spam protection built-in  
✅ **Error handling** - helpful messages for users  
✅ **Plain text fallback** - works in all email clients  

## Security Notes

🔒 **Credentials are secure** - stored in `.env.local` (not committed to Git)  
🔒 **Server-side only** - email credentials never exposed to browser  
🔒 **App-specific password** - you're using Yahoo's secure app password  
🔒 **Input validation** - protects against injection attacks  

## Troubleshooting

**Not receiving emails?**
- Check Yahoo Mail spam folder
- Verify `.env.local` has correct credentials
- Check terminal for error messages
- Restart dev server: `Ctrl+C` then `npm run dev`

**"Connection refused" error?**
- Yahoo Mail might be blocking the connection
- Try generating a new app-specific password in Yahoo
- Check if port 587 is not blocked by firewall

**Form validation errors?**
- Ensure valid email format
- All fields must be filled
- Check browser console for details

## Yahoo Mail App Password

Your current password (`wekpqglwrdsgmbsm`) is an app-specific password, which is perfect for this use case. It's more secure than using your actual Yahoo password.

If you need to generate a new one:
1. Go to Yahoo Account Security
2. Generate App Password
3. Select "Other App"
4. Name it "Portfolio Contact Form"
5. Update `EMAIL_PASSWORD` in `.env.local`

---

**Ready to test!** Fill out your contact form and watch the emails arrive! 📧
