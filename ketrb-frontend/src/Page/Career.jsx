import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
];

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
];

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [loading, setLoading] = useState(true);
  const [careers, setCareers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await fetch("https://ketrb-backend.onrender.com/careers/");
      if (!response.ok) {
        throw new Error("Failed to fetch careers data");
      }
      const data = await response.json();
      setCareers(data);
    } catch (error) {
      console.error("Error fetching careers:", error);
      setError("Failed to load careers. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Filter jobs based on search term and job type
  const filteredJobs = careers.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || job.type === filterType;
    return matchesSearch && matchesType;
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <TopBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#5b92e5] to-[#3a7bd5] text-white">
      {error && <div className="text-red-500">{error}</div>}
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
                    <Button as={Link} to={`/careerapplyform/${job.id}`} className="mt-4 md:mt-0 bg-[#5b92e5] hover:bg-[#4a7fcf] text-white font-medium py-2 px-4 rounded-md flex items-center">
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
            <h2 className="text-3xl font-bold text-[#5b92e5] mb-4">How to Apply</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these steps to successfully apply for a job at KETRB.
            </p>
          </div>

          <div className="space-y-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl font-bold text-[#5b92e5]">{step.number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#5b92e5]">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CareersPage;