"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { motion ,AnimatePresence } from "framer-motion";

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {/* Mobile */}
         <AnimatePresence>
      {isOpen && (
        <motion.div
       
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-screen bg-white overflow-hidden lg:hidden">
          <div className="flexBetween max-container padding-container py-5">
            <Link href="/">
              <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
          <div className="w-full h-full flex justify-center items-center">
          <ul className="h-fit w-full space-y-10">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-24 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all uppercase"
          >
            {link.label}
          </Link>
        ))}
      </ul>
          </div>
        </motion.div>
      )}
          </AnimatePresence> 
    </nav>
  );
};

export default Navbar;
