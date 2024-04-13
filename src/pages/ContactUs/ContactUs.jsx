// aos 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

import {Helmet} from "react-helmet";
const ContactUs = () => {

// aos animation
useEffect(()=>{
    AOS.init({duration: "1500"})

},[])

    return (
        <div>

<Helmet>
                <meta charSet="utf-8" />
                <title>About us-COZYSTAY</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>



           <div className="mt-5 bg-blue-100 min-h-screen py-12" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-poppins">About CozyStay</h1>
          <p className="mt-4 text-lg text-gray-900 font-poppins">Your go-to destination for finding cozy accommodations for your perfect getaway.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose prose-lg text-gray-600 font-poppins">
            <p>CozyStay is committed to providing travelers with the best possible experience when searching for accommodations for their trips. Whether you're planning a relaxing vacation, a business trip, or a romantic getaway, we have a wide range of options to suit your needs.</p>
            <p>Our platform connects travelers with a variety of lodging options, including hotels, motels, resorts, and vacation rentals. With easy-to-use search filters and detailed property listings, finding the perfect place to stay has never been easier.</p>
            <p>At CozyStay, we prioritize quality, comfort, and convenience, ensuring that our guests have a memorable and enjoyable stay wherever they go.</p>
          </div>

          <div>
            <img className="rounded-lg shadow-lg max-w-xs lg:max-w-sm" data-aos="zoom-in-up" src="https://i.ibb.co/BNH1HGj/hotel.jpg" alt="Hotel" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img className="rounded-lg shadow-lg max-w-xs lg:max-w-sm " data-aos="zoom-in-up" src="https://i.ibb.co/TqS19pb/resort.jpg" alt="Resort" />
          </div>

          <div className="prose prose-lg text-gray-600 font-poppins">
            <p>Whether you're traveling solo, with family, or with friends, CozyStay has something for everyone. From luxurious resorts with stunning ocean views to charming bed and breakfasts nestled in the countryside, our diverse selection of accommodations caters to all preferences and budgets.</p>
            <p>Join millions of travelers who trust CozyStay to find their perfect accommodations and make unforgettable memories on their journeys. Start planning your next adventure with CozyStay today!</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose prose-lg text-gray-600 font-poppins">
            <p>Our mission is to make travel planning hassle-free and enjoyable for everyone. With CozyStay, you can explore unique destinations, discover hidden gems, and book accommodations with confidence.</p>
            <p>Experience the joy of travel with CozyStay and embark on unforgettable adventures around the world. Whether you're seeking relaxation, adventure, or cultural immersion, we're here to help you find the perfect place to stay.</p>
          </div>

          <div>
            <img className="rounded-lg shadow-lg max-w-xs lg:max-w-sm" data-aos="zoom-in-up" src="https://i.ibb.co/MNmJmwK/rental.jpg" alt="Vacation Rental" />
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ContactUs;