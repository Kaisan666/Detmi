import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/headerPY";

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
