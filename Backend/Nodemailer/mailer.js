const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
  },
});

const fileFilter = (req, file, cb) => {
  const fileType = path.extname(file.originalname).toLowerCase();
  if (fileType === ".pdf") {
    cb(null, true); 
  } else {
    cb(new Error("Only PDF files are allowed!"), false); 
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, 
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shahnizamkhan1122@gmail.com", 
    pass: "uofnfeqnjzcusved",  
  },
});

router.post("/send_email", upload.single("file"), async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !email.trim()) {
    return res.status(400).json({ STATUS: "ERROR", MESSAGE: "Missing parameter email" });
  }
  if (!subject || !subject.trim()) {
    return res.status(400).json({ STATUS: "ERROR", MESSAGE: "Missing parameter subject" });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ STATUS: "ERROR", MESSAGE: "Missing parameter message" });
  }

  const file = req.file;

  if (file && !file.mimetype.includes("pdf")) {
    return res.status(400).json({ STATUS: "ERROR", MESSAGE: "Invalid file type. Only PDF files are allowed." });
  }

  let mailOptions = {
    from: email,
    to: "shahnizamkhan1122@gmail.com",
    subject: subject,
    html: `<p><strong>From:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    attachments: file
      ? [
          {
            filename: file.originalname,
            path: file.path,
          },
        ]
      : [],
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({
      STATUS: "SUCCESSFUL",
      MESSAGE: "Your message has been sent successfully",
    });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({
      STATUS: "ERROR",
      MESSAGE: "Failed to send message. Please try again later.",
      ERROR: error,
    });
  }
});

router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ STATUS: "ERROR", MESSAGE: err.message });
  } else if (err) {
    return res.status(400).json({ STATUS: "ERROR", MESSAGE: err.message });
  }
  next();
});

module.exports = router;


