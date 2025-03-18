"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../Asset/Logo/logo_1.png"
import logo1 from "../Asset/Logo/kenya.png"
import { Button } from "../Component/button"
import { Facebook, X, Linkedin, Mail, Phone, MapPin, Clock, Menu, ChevronDown } from "lucide-react"

const TopBar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  // Navigation menu structure with dropdowns
  const navigationItems = [
    { id: "home", label: "Home", path: "/", active: true },
    {
      id: "about",
      label: "Who We Are",
      path: "#",
      dropdown: [
        { id: "aboutus", label: "About Us", path: "/about" },
        { id: "mandate", label: "Our Mandate", path: "/our-mandate" },
        { id: "leadership", label: "Leadership", path: "/leadership" },
        { id: "management", label: "Management", path: "#management" },
      ],
    },
    {
      id: "discover",
      label: "Discover & Explore",
      path: "#",
      dropdown: [
        { id: "programs", label: "Programs & Projects", path: "/programs" },
        { id: "gallery", label: "Gallery", path: "/gallery" },
      ],
    },
    {
      id: "download",
      label: "Download",
      path: "#",
      dropdown: [
        { id: "act", label: "Act", path: "/act" },
        {
          id: "application",
          label: "Application Requirement",
          path: "/application",
        },
        { id: "charter", label: "Charter", path: "/charter" },
      ],
    },
    {
      id: "resources",
      label: "Resources",
      path: "#",
      dropdown: [
        { id: "tender", label: "Tender", path: "/tender" },
        { id: "faq", label: "FAQ", path: "/faq" },
      ],
    },
    { id: "careers", label: "Careers", path: "/careers" },
    { id: "latestnew", label: "Latest News", path: "/news&events" },
  ]
  const toggleDropdown = (id, e) => {
    // Prevent the event from bubbling up to document click handler
    e.stopPropagation()

    if (openDropdown === id) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(id)
    }
  }

  const isMenuItemActive = (item) => {
    if (item.path === location.pathname) {
      return true
    }
    if (item.dropdown) {
      return item.dropdown.some((subItem) => subItem.path === location.pathname)
    }
    return false
  }

  const isDropdownItemActive = (path) => {
    return path === location.pathname
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't close dropdown if we're on mobile and the menu is open
      if (window.innerWidth < 768 && isMenuOpen) {
        return
      }

      // Only close if clicking outside the dropdown area
      if (!event.target.closest(".dropdown-container")) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Toolbar Area */}
      <div className="py-2" style={{ backgroundColor: "#f39c12", color: "white" }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <Link to="mailto:info@ketrb.go.ke" className="flex items-center hover:underline">
                <Mail className="h-4 w-4 mr-1" />
                info@ketrb.go.ke
              </Link>
              <Link to="tel:+254740137877" className="flex items-center hover:underline">
                <Phone className="h-4 w-4 mr-1" />
                +254 740137877
              </Link>
            </div>
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Harambee Avenue, Nairobi
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Mon-Fri: 8:00 AM - 5:00 PM
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="https://www.facebook.com/KETRBOARD" aria-label="Facebook" className="hover:text-white">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                to="https://x.com/KETRB_?t=Lt-49iJFVYSIHO1MImoeHw&s=09"
                aria-label="Twitter"
                className="hover:text-white"
              >
                <X className="h-4 w-4" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/kenya-engineering-technology-registration-board/"
                aria-label="LinkedIn"
                className="hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-4">
              <img
                src={logo1}
                alt="Kenya Coat of Arms"
                width={80}
                height={80}
                className="object-contain"
              />
              <div className="text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold">Kenya Engineering Technology Registration Board</h1>
                {/* <p className="text-sm text-muted-foreground"></p> */}
              </div>
              <img
                src={logo}
                alt="KETRB Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`bg-muted ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="container px-4 md:px-6">
            <ul className="flex flex-col md:flex-row md:items-center md:justify-center py-2 space-y-2 md:space-y-0 md:space-x-1">
              {navigationItems.map((item) => (
                <li key={item.id} className="relative">
                  {item.dropdown ? (
                    <div className="relative dropdown-container">
                      <button
                        onClick={(e) => {
                          toggleDropdown(item.id, e)
                          // Don't close mobile menu when dropdown is clicked
                          // Only close when a specific item is selected
                        }}
                        className={`flex items-center justify-between w-full py-2 px-3 md:px-4 rounded-md font-bold
                          ${
                            isMenuItemActive(item)
                              ? "border-b-2 border-[#f39c12]"
                              : "border-b-2 border-transparent hover:border-[#f39c12]"
                          }`}
                        style={{
                          color: isMenuItemActive(item) ? "#f39c12" : "#5b92e5",
                          transition: "color 0.3s, border-color 0.3s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = "#f39c12")}
                        onMouseOut={(e) => {
                          if (!isMenuItemActive(item)) {
                            e.currentTarget.style.color = "#5b92e5"
                          }
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${
                            openDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.id && (
                        <div
                          className="absolute z-10 left-0 md:left-auto mt-1 w-56 rounded-md shadow-lg border"
                          style={{ backgroundColor: "white" }}
                        >
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.id}
                                to={subItem.path}
                                className={`block px-4 py-2 text-sm font-bold hover:bg-gray-100 transition-all
                                  ${isDropdownItemActive(subItem.path) ? "border-l-4 border-[#f39c12] bg-gray-50" : "border-l-4 border-transparent hover:border-[#f39c12]"}
                                `}
                                style={{ color: isDropdownItemActive(subItem.path) ? "#f39c12" : "#5b92e5" }}
                                onClick={() => {
                                  // Close mobile menu if clicked
                                  if (window.innerWidth < 768) {
                                    setIsMenuOpen(false)
                                  }
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.color = "#f39c12"
                                  e.currentTarget.style.backgroundColor = "#f8f9fa"
                                }}
                                onMouseOut={(e) => {
                                  if (!isDropdownItemActive(subItem.path)) {
                                    e.currentTarget.style.color = "#5b92e5"
                                    e.currentTarget.style.backgroundColor = ""
                                  }
                                }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-2 px-3 md:px-4 rounded-md font-bold transition-all
                        ${location.pathname === item.path ? "border-b-2 border-[#f39c12]" : "border-b-2 border-transparent hover:border-[#f39c12]"}
                      `}
                      style={{ color: location.pathname === item.path ? "#f39c12" : "#5b92e5" }}
                      onClick={() => {
                        // Close mobile menu if clicked
                        if (window.innerWidth < 768) {
                          setIsMenuOpen(false)
                        }
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#f39c12")}
                      onMouseOut={(e) => {
                        if (location.pathname !== item.path) {
                          e.currentTarget.style.color = "#5b92e5"
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default TopBar;