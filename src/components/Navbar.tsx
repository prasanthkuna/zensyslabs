
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-zen-blue">
              zensy<span className="text-zen-purple">labs</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-foreground hover:text-zen-purple transition-colors"
          >
            Services
          </a>
          <a
            href="#case-studies"
            className="text-foreground hover:text-zen-purple transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#technologies"
            className="text-foreground hover:text-zen-purple transition-colors"
          >
            Technologies
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-zen-purple transition-colors"
          >
            Contact
          </a>
          <Button className="bg-zen-purple hover:bg-zen-indigo">Get Started</Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-foreground hover:text-zen-purple transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-foreground hover:text-zen-purple transition-colors py-2"
              onClick={toggleMenu}
            >
              Case Studies
            </a>
            <a
              href="#technologies"
              className="text-foreground hover:text-zen-purple transition-colors py-2"
              onClick={toggleMenu}
            >
              Technologies
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-zen-purple transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button className="bg-zen-purple hover:bg-zen-indigo w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
