import School_Facilities from "@/app/School_Facilities/page";
import HomePage from "./Homepage";
import Extra from "../Extra";
import Teacher from "@/app/Teacher/page";
import Classes from "@/app/Classes/page";
import Appointment from "@/app/Appointment/page";
import Popular_Teacher from "@/app/Popular_Teacher/page";
import Testimonial from "@/app/Testimonial/page";




export default function Page() {
  return (
    <div>
    <HomePage />
    <School_Facilities />
    <Extra />
    <Teacher />  
    <Classes />
    <Appointment />
    <Popular_Teacher />
    <Testimonial />
 
    </div>
  )
}