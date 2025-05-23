import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import { Alert, AlertDescription, AlertTitle } from "../Component/alert";

const NewsDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null)
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://ketrb-backend.onrender.com/news/${id}`)

        if (!response.ok) {
          throw new Error("Failed to fetch news post")
        }

        const data = await response.json()
        setArticle(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching news post:", error)
        setAlertType("error")
        setAlertMessage("An error occurred while fetching news post.")
        setLoading(false)
      }
    }

    fetchNewsDetails()
  }, [id])



  if (!article) {
    return <div>Article not found</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <TopBar />
      {alertMessage && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Alert
            className={`max-w-md mx-auto mt-4 ${alertType === "error" ? "bg-red-100 border-red-500" : "bg-green-100 border-green-500"}`}
          >
            <AlertTitle>{alertType === "error" ? "Error" : "Success"}</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}
      <div className="pt-32 pb-12 px-4 md:px-8 lg:px-16">
        <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white">
                  News
                </div>
                <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  {article.title}
                </h1>
                <p className="text-gray-700 md:text-lg">
                  {article.content.length > 150
                    ? `${article.content.substring(0, 100)}...`
                    : article.content}
                </p>
              </div>
              <img
                src={article.imageUrl || "https://via.placeholder.com/150"}
                alt={article.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto">
            <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <UserIcon className="h-5 w-5 text-gray-500" />
                    <p className="text-sm font-medium"></p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <p className="text-sm font-medium">
                      {new Date(article.published_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-800">
                  <p>{article.content}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

export default NewsDetails;

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
