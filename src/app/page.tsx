
import Extra from "./component/Extra";
import HomePage from "./component/homepage/Page";
import School_Facilities from "./school_facilities/page";
import Teacher from "./teacher/page";
import Classes from "./classes/page";
import Appointment from "./appointment/page";
import Popular_Teachers from "./popular_teacher/page";

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
    </div>
  )
}
