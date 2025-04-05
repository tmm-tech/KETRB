import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Upload,
  Calendar,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Clock,
  DollarSign,
  Globe,
  Linkedin,
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Component/select";
import { Button } from "../Component/button";
import { Input } from "../Component/input";
import { Textarea } from "../Component/textarea";
import { Checkbox } from "../Component/checkbox";
import { Label } from "../Component/label";
import { RadioGroup, RadioGroupItem } from "../Component/radio-group";
import { Separator } from "../Component/separator";
import Footer from "../Component/Footer";
import TopBar from "../Component/Topbar";
import Loading from "../Component/Loading";

const CareerApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [jobDetails, setJobDetails] = useState(null);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [formStep, setFormStep] = useState(1);
  const totalSteps = 4

  // Form data state
  const [formData, setFormData] = useState({
    // Personal Information
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",

    // Professional Information
    resume: null,
    resume_filename: "",
    cover_letter: "",
    linkedin_url: "",
    portfolio_url: "",

    // Work Experience
    current_employer: "",
    current_job_title: "",
    years_of_experience: "",

    // Education
    highest_education: "",
    field_of_study: "",
    school_name: "",
    graduation_year: "",

    // Additional Information
    referral_source: "",
    other_referral_source: "",
    willing_to_relocate: "yes",
    available_start_date: "",
    salary_expectation: "",

    // Legal Information
    authorized_to_work: false,
    require_sponsorship: false,

    // Consent
    consent_to_process: false,
    consent_to_contact: false,
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        // In a real application, you would fetch the job details from your API
        // For now, we'll simulate a delay and use mock data
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock job data - replace with actual API call
        setJobDetails({
          id: id,
          title: "Senior Engineering Technology Officer",
          department: "Engineering Registration",
          location: "Nairobi",
          type: "Full-time",
          posted: "2 weeks ago",
          deadline: "March 31, 2025",
        })

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

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Handle select changes
  const handleSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Handle checkbox changes
  const handleCheckboxChange = (name, checked) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }))
  }

  // Handle file uploads
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        resume: file,
        resume_filename: file.name,
      }))
    }
  }

  // Navigate to next step
  const nextStep = () => {
    if (formStep < totalSteps) {
      setFormStep(formStep + 1)
      window.scrollTo(0, 0)
    }
  }

  // Navigate to previous step
  const prevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1)
      window.scrollTo(0, 0)
    }
  }

  // Validate current step
  const validateStep = () => {
    switch (formStep) {
      case 1: // Personal Information
        if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone) {
          setFormStatus({
            type: "error",
            message: "Please fill in all required fields in the Personal Information section.",
          })
          return false
        }
        break
      case 2: // Professional Information
        if (!formData.resume) {
          setFormStatus({
            type: "error",
            message: "Please upload your resume/CV.",
          })
          return false
        }
        break
      case 3: // Education & Experience
        if (!formData.highest_education) {
          setFormStatus({
            type: "error",
            message: "Please select your highest level of education.",
          })
          return false
        }
        break
      case 4: // Additional Information & Consent
        if (!formData.consent_to_process) {
          setFormStatus({
            type: "error",
            message: "You must provide consent to process your application.",
          })
          return false
        }
        break
      default:
        break
    }

    setFormStatus({ type: "", message: "" })
    return true
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateStep()) {
      window.scrollTo(0, 0)
      return
    }

    setSubmitting(true)

    try {
      // In a real application, you would submit the form data to your API
      // For now, we'll simulate a delay and success
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirect to success page
      navigate(`/careers/application-success/${id}`)
    } catch (error) {
      console.error("Error submitting application:", error)
      setFormStatus({
        type: "error",
        message: "An error occurred while submitting your application. Please try again later.",
      })
      setSubmitting(false)
      window.scrollTo(0, 0)
    }
  }

  if (loading) {
    return <Loading />
  }

  // Render form steps
  const renderFormStep = () => {
    switch (formStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#5b92e5]">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name" className="text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="last_name" className="text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-gray-700">
                Address
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input id="address" name="address" value={formData.address} onChange={handleChange} className="pl-10" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-gray-700">
                  City
                </Label>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state" className="text-gray-700">
                  State/Province
                </Label>
                <Input id="state" name="state" value={formData.state} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zip_code" className="text-gray-700">
                  ZIP/Postal Code
                </Label>
                <Input id="zip_code" name="zip_code" value={formData.zip_code} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-gray-700">
                  Country
                </Label>
                <Input id="country" name="country" value={formData.country} onChange={handleChange} />
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#5b92e5]">Professional Information</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resume" className="text-gray-700">
                  Resume/CV <span className="text-red-500">*</span>
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  {formData.resume ? (
                    <div className="flex flex-col items-center">
                      <FileText className="h-12 w-12 text-[#5b92e5] mb-2" />
                      <p className="text-gray-700 font-medium">{formData.resume_filename}</p>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, resume: null, resume_filename: "" })}
                        className="text-red-500 text-sm mt-2 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-gray-500 mb-2">Drag and drop your resume here, or</p>
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <span className="bg-[#5b92e5] hover:bg-[#4a7fcf] text-white font-medium py-2 px-4 rounded-md inline-block">
                          Browse Files
                        </span>
                        <input
                          id="resume-upload"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX. Max size: 5MB</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover_letter" className="text-gray-700">
                  Cover Letter
                </Label>
                <Textarea
                  id="cover_letter"
                  name="cover_letter"
                  value={formData.cover_letter}
                  onChange={handleChange}
                  placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
                  rows={5}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin_url" className="text-gray-700">
                    LinkedIn Profile URL
                  </Label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="linkedin_url"
                      name="linkedin_url"
                      value={formData.linkedin_url}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio_url" className="text-gray-700">
                    Portfolio/Website URL
                  </Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="portfolio_url"
                      name="portfolio_url"
                      value={formData.portfolio_url}
                      onChange={handleChange}
                      placeholder="https://yourportfolio.com"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="current_employer" className="text-gray-700">
                    Current/Most Recent Employer
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="current_employer"
                      name="current_employer"
                      value={formData.current_employer}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="current_job_title" className="text-gray-700">
                    Current/Most Recent Job Title
                  </Label>
                  <Input
                    id="current_job_title"
                    name="current_job_title"
                    value={formData.current_job_title}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#5b92e5]">Education & Experience</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="highest_education" className="text-gray-700">
                  Highest Level of Education <span className="text-red-500">*</span>
                </Label>
                <Select
                  id="highest_education"
                  value={formData.highest_education}
                  onValueChange={(value) => handleSelectChange("highest_education", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high_school">High School</SelectItem>
                    <SelectItem value="associates">Associate's Degree</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="doctorate">Doctorate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="field_of_study" className="text-gray-700">
                    Field of Study
                  </Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="field_of_study"
                      name="field_of_study"
                      value={formData.field_of_study}
                      onChange={handleChange}
                      placeholder="e.g. Engineering, Business Administration"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="school_name" className="text-gray-700">
                    School/University Name
                  </Label>
                  <Input id="school_name" name="school_name" value={formData.school_name} onChange={handleChange} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="graduation_year" className="text-gray-700">
                  Graduation Year
                </Label>
                <Input
                  id="graduation_year"
                  name="graduation_year"
                  value={formData.graduation_year}
                  onChange={handleChange}
                  placeholder="e.g. 2020"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="years_of_experience" className="text-gray-700">
                  Years of Relevant Experience
                </Label>
                <Select
                  id="years_of_experience"
                  value={formData.years_of_experience}
                  onValueChange={(value) => handleSelectChange("years_of_experience", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select years of experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less_than_1">Less than 1 year</SelectItem>
                    <SelectItem value="1_to_3">1-3 years</SelectItem>
                    <SelectItem value="3_to_5">3-5 years</SelectItem>
                    <SelectItem value="5_to_10">5-10 years</SelectItem>
                    <SelectItem value="more_than_10">More than 10 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#5b92e5]">Additional Information</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="referral_source" className="text-gray-700">
                  How did you hear about this position?
                </Label>
                <Select
                  id="referral_source"
                  value={formData.referral_source}
                  onValueChange={(value) => handleSelectChange("referral_source", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select referral source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="job_board">Job Board</SelectItem>
                    <SelectItem value="company_website">Company Website</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                    <SelectItem value="employee_referral">Employee Referral</SelectItem>
                    <SelectItem value="social_media">Social Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.referral_source === "other" && (
                <div className="space-y-2">
                  <Label htmlFor="other_referral_source" className="text-gray-700">
                    Please specify
                  </Label>
                  <Input
                    id="other_referral_source"
                    name="other_referral_source"
                    value={formData.other_referral_source}
                    onChange={handleChange}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="willing_to_relocate" className="text-gray-700">
                    Are you willing to relocate if necessary?
                  </Label>
                  <RadioGroup
                    value={formData.willing_to_relocate}
                    onValueChange={(value) => handleSelectChange("willing_to_relocate", value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="relocate-yes" />
                      <Label htmlFor="relocate-yes" className="font-normal">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="relocate-no" />
                      <Label htmlFor="relocate-no" className="font-normal">
                        No
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maybe" id="relocate-maybe" />
                      <Label htmlFor="relocate-maybe" className="font-normal">
                        Maybe, depending on location
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="available_start_date" className="text-gray-700">
                    When can you start?
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="available_start_date"
                      name="available_start_date"
                      type="date"
                      value={formData.available_start_date}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary_expectation" className="text-gray-700">
                  Salary Expectation
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="salary_expectation"
                    name="salary_expectation"
                    value={formData.salary_expectation}
                    onChange={handleChange}
                    placeholder="e.g. $80,000 - $90,000"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#5b92e5]">Legal Information</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="authorized_to_work"
                    checked={formData.authorized_to_work}
                    onCheckedChange={(checked) => handleCheckboxChange("authorized_to_work", checked)}
                  />
                  <Label htmlFor="authorized_to_work" className="font-normal text-gray-700">
                    I am legally authorized to work in Kenya.
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="require_sponsorship"
                    checked={formData.require_sponsorship}
                    onCheckedChange={(checked) => handleCheckboxChange("require_sponsorship", checked)}
                  />
                  <Label htmlFor="require_sponsorship" className="font-normal text-gray-700">
                    I will require sponsorship for employment visa status.
                  </Label>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#5b92e5]">Consent</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent_to_process"
                    checked={formData.consent_to_process}
                    onCheckedChange={(checked) => handleCheckboxChange("consent_to_process", checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent_to_process" className="font-normal text-gray-700">
                    <span className="text-red-500">*</span> I consent to the processing of my personal data provided in
                    this application form for the purposes of the recruitment process. I understand that my personal
                    data will be processed in accordance with KETRB's privacy policy.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent_to_contact"
                    checked={formData.consent_to_contact}
                    onCheckedChange={(checked) => handleCheckboxChange("consent_to_contact", checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent_to_contact" className="font-normal text-gray-700">
                    I consent to being contacted about future job opportunities at KETRB that match my profile.
                  </Label>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <TopBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5b92e5] to-[#3a7bd5] text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Apply for: {jobDetails?.title}</h1>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                {jobDetails?.department}
              </span>
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {jobDetails?.location}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Application Deadline: {jobDetails?.deadline}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Form Status Alert */}
            {formStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                  formStatus.type === "error" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
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

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        formStep > index + 1
                          ? "bg-[#f39c12] text-white"
                          : formStep === index + 1
                            ? "bg-[#5b92e5] text-white"
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {formStep > index + 1 ? <CheckCircle className="h-5 w-5" /> : index + 1}
                    </div>
                    <span className="text-xs mt-1 text-gray-500">
                      {index === 0
                        ? "Personal"
                        : index === 1
                          ? "Professional"
                          : index === 2
                            ? "Education"
                            : "Additional"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
                <div
                  className="absolute top-0 left-0 h-1 bg-[#5b92e5]"
                  style={{ width: `${((formStep - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit}>
                {renderFormStep()}

                <div className="mt-8 flex justify-between">
                  {formStep > 1 ? (
                    <Button type="button" onClick={prevStep} className="bg-gray-200 hover:bg-gray-300 text-gray-700">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                  ) : (
                    <Link to={`/careers`}>
                      <Button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-700">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Jobs
                      </Button>
                    </Link>
                  )}

                  {formStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={() => {
                        if (validateStep()) nextStep()
                      }}
                      className="bg-[#5b92e5] hover:bg-[#4a7fcf] text-white"
                    >
                      Next
                      <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                    </Button>
                  ) : (
                    <Button type="submit" disabled={submitting} className="bg-[#f39c12] hover:bg-[#e67e22] text-white">
                      {submitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  )}
                </div>
              </form>
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>
                If you encounter any issues with this form, please contact our HR department at{" "}
                <a href="mailto:hr@ketrb.go.ke" className="text-[#5b92e5] hover:underline">
                  hr@ketrb.go.ke
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CareerApplicationForm