import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div id="contact" style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
            {/* brand info section */}
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <MdComputer className="text-secondary text-4xl" />
                <p className="">E-Tutor</p>
              </div>
              <p>
                E-Tutor is your trusted online learning platform, 
                helping students achieve success anytime, anywhere 
                with expert guidance and flexible study resources.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a href="#" className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-secondary duration-200">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>

            {/* Footer Links  */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
              {/* Important Links */}
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold mb-5">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="hover:text-secondary duration-200">Home</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">About</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Services</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Contact</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold mb-5">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="hover:text-secondary duration-200">Study Guides</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Practice Tests</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">Blog</a></li>
                  <li><a href="#" className="hover:text-secondary duration-200">FAQs</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold mb-5">
                  Contact Us
                </h1>
                <ul className="flex flex-col gap-3 text-sm">
                  <li>Email: support@etutor.com</li>
                  <li>Phone: +62 812 3456 7890</li>
                  <li>Location: Jakarta, Indonesia</li>
                </ul>
              </div>
            </div>
          </div>

          {/* copyright section  */}
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-800/10">
              <span className="text-sm text-black/60">
                © 2024 E-Tutor. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
