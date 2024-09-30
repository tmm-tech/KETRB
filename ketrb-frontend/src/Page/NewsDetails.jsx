import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const NewsDetails = ({ articles }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const article = articles.find((_, index) => index === parseInt(id));

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (!article) {
    return <div>Article not found</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <TopBar />
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
                  {article.description.length > 150
                    ? `${article.description.substring(0, 100)}...`
                    : article.description}
                </p>
              </div>
              <img
                src={article.image}
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
                      {new Date(article.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-gray-800">
                  <p>{article.description}</p>
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
