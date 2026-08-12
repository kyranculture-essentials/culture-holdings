import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      company,
      subject,
      message,
    } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return Response.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <h2>New Culture Holdings Website Inquiry</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Company:</strong> ${company || "Not provided"}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>
    `;

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["kyranculture@gmail.com"],
      replyTo: email,
      subject: `Culture Holdings Inquiry - ${subject}`,
      html,
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);

      return Response.json(
        {
          success: false,
          error: "Unable to send your message.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Unable to process your request.",
      },
      { status: 500 }
    );
  }
}