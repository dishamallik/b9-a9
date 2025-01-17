import {Outlet} from "react-router-dom";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";
const Root = () => {
    return (
        <div>
            <Header></Header>
            <FirebaseProvider></FirebaseProvider>
            <Outlet></Outlet>
           <div className="w-full mt-20">
           <Footer></Footer>
           </div>
        </div>
    );
};
 
export default Root;