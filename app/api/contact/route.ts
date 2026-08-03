import { Resend } from "resend";


console.log(
  "KEY FOUND:",
  !!process.env.RESEND_API_KEY
);
console.log(process.env.RESEND_API_KEY);

const resend = new Resend(
  process.env.RESEND_API_KEY
);



export async function POST(request: Request) {

  try {

    const {
      name,
      email,
      company,
      subject,
      message,

    } = await request.json();



    const result = await resend.emails.send({

      from:
        "onboarding@resend.dev",


      to:
        ["kyranculture@gmail.com"],


      replyTo:
        email,


      subject:
        `Culture Holdings Inquiry - ${subject}`,


      html:

      `
      <h2>New Culture Holdings Website Inquiry</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Company:</strong> ${company}</p>

      <p><strong>Subject:</strong> ${subject}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>

      `,

    });



    console.log(result);



    return Response.json({

      success:true,

    });



  } catch(error: any) {


    console.error(
      "RESEND ERROR:",
      error
    );


    return Response.json(

      {
        success:false,
        error:error?.message || "Unknown error",
      },

      {
        status:500,
      }

    );


  }

}