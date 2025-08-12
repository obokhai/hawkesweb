"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Team", link: "/team" },
  // { name: "Blog", link: "/contact" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="flex h-24 items-center justify-between px-6 md:px-16 bg-gradient-to-r from-[#0D1825] to-[#1F3044] text-white">
      {/* Logo */}
      <Link href='/'>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-x-12 text-sm">
        {navigation.map((data, index) => (
          <Link key={index} href={data.link} className="hover:text-orange-400">
            {data.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <X size={28} onClick={toggleNav} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={toggleNav} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[#0D1825] text-white w-[75vw] sm:w-[50vw] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 flex flex-col p-6`}
      >
        <button
          className="self-end mb-8"
          onClick={toggleNav}
        >
          <X size={28} />
        </button>
        {navigation.map((data, index) => (
          <Link
            key={index}
            href={data.link}
            className="py-3 text-lg border-b border-gray-700 hover:text-orange-400"
            onClick={() => setIsOpen(false)}
          >
            {data.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
