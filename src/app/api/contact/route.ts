import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try{
        const { name, email, reason, message } = await request.json();

        console.log({
            name,
            email,
            reason,
            message,
        });

        await resend.emails.send({
            from: "Portfolio <contact@nathannolacio.dev>",
            to: process.env.CONTACT_EMAIL!,
            subject: `Portfolio Contact (${reason}) - ${name}`,
            replyTo: email,
            html: `
                <h2>New Contact Message</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Reason:</strong> ${reason}</p>

                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Failed to send email" },
            { status: 500 }
        );
    }
}