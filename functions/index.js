
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { defineSecret } = require("firebase-functions/params"); // works with firebase-functions v4+

admin.initializeApp();

const GMAIL_USER = defineSecret("GMAIL_USER");
const GMAIL_PASS = defineSecret("GMAIL_PASS");

exports.akashcontacts = functions
  .runWith({
    secrets: ["GMAIL_USER", "GMAIL_PASS"],
    memory: "256MB",
    timeoutSeconds: 60,
  })
  .firestore
  .document("akashweb-contact/{docId}")
  .onCreate(async (snap, context) => {
    const data = snap.data() || {};
    // Access secret values at runtime (inside the handler)
    const user = GMAIL_USER.value();
    const pass = GMAIL_PASS.value();



    if (!user || !pass) {
      console.error("Missing Gmail credentials from Secret Manager.");
      return null;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const fullName = `${data.firstName || ""} ${data.lastName || ""}`.trim();
    const firstName = data.firstName || "";
    const lastName = data.lastName || "";
    const email = data.email || "";
    const phone = data.phone || "";
    const subject = data.subject || "";
    const message = data.message || "";
    const createdAt = data.createdAt?.toDate?.().toLocaleString() || new Date().toLocaleString();
    
        const html = `
  <body style="margin:0; padding:0; font-family:Arial, sans-serif; background:#f5f6fa;">

    <div style="max-width:600px; margin:20px auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1);">

      <!-- Header -->
      <div style="background:linear-gradient(135deg, #6a11cb, #2575fc); color:#fff; padding:20px; text-align:center;">
        <h2 style="margin:0; font-size:20px;">📩 New Contact Form Submission</h2>
        <p style="margin:5px 0 0; font-size:14px;">You have a new message from <a href="https://makashanwar.vercel.app/contactme/" style="text-decoration: none; color: white;">Contact Form || PGS</a></p>
      </div>

      <!-- Notice -->
      <div style="background:#fff3cd; color:#856404; padding:10px 15px; font-size:13px; border-bottom:1px solid #eee;">
        ⚡ Action Required: Please respond within 24 hours
      </div>

      <!-- Contact Information -->
      <div style="padding:20px;">
        <h3 style="margin:0 0 10px; font-size:16px; color:#333;">Contact Information</h3>
        <table style="width:100%; font-size:14px; color:#333; border-collapse:collapse;">
          <tr>
            <td style="padding:6px 0; width:80px; font-weight:bold;">NAME</td>
            <td style="padding:6px 0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-weight:bold;">EMAIL</td>
            <td style="padding:6px 0; color:#2575fc;">${email}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-weight:bold;">PHONE</td>
            <td style="padding:6px 0;">${phone || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-weight:bold;">SUBJECT</td>
            <td style="padding:6px 0;">${subject}</td>
          </tr>
        </table>
      </div>

      <!-- Message -->
      <div style="padding:0 20px 20px 20px;">
        <h3 style="margin:0 0 10px; font-size:16px; color:#333;">Message</h3>
        <div style="background:#f0f4ff; padding:15px; border-radius:6px; font-size:14px; color:#333; line-height:1.5;">
          ${message}
        </div>
      </div>

      <!-- Button -->
      <div style="text-align:center; padding:20px;">
        <a href="mailto:${email}" style="display:inline-block; background:linear-gradient(135deg,#6a11cb,#2575fc); color:#fff; text-decoration:none; font-size:14px; padding:12px 25px; border-radius:6px; font-weight:bold;">
          Reply via Email
        </a>
      </div>

      <!-- Footer -->
      <div style="background:#1a1a1a; color:#ccc; text-align:center; font-size:12px; padding:15px;">
        This is an automated notification from 
        <a href="https://makashanwar.vercel.app/" style="text-decoration: none; color: white;">Akash Anwar</a><br>
        © 2025 - All rights reserved.
      </div>
      
    </div>

  </body>
  `;

    try {
      await transporter.sendMail({
        from: user,
        to: "akashanwar01@gmail.com",
        subject: `New Contact from ${fullName || "No name"}`,
        html,
      });
      console.log("Email sent for doc:", context.params.docId);
    } catch (err) {
      console.error("Failed to send email:", err && err.message ? err.message : err);
    }

    return null;
  });

