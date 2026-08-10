"use server";

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email");

  console.log("Subscribed to newsletter:", email);
}