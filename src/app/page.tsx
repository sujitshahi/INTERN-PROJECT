import HomePage from "./component/homepage/page";
import School_Facilities from "./school_facilities/page";
import Extra from "./component/extra";
import Teacher from "./teacher/page";
import Classes from "./classes/page";
import Appointment from "./appointment/page";
import Popular_Teachers from "./popular_teacher/page";
import Testimonial from "./testimonial/page";

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
