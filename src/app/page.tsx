
import Extra from "./component/Extra";
import HomePage from "./component/homepage/Page";
import School_Facilities from "./school_facilities/page";
import Teacher from "./teacher/page";
import Classes from "./component/classes/page";
import Appointment from "./component/Appointment";

export default function Page() {
  return (
    <div>
    <HomePage />
    <School_Facilities />
    <Extra />
    <Teacher />
    <Classes />
    <Appointment />
       
      
    </div>
  )
}
