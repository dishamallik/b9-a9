import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="container mx-auto py-8 bg-green-100">
      <h1 className="text-3xl font-bold mb-8 text-center font-poppins">Contact Us</h1>
      <div className="max-w-lg mx-auto bg-orange-50 rounded-lg shadow-lg p-6 text-center">
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">Phone Number:</p>
          <p className="text-gray-800">(123) 456-7890</p>
        </div>
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">Email:</p>
          <p className="text-gray-800">info@example.com</p>
        </div>
        <div className="mb-6">
        <p className=" font-semibold mb-2">You can also follow us on</p>
         <div className="flex justify-center gap-4">
         <p ><FaTwitter /></p>
          <p ><IoLogoGithub /></p>
          <p ><FaInstagram /></p>
         </div>
          
        </div>
      </div>
    </div>
    );
};

export default Contact;