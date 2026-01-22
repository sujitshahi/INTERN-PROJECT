import HomePage from "./component/HomePage/page";
import School_Facilities from "./School_Facilities/page";
import Teacher from "./Teacher/page";
// import Classes from "./Classes/page";
import Appointment from "./Appointment/page";
import Popular_Teachers from "./Popular_Teacher/page";
import Testimonial from "./Testimonial/page";
import Extra from "./component/Extra";
// import classes from "./Classes/page";
import Classes from "./classes/page";

export default function Page() {
  return (
    <div>
    <HomePage />
    <School_Facilities />
    <Extra />
    <Teacher />
    {/* <Classes /> */}
    <Appointment />
    <Popular_Teachers />
    <Testimonial />
    <Classes /> 
    </div>
  )
}
