import { useState } from "react";
import Logo from "./../assets/logo.svg";
import { motion } from "framer-motion";
import {
  Home,
  PlayCircle,
  CalendarDays,
  BookOpen,
  Puzzle,
  MessagesSquare,
  TrendingUp,
  Wallet,
  UserPlus,
  Menu,
} from "lucide-react";

const Name = "Mad";

const NavLinks = [
  {
    name: "Dashboard",
    icon: Home,
  },
  {
    name: "My Course",
    icon: PlayCircle,
  },
  {
    name: "Calendar",
    icon: CalendarDays,
  },
  {
    name: "Resource",
    icon: BookOpen,
  },
  {
    name: "Quiz",
    icon: Puzzle,
  },
  {
    name: "Message",
    icon: MessagesSquare,
  },
  {
    name: "My Status",
    icon: TrendingUp,
  },
  {
    name: "Wallet",
    icon: Wallet,
  },
  {
    name: "My Account",
    icon: UserPlus,
  },
];

const variants = {
  open: { width: '20%' },
  closed: { width: '5%' },
};

function NavigationBar() {
  const [activeNavindex, setActiveNavIndex] = useState(0);
  const [isExpanded, setisExpanded] = useState(1);

  return (
    <motion.div
      animate={isExpanded ? "open" : "closed"}
      variants={variants}
      className={`bg-[#605c94] text-white py-9 flex flex-col border border-r-1 w-1/6 h-full relative ${isExpanded ? "px-7":"px-2"}`}
    >
      <div className="logo-div flex space-x-5 items-center">
        <img className="w-10 h-10" src={Logo} />
        <span className={`text-lg font-semibold ${isExpanded ? "block" : "hidden"}`}>Skillify Admin</span>
      </div>

      <div className="top-[60px] absolute -right-[150px] flex items-center justify-center space-x-2">
        <Menu onClick={() => setisExpanded(!isExpanded)} size={18} color="black" />
        <span className="text-black text-sm font-semibold">Hello {Name}!✋</span>
      </div>

      <div className="mt-8 flex flex-col space-y-6">
        {NavLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-10 items-center p-3 rounded-xl" +
              (activeNavindex === index
                ? " bg-white text-black font-semibold"
                : "")
            }
            onClick={() => setActiveNavIndex(index)}
          >
            <item.icon />
            <span className={isExpanded ? "block" : "hidden"}>{item?.name}</span>
          </div>
        ))}
      </div>

      <div id="Ad" className="py-20">
        <img src="./../assets/ad.png" />
      </div>

      <div id="copyright">
        <p className="font-semibold text-sm">
          Skillify Teacher Dashboard Admin
        </p>
        <p className="font-thin text-sm">2020 all rights reserved</p>
      </div>
    </motion.div>
  );
}

export default NavigationBar;
