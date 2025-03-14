import { NextApiRequest, NextApiResponse } from 'next';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    comment: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, phone, comment }: ContactForm = req.body;

    // Basic Validation
    if (!name || !email || !phone || !comment) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        // Example: Save to database or send an email
        // Here you can integrate with Nodemailer, SendGrid, etc.
        console.log("Form Data Received:", req.body);

        return res.status(200).json({ message: "Message sent successfully!" });
    } catch {
        return res.status(500).json({ message: "Something went wrong!" });
    }
}
