import React from "react";
import { HomeIcon, UserRoundSearch, Newspaper, Tv2, Send } from "lucide-react";
import { Link } from "react-scroll";
import Logo from '../assets/logotop.svg'
const Nav = [
  {
    id: 1,
    name: "Home",
    icon: HomeIcon,
    Link: "home",
  },
  {
    id: 2,
    name: "About",
    icon: UserRoundSearch,
    Link: "about",
  },
  {
    id: 3,
    name: "Resume",
    icon: Newspaper,
    Link: "resume",
  },
  {
    id: 4,
    name: "Portfolio",
    icon: Tv2,
    Link: "portfolio",
  },
  {
    id: 5,
    name: "Contact",
    icon: Send,
    Link: "contact",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="fixed bg-black/70 w-screen">
        <div className="flex justify-end items-center space-x-4 text-xl font-bold mr-5">
        {/* eslint-disable-next-line */}
          <h1></h1>
          <img className="absolute left-3" src={Logo} alt="Logo"  />
          {Nav.map((item) => (
            
            <div
              key={item.id}
              className="cursor-pointer text-right p-4 hover:underline hover:underline-offset-4 text-white hover:text-blue-400"
            >
              <Link
                to={item.Link}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <div className="flex justify-center items-center space-x-2">
                <h1>{React.createElement(item.icon)}</h1><h1>{item.name}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
