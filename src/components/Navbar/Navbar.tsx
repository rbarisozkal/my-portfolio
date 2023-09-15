import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import "./index.css";
import avatar from "../../assets/avatar.png";
import { useMediaQuery } from "../../utils/mediaQuery";
import { motion } from "framer-motion";
function Navbar() {
  const matches = useMediaQuery("(min-width: 720px)");
  console.log(matches);
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
            <a href="/">About</a>
          </h1>
          <h1 className="text-md font-bold">
            <a href="/">My Projects</a>
          </h1>
          <h1 className="text-md font-bold">
            <a href="/">Contact</a>
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
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed flex items-center justify-center bg-white bottom-0 left-0 w-full h-screen"
        >
          <div className="flex flex-col gap-24 text-xl">
            <a href="">Home</a>
            <a href="/about">About Me</a>
            <a href="/projects">My Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
export default Navbar;
