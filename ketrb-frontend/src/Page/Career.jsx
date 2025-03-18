import React, { useState, useEffect } from "react";
import {
  Briefcase,
  ChevronRight,
  Clock,
  FileText,
  MapPin,
  Search,
  Users,
  Award,
  BookOpen,
  Heart,
  Coffee,
} from "lucide-react";
import { Button } from "../Component/button";
import Footer from "../Component/Footer";
import TopBar from "../Component/Topbar";
import Loading from "../Component/Loading";

// Sample job data - this would typically come from an API
const jobOpenings = [
  {
    id: 1,
    title: "Senior Engineering Technology Officer",
    department: "Engineering Registration",
    location: "Nairobi",
    type: "Full-time",
    posted: "2 weeks ago",
    deadline: "March 31, 2025",
  },
  {
    id: 2,
    title: "Technology Registration Specialist",
    department: "Registration Services",
    location: "Nairobi",
    type: "Full-time",
    posted: "1 week ago",
    deadline: "April 15, 2025",
  },
  {
    id: 3,
    title: "ICT Officer",
    department: "Information Technology",
    location: "Nairobi",
    type: "Full-time",
    posted: "3 days ago",
    deadline: "April 10, 2025",
  },
  {
    id: 4,
    title: "Administrative Assistant",
    department: "Administration",
    location: "Nairobi",
    type: "Contract",
    posted: "1 month ago",
    deadline: "March 25, 2025",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Award className="h-10 w-10 text-[#f39c12]" />,
    title: "Professional Development",
    description: "Continuous learning opportunities and career advancement paths",
  },
  {
    icon: <Heart className="h-10 w-10 text-[#f39c12]" />,
    title: "Health Benefits",
    description: "Comprehensive medical coverage for you and your family",
  },
  {
    icon: <Users className="h-10 w-10 text-[#f39c12]" />,
    title: "Collaborative Environment",
    description: "Work with talented professionals in a supportive team",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-[#f39c12]" />,
    title: "Training Programs",
    description: "Access to specialized training and certification programs",
  },
  {
    icon: <Coffee className="h-10 w-10 text-[#f39c12]" />,
    title: "Work-Life Balance",
    description: "Flexible scheduling options and generous leave policies",
  },
  {
    icon: <MapPin className="h-10 w-10 text-[#f39c12]" />,
    title: "Prime Location",
    description: "Modern offices located in the heart of Nairobi",
  },
]

// Application steps
const applicationSteps = [
  {
    number: "01",
    title: "Search for Jobs",
    description: "Browse our current openings and find a position that matches your skills and career goals.",
  },
  {
    number: "02",
    title: "Submit Application",
    description: "Complete the online application form and upload your CV, cover letter, and other required documents.",
  },
  {
    number: "03",
    title: "Initial Screening",
    description: "Our HR team will review your application and contact qualified candidates for the next steps.",
  },
  {
    number: "04",
    title: "Interview Process",
    description: "Participate in interviews with the hiring team to discuss your qualifications and experience.",
  },
  {
    number: "05",
    title: "Final Selection",
    description: "Selected candidates will receive a job offer with details about compensation and benefits.",
  },
]

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Filter jobs based on search term and job type
  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === "All" || job.type === filterType
    return matchesSearch && matchesType
  })

  return (
    <>
      <TopBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#5b92e5] to-[#3a7bd5] text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container px-4 md:px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl mb-8">
              Build your career at Kenya Engineering Technology Registration Board and make a difference in the
              engineering sector
            </p>
            <Button
              className="bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-3 px-6 rounded-md"
              onClick={() => document.getElementById("current-openings")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Current Openings
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#5b92e5] mb-4">Why Work With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At KETRB, we're committed to creating a workplace where talented professionals can thrive and contribute
              to Kenya's engineering technology sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#5b92e5] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="current-openings" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#5b92e5] mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our available positions and find the perfect opportunity to advance your career
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search positions..."
                className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5b92e5]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5b92e5]"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#f39c12]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#5b92e5]">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.department}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Posted: {job.posted}
                        </span>
                        <span className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          Deadline: {job.deadline}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-[#5b92e5] hover:bg-[#4a7fcf] text-white font-medium py-2 px-4 rounded-md flex items-center">
                      Apply Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 bg-white rounded-lg">
                <p className="text-gray-600">No job openings match your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#5b92e5] mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process is designed to identify the best talent to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {applicationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-6 rounded-lg h-full border-t-4 border-[#f39c12]">
                  <div className="text-3xl font-bold text-[#f39c12] mb-3">{step.number}</div>
                  <h3 className="text-lg font-bold text-[#5b92e5] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < applicationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#5b92e5] mb-4">What Our Team Says</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our employees about their experiences working at KETRB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "Working at KETRB has been a rewarding experience. I've had the opportunity to contribute to important
                projects that impact Kenya's engineering sector while developing my professional skills."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#5b92e5] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JM
                </div>
                <div>
                  <h4 className="font-bold">James Mwangi</h4>
                  <p className="text-sm text-gray-500">Senior Registration Officer, 3 years</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "The collaborative environment at KETRB encourages innovation and professional growth. I appreciate the
                organization's commitment to work-life balance and continuous learning."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  FO
                </div>
                <div>
                  <h4 className="font-bold">Faith Ochieng</h4>
                  <p className="text-sm text-gray-500">Technology Officer, 2 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#5b92e5] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-lg mb-8">
              Our HR team is here to help you with any questions about our current openings or the application process
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#5b92e5] hover:bg-gray-100 font-bold py-3 px-6 rounded-md">
                Contact HR
              </Button>
              <Button className="bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-3 px-6 rounded-md"><Link to="/faq">FAQ</Link></Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </>
  )
}

export default CareersPage

