import { Link } from "react-router-dom";
import Header from "../components/headers/header";
import Footer from  "../components/footer/footer";

function Courses(){
    return(
        <>
        <Footer/>
        <Link to = "python"/>
        <Link to = "javascript"/>
        <Link to = "cplusplus"/>
        
        <Header/>
        </>
    )
}


export default Courses;
