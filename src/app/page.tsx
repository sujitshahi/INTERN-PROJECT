import HomePage from "./component/HomePage/page";
import School_Facilities from "./School_Facilities/page";
import Teacher from "./Teacher/page";
import Classes from "./Classes/page";
import Appointment from "./Appointment/page";
import Popular_Teachers from "./Popular_Teacher/page";
import Testimonial from "./Testimonial/page";
import Extra from "./component/Extra";

export default function Page() {
  return (
    <div>
    <HomePage />
    <School_Facilities />
    <Extra />
    <Teacher />  
    <Classes />
    <Appointment />
    <Popular_Teachers />
    <Testimonial />
 
    </div>
  )
}
