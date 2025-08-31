import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen, toggleMenu }) => {
  const menuItems = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "Services", link: "#services" },
    { id: 3, title: "Subjects", link: "#subjects" },
    { id: 4, title: "Testimonials", link: "#testimonials" },
    { id: 5, title: "Contact Us", link: "#contact" },
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={toggleMenu} // close menu after click
                    className="hover:text-orange-600 duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
