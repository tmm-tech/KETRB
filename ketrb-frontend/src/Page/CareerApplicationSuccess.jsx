import React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, ArrowLeft, FileText, Download } from "lucide-react";
import { Button } from "../Component/button";
import Footer from "../Component/Footer";
import TopBar from "../Component/Topbar";
import Loading from "../Component/Loading";

const CareerApplicationSuccess = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://ketrb-backend.onrender.com/careers/${id}`)

        if (!response.ok) {
          throw new Error("Failed to fetch career details")
        }

        const data = await response.json()
        setJobDetails(data)


        setLoading(false)
      } catch (error) {
        console.error("Error fetching job details:", error)
        setFormStatus({
          type: "error",
          message: "Failed to load job details. Please try again later.",
        })
        setLoading(false)
      }
    }

    fetchJobDetails()
  }, [id])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <TopBar />
      {/* Form Status Alert */}
      {formStatus.message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${formStatus.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
            }`}
        >
          {formStatus.type === "error" ? (
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
          ) : (
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
          )}
          <div>
            <p>{formStatus.message}</p>
          </div>
        </div>
      )}
      {/* Success Section */}
      <section className="bg-gradient-to-r from-[#5b92e5] to-[#3a7bd5] text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <CheckCircle className="h-12 w-12 text-[#5b92e5]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-xl mb-2">Thank you for applying to KETRB</p>

            {jobDetails.title && (
              <p className="text-lg font-medium">
                You applied for the role of <span className="font-semibold">{jobDetails.title}</span>.
              </p>
            )}
          </div>
        </div>
      </section>


      {/* Details Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#5b92e5] mb-4">What Happens Next?</h2>
                <p className="text-gray-600">
                  Our recruitment team will review your application and get back to you within 2 weeks.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#f39c12] text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Application Review</h3>
                    <p className="text-gray-600">
                      Our HR team will review your application to ensure it meets the basic requirements for the
                      position.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#f39c12] text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Initial Screening</h3>
                    <p className="text-gray-600">
                      If your profile matches our requirements, you'll be contacted for an initial phone or video
                      screening.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#f39c12] text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Interview Process</h3>
                    <p className="text-gray-600">
                      Qualified candidates will be invited for in-person or virtual interviews with the hiring team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start space-x-3">
                  <FileText className="h-6 w-6 text-[#5b92e5] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Application Reference</h4>
                    <p className="text-gray-600 mb-2">
                      We've sent a confirmation email to your registered email address with your application details.
                    </p>
                    <p className="text-sm text-gray-500">
                      If you don't receive the email within 30 minutes, please check your spam folder or contact us.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/careers">
                  <Button className="bg-[#5b92e5] hover:bg-[#4a7fcf] text-white w-full sm:w-auto">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Browse More Jobs
                  </Button>
                </Link>

                <Button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Save Application Receipt
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="font-bold text-gray-800 mb-2">Have Questions?</h3>
              <p className="text-gray-600 mb-4">
                Our recruitment team is here to help you with any questions about your application.
              </p>
              <a href="mailto:hr@ketrb.go.ke" className="text-[#5b92e5] hover:underline font-medium">
                hr@ketrb.go.ke
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CareerApplicationSuccess
