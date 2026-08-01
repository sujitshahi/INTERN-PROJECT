"use server";

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get("email");
  // Send email to API / database
}