import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import "./index.css";
import avatar from "../../assets/avatar.png";
import { useMediaQuery } from "../../utils/mediaQuery";
import { motion } from "framer-motion";
const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};

function Navbar() {
  const matches = useMediaQuery("(min-width: 720px)");
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="relative px-12 py-2 flex items-center text-center justify-between font-medium">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
      >
        <path
          d="M2 2L248 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img className="avatar" src={avatar.src} />
      </div>
      {matches && (
        <>
          <h1 className="text-md font-bold">
            {" "}
            <a href="/">Home</a>
          </h1>
          <h1 className="text-md font-bold">
            <a href="/about">About</a>
          </h1>
          <h1 className="text-md font-bold">
            <a href="/projects">My Projects</a>
          </h1>
          <h1 className="text-md font-bold">
            <a href="/contact">Contact</a>
          </h1>
        </>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((previousToggle) => !previousToggle)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}
      {toggled && !matches && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed flex items-center justify-center bg-white bottom-0 left-0 w-full h-screen z-40"
        >
          <div className="flex flex-col gap-24 text-xl">
            <motion.a variants={itemMotion} href="">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/about">
              About Me
            </motion.a>
            <motion.a variants={itemMotion} href="/projects">
              My Projects
            </motion.a>
            <motion.a variants={itemMotion} href="/contact">
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
export default Navbar;
