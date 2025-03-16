import { Link } from "react-router-dom";
import logo from "../Asset/Logo/logo_1.png";
import logo1 from "../Asset/Logo/kenya.png";
import image0 from "../Asset/Gallery/IMG_0114.JPG";
import image1 from "../Asset/Gallery/IMG_0723.JPG";
import image2 from "../Asset/Gallery/IMG_0093.JPG";
import image3 from "../Asset/Gallery/IMG_0499.JPG";
import image4 from "../Asset/Gallery/IMG_0136.JPG";
import { Button } from "../Component/button";
import {
  Facebook,
  X,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Menu,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";

export default function GovernmentLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState("home")
  const [openDropdown, setOpenDropdown] = useState(null)

  // Navigation menu structure with dropdowns
  const navigationItems = [
    { id: "home", label: "Home", path: "#", active: true },
    {
      id: "about",
      label: "About Us",
      path: "#about",
      dropdown: [
        { id: "mandate", label: "Our Mandate", path: "#mandate" },
        { id: "vision", label: "Vision & Mission", path: "#vision" },
        { id: "board", label: "Board Members", path: "#board" },
        { id: "history", label: "Our History", path: "#history" },
      ],
    },
    {
      id: "services",
      label: "Services",
      path: "#",
      dropdown: [
        { id: "registration", label: "Registration", path: "#registration" },
        { id: "licensing", label: "Licensing", path: "#licensing" },
        { id: "accreditation", label: "Accreditation", path: "#accreditation" },
        { id: "verification", label: "Verification", path: "#verification" },
      ],
    },
    {
      id: "registration",
      label: "Registration",
      path: "#",
      dropdown: [
        { id: "individuals", label: "For Individuals", path: "#individuals" },
        { id: "companies", label: "For Companies", path: "#companies" },
        { id: "students", label: "For Students", path: "#students" },
        { id: "institutions", label: "For Institutions", path: "#institutions" },
      ],
    },
    {
      id: "resources",
      label: "Resources",
      path: "#",
      dropdown: [
        { id: "acts", label: "Acts & Regulations", path: "#acts" },
        { id: "forms", label: "Forms & Guidelines", path: "#forms" },
        { id: "publications", label: "Publications", path: "#publications" },
        { id: "faqs", label: "FAQs", path: "#faqs" },
      ],
    },
    { id: "news", label: "News & Events", path: "#" },
    { id: "contact", label: "Contact Us", path: "#" },
  ]

  const carouselItems = [
    {
      image: image0,
      title: "Kenya Engineering Technology Registration Board",
      description: "Regulating Engineering Technology Professionals for Excellence",
    },
    {
      image: image1,
      title: "Accountability",
      description: "We take responsibility for our actions and decisions, ensuring transparency and trust.",
    },
    {
      image: image2,
      title: "Teamwork",
      description: "We collaborate and support each other to achieve common goals.",
    },
    {
      image: image3,
      title: "Integrity",
      description: "We adhere to the highest ethical standards, demonstrating honesty and fairness in every action.",
    },
    {
      image: image4,
      title: "Innovation",
      description: "We foster a culture of creativity and continuous improvement, embracing new ideas and technologies.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(id)
    }
  }

  const handleMenuItemClick = (id) => {
    setActiveMenuItem(id)
    if (window.innerWidth < 768) {
      // Close menu on mobile after clicking
      setIsMenuOpen(false)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null)
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <Link to="mailto:info@ketrb.go.ke" className="flex items-center hover:underline">
                <Mail className="h-4 w-4 mr-1" />
                info@ketrb.go.ke
              </Link>
              <Link to="tel:+254202345678" className="flex items-center hover:underline">
                <Phone className="h-4 w-4 mr-1" />
                +254 20 234 5678
              </Link>
            </div>
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Nairobi, Kenya - Engineering Plaza, 3rd Floor
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Mon-Fri: 8:00 AM - 5:00 PM
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="#" aria-label="Facebook" className="hover:text-white">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link to="#" aria-label="Twitter" className="hover:text-white">
                <X className="h-4 w-4" />
              </Link>
              <Link to="#" aria-label="Instagram" className="hover:text-white">
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src={logo1}
                alt="Kenya Coat of Arms"
                width={80}
                height={80}
                className="object-contain"
              />
              <div className="text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold">Kenya Engineering Technology Registration Board</h1>
                <p className="text-sm text-muted-foreground">Ministry of Infrastructure and Transport</p>
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
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleDropdown(item.id)
                          handleMenuItemClick(item.id)
                        }}
                        className={`flex items-center justify-between w-full py-2 px-3 md:px-4 rounded-md font-medium 
                          ${activeMenuItem === item.id ? "bg-primary/10 text-primary" : "hover:bg-muted-foreground/10 hover:text-primary"}`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.id ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === item.id && (
                        <div className="absolute z-10 left-0 md:left-auto mt-1 w-56 rounded-md shadow-lg bg-background border">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.id}
                                to={subItem.path}
                                className={`block px-4 py-2 text-sm hover:bg-muted ${
                                  activeMenuItem === subItem.id ? "bg-primary/10 text-primary font-medium" : ""
                                }`}
                                onClick={() => handleMenuItemClick(subItem.id)}
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
                      className={`block py-2 px-3 md:px-4 rounded-md font-medium 
                        ${activeMenuItem === item.id ? "bg-primary/10 text-primary" : "hover:bg-muted-foreground/10 hover:text-primary"}`}
                      onClick={() => handleMenuItemClick(item.id)}
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

      <main className="flex-1">
        {/* Carousel Section */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">{item.title}</h2>
                  <p className="max-w-2xl text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Join KETRB Section */}
        <section className="py-12 md:py-16 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Join KETRB</h2>
                <p className="text-muted-foreground mb-6">
                  The Kenya Engineering Technology Registration Board (KETRB) is mandated to regulate the practice of
                  engineering technology professionals in Kenya. Registration with KETRB ensures that you are recognized
                  as a qualified professional and can legally practice in Kenya.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto">Register Now</Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </div>
              </div>
            </div>
         </section>
             
        {/* About Us Section */}
        <section id="about" className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
              <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="About KETRB"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Our Mandate</h3>
                <p className="text-muted-foreground mb-4">
                  The Kenya Engineering Technology Registration Board (KETRB) is established under the Engineering
                  Technology Act, 2016. Our mandate is to regulate, promote and develop the practice of engineering
                  technology in Kenya.
                </p>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground mb-4">
                  To be a world-class regulator of engineering technology practice.
                </p>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-4">
                  To regulate, promote and develop the practice of engineering technology for national development.
                </p>
                <Button variant="outline">Read More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 md:py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map and Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[250px] w-full rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.277444357076!2d36.80202871455079!3d-1.2833308999999908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f42bf05%3A0x5f90b691d4f7f27e!2sNairobi%2C%20Kenya!5m2!1s0x182f10d22f42bf05%3A0x5f90b691d4f7f27e!2sNairobi%2C%20Kenya"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KETRB Location Map"
                  aria-label="Map showing the location of KETRB offices"
                ></iframe>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 shrink-0 text-primary" />
                    <span>
                      Engineering Plaza, 3rd Floor
                      <br />
                      Nairobi, Kenya
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    <span>+254 20 234 5678</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    <span>info@ketrb.go.ke</span>
                  </li>
                </ul>
                <h3 className="font-bold mt-6 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link to="#" aria-label="Facebook" className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full">
                    <Facebook className="h-5 w-5 text-primary" />
                  </Link>
                  <Link to="#" aria-label="Twitter" className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full">
                    <X className="h-5 w-5 text-primary" />
                  </Link>
                  <Link to="#" aria-label="Instagram" className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full">
                    <Instagram className="h-5 w-5 text-primary" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Links and Newsletter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Registration
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      News & Events
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="hover:underline">
                      Acts & Regulations
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Forms & Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Publications
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Tenders
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Newsletter</h3>
                <p className="text-sm mb-2">Subscribe to our newsletter for updates</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 text-sm border rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="sm:rounded-l-none">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Kenya Engineering Technology Registration Board. All rights reserved.</p>
            <p className="mt-2">
              <Link to="#" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |
              <Link to="#" className="hover:underline ml-2">
                Terms of Service
              </Link>{" "}
              |
              <Link to="#" className="hover:underline ml-2">
                Accessibility
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

