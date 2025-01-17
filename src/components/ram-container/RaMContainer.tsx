
import { NavLink } from "react-router";
import RaMForm from "./ram-form/RamForm";
import { useParams } from "react-router";

const RaMContainer = () => {
    const { count = 1 } = useParams(); 

    return (
    <>
    <NavLink to={`/${count}`}> </NavLink> 
    <RaMForm/>
    

    </>   
     );
}


export default RaMContainer;
