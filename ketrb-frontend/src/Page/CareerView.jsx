import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import {
    ArrowLeft,
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    Calendar,
    CheckCircle,
    Share2,
    Printer,
    BookmarkPlus,
    ChevronRight,
} from "lucide-react"
import { Button } from "../Component/button"
import { Badge } from "../Component/badge"
import { Card, CardContent } from "../Component/card"
import { Separator } from "../Component/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../Component/tabs"
import TopBar from "../Component/Topbar"
import Footer from "../Component/Footer"
import Loading from "../Component/Loading"

const CareerViewPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [career, setCareer] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [relatedJobs, setRelatedJobs] = useState([])

    useEffect(() => {
        const fetchCareerDetails = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://ketrb-backend.onrender.com/careers/${id}`)

                if (!response.ok) {
                    throw new Error("Failed to fetch career details")
                }

                const data = await response.json()
                setCareer(data)

                // Fetch related jobs in the same department
                const relatedResponse = await fetch(`https://ketrb-backend.onrender.com/careers/department/${data.department}`)
                if (relatedResponse.ok) {
                    const relatedData = await relatedResponse.json()
                    // Filter out the current job and limit to 3 related jobs
                    setRelatedJobs(relatedData.filter((job) => job.id !== Number.parseInt(id)).slice(0, 3))
                }

                setLoading(false)
            } catch (error) {
                console.error("Error fetching career details:", error)
                setError("Failed to load job details. Please try again later.")
                setLoading(false)
            }
        }

        fetchCareerDetails()
    }, [id])

    const handleApply = () => {
        navigate(`/careerapplyform/${id}`)
    }

    const handlePrint = () => {
        window.print()
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: career.title,
                text: `Check out this job opportunity: ${career.title} at KETRB`,
                url: window.location.href,
            })
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(window.location.href)
            alert("Link copied to clipboard!")
        }
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return (
            <>
                <TopBar />
                <div className="container mx-auto px-4 py-12 text-center">
                    <div className="bg-red-50 text-red-700 p-6 rounded-lg max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Error</h2>
                        <p>{error}</p>
                        <Button className="mt-6" onClick={() => navigate("/careers")}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Careers
                        </Button>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    // If we have the career data, display it
    return (
        <>
            <TopBar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#5b92e5] to-[#3a7bd5] text-white py-12 print:bg-white print:text-black">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-6 print:hidden">
                            <Link to="/careers" className="text-white hover:text-blue-100 flex items-center">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to All Jobs
                            </Link>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{career.title}</h1>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center">
                                <Briefcase className="h-5 w-5 mr-2" />
                                <span>{career.department}</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span>{career.location}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-5 w-5 mr-2" />
                                <span>{career.job_type}</span>
                            </div>
                            {career.salary_range && (
                                <div className="flex items-center">
                                    <DollarSign className="h-5 w-5 mr-2" />
                                    <span>{career.salary_range}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-3 print:hidden">
                            <Button onClick={handleApply} className="bg-[#f39c12] hover:bg-[#e67e22] text-white" size="lg">
                                Apply Now
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                                onClick={handleShare}
                            >
                                <Share2 className="mr-2 h-4 w-4" />
                                Share
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                                onClick={handlePrint}
                            >
                                <Printer className="mr-2 h-4 w-4" />
                                Print
                            </Button>
                            <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                                <BookmarkPlus className="mr-2 h-4 w-4" />
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Details Section */}
            <section className="py-12 bg-gray-50 print:bg-white print:py-4">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardContent className="p-6">
                                    <Tabs defaultValue="overview" className="print:hidden">
                                        <TabsList className="mb-6">
                                            <TabsTrigger value="overview">Overview</TabsTrigger>
                                            <TabsTrigger value="requirements">Requirements</TabsTrigger>
                                            <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                                            <TabsTrigger value="benefits">Benefits</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="overview" className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
                                                <div className="prose max-w-none text-gray-600">
                                                    <p>{career.description}</p>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="requirements" className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
                                                <div className="prose max-w-none text-gray-600">
                                                    {career.requirements ? (
                                                        <ul className="space-y-2">
                                                            {career.requirements.split("\n").map((req, index) => (
                                                                <li key={index} className="flex items-start">
                                                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                                                    <span>{req.trim()}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>No specific requirements listed.</p>
                                                    )}
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="responsibilities" className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Responsibilities</h2>
                                                <div className="prose max-w-none text-gray-600">
                                                    {career.responsibilities ? (
                                                        <ul className="space-y-2">
                                                            {career.responsibilities.split("\n").map((resp, index) => (
                                                                <li key={index} className="flex items-start">
                                                                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                                                    <span>{resp.trim()}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>No specific responsibilities listed.</p>
                                                    )}
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="benefits" className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h2>
                                                <div className="prose max-w-none text-gray-600">
                                                    {career.benefits ? (
                                                        <ul className="space-y-2">
                                                            {career.benefits.split("\n").map((benefit, index) => (
                                                                <li key={index} className="flex items-start">
                                                                    <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                                                    <span>{benefit.trim()}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>No specific benefits listed.</p>
                                                    )}
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>

                                    {/* Print-friendly version that shows all content */}
                                    <div className="hidden print:block space-y-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
                                            <div className="prose max-w-none text-gray-600">
                                                <p>{career.description}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Requirements</h2>
                                            <div className="prose max-w-none text-gray-600">
                                                {career.requirements ? (
                                                    <ul className="space-y-2">
                                                        {career.requirements.split("\n").map((req, index) => (
                                                            <li key={index}>{req.trim()}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>No specific requirements listed.</p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Responsibilities</h2>
                                            <div className="prose max-w-none text-gray-600">
                                                {career.responsibilities ? (
                                                    <ul className="space-y-2">
                                                        {career.responsibilities.split("\n").map((resp, index) => (
                                                            <li key={index}>{resp.trim()}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>No specific responsibilities listed.</p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h2>
                                            <div className="prose max-w-none text-gray-600">
                                                {career.benefits ? (
                                                    <ul className="space-y-2">
                                                        {career.benefits.split("\n").map((benefit, index) => (
                                                            <li key={index}>{benefit.trim()}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>No specific benefits listed.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <Separator className="my-8" />

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-gray-800">How to Apply</h3>
                                        <p className="text-gray-600">
                                            Click the "Apply Now" button to submit your application. Make sure to have your resume and cover
                                            letter ready.
                                        </p>
                                        <div className="print:hidden">
                                            <Link to={`/careerapplyform/${id}`}><Button onClick={handleApply} className="bg-[#5b92e5] hover:bg-[#4a7fcf] text-white" size="lg">
                                                Apply Now
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button></Link>
                                        </div>
                                        <p className="text-sm text-gray-500 hidden print:block">
                                            Apply online at: {window.location.origin}/careers/apply/{id}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="print:hidden">
                            <div className="space-y-6">
                                {/* Job Summary Card */}
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">Job Summary</h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Posted On:</span>
                                                <span className="text-gray-700 font-medium">
                                                    {new Date(career.posted_date).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Closing Date:</span>
                                                <span className="text-gray-700 font-medium">
                                                    {new Date(career.closing_date).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Job Type:</span>
                                                <span className="text-gray-700 font-medium">{career.job_type}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Location:</span>
                                                <span className="text-gray-700 font-medium">{career.location}</span>
                                            </div>
                                            {career.salary_range && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500">Salary Range:</span>
                                                    <span className="text-gray-700 font-medium">{career.salary_range}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Department:</span>
                                                <span className="text-gray-700 font-medium">{career.department}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Related Jobs Card */}
                                {relatedJobs.length > 0 && (
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="text-lg font-bold text-gray-800 mb-4">Similar Jobs</h3>
                                            <div className="space-y-4">
                                                {relatedJobs.map((job) => (
                                                    <div key={job.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                                        <Link to={`/careers/view/${job.id}`} className="block group">
                                                            <h4 className="font-medium text-gray-800 group-hover:text-[#5b92e5]">{job.title}</h4>
                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                <Badge variant="outline" className="text-xs">
                                                                    {job.location}
                                                                </Badge>
                                                                <Badge variant="outline" className="text-xs">
                                                                    {job.job_type}
                                                                </Badge>
                                                            </div>
                                                            <div className="text-sm text-gray-500 mt-2 flex items-center">
                                                                <Calendar className="h-3.5 w-3.5 mr-1" />
                                                                Closes: {new Date(job.closing_date).toLocaleDateString()}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Company Info Card */}
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">About KETRB</h3>
                                        <p className="text-gray-600 mb-4">
                                            The Kenya Engineering Technology Registration Board (KETRB) is a statutory body established to
                                            regulate the engineering technology profession in Kenya.
                                        </p>
                                        <Link to="/about" className="text-[#5b92e5] hover:underline flex items-center">
                                            Learn more about us
                                            <ChevronRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apply CTA Section */}
            <section className="bg-[#5b92e5] text-white py-12 print:hidden">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
                        <p className="mb-6">
                            We're looking for talented individuals to help us shape the future of engineering in Kenya.
                        </p>
                        <Button onClick={handleApply} className="bg-white text-[#5b92e5] hover:bg-gray-100" size="lg">
                            Apply for this Position
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default CareerViewPage