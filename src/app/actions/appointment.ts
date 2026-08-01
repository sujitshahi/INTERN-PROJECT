"use server";

import { after } from "next/server";

export async function submitAppointment(formData: FormData) {
  const data = {
    guardianName: formData.get("guardianName"),
    guardianEmail: formData.get("guardianEmail"),
    childName: formData.get("childName"),
    childAge: formData.get("childAge"),
    message: formData.get("message"),
  };

  // Run side effects (logging, DB writes, email sending, analytics) 
  // after the response has been sent back to the user
  after(() => {
    console.log("Appointment submitted:", data);
  });
}