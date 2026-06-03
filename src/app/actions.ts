"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend("re_hWToxbXt_NThZKE3ez1qSHBW4d5wngDzV");

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const business = formData.get("business") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: "GrowthGrid <onboarding@resend.dev>",
      to: ["growthgridlab@gmail.com"],
      subject: `New Lead: ${service} from ${name}`,
      text: `
        Name: ${name}
        Business: ${business}
        Phone: ${phone}
        Email: ${email}
        Service: ${service}
        Message: ${message}
      `,
    });
    
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong. Please try again." };
  }
}
