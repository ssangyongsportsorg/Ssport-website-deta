import { Resend } from "resend";
import { WelcomeEmail } from "../../pages/components/emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendWelcomeEmail({name, email}: {name: string | null | undefined, email: string | null | undefined}) {
  const emailTemplate = WelcomeEmail({ name });
  try {
    // Send the email using the Resend API
    await resend.emails.send({
      from: "Marc from Papermark <support@ssangyongsport.eu.org>",
      to: email as string,
      subject: "Welcome to Papermark!",
      react: emailTemplate,
    });
  } catch (error) {
    // Log any errors and re-throw the error
    console.log({ error });
    throw error;
  }
}
