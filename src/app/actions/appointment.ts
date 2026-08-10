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
  
  after(() => {
    console.log("Appointment submitted:", data);
  });
}