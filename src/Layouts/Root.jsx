import {Outlet} from "react-router-dom";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           <div className="border-solid">
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;