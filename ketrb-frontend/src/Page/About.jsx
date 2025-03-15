import React, { useState, useEffect } from "react";
//import Image1 from "../Asset/Gallery/IMG_0289.JPG";
//import Image2 from "../Asset/Gallery/IMG_0723.JPG";
import "./about.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import partner1 from "../Asset/Partners/cdacc.jpeg";
import partner2 from "../Asset/Partners/cue.png";
import partner3 from "../Asset/Partners/tveta.png";
import partner4 from "../Asset/Partners/transport.jpeg";
//import Fafu2 from "../Asset/Fafuu/Fafu2.jpeg";
//import Fafu3 from "../Asset/Fafuu/Fafu3.jpeg";
// import Fafu4 from "../Asset/Fafuu/Fafu4.jpg";
// import Fafu5 from "../Asset/Fafuu/Fafu5.jpg";
//import Fafu6 from "../Asset/Fafuu/Fafu6.jpg";
//import Fafu7 from "../Asset/Fafuu/Fafu7.jpg";

const About = () => {
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
  return (
    <>
      <TopBar />
      <div
        style={{ paddingTop: "230px" }}
        className="about-container mx-auto px-4 py-12"
      >
        {/* About Section */}
        <div className="about-content max-w-6xl mx-auto flex flex-wrap items-stretch">
          <div className="about-image-item w-full md:w-1/2">
            <img src="https://fakeimg.pl/600x400?text=About+Us+Image" alt="About Us" className="w-full rounded" />
          </div>
          <div className="about-text bg-white p-8 rounded shadow w-full md:w-1/2 mt-4 md:mt-0 flex items-center">
            <div>
              <div className="about-subheading">Who We Are</div>
              <div className="text-gray-800">
                <p>
                  The Kenya Engineering Technology Registration Board (KETRB)
                  was established in accordance with the Engineering Technology
                  Act No 23 of 2016 Part II Section 3. (1) to set standards for
                  engineering technologists and technicians, register and issue
                  licenses to qualified persons as per the provision of the Act.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className="about-content max-w-6xl mx-auto flex flex-wrap items-stretch">
          <div className="about-text bg-white p-8 rounded shadow w-full md:w-1/2 mt-4 md:mt-0 flex items-center">
            <div>
              <div className="about-subheading">Specialities</div>
              <div className="about-special text-gray-800">
                <p>
                  Take disciplinary measures in accordance with the provisions
                  of The Act:
                </p>
                <ul>
                  <li>
                    Issue licences to qualified persons under the provisions of
                    the Act.
                  </li>
                  <li>
                    Enter and Inspect sites where Construction, Installation,
                    Erection, Alteration, Renovation, Maintenance, Processing or
                    Manufacturing works are conducted.
                  </li>
                  <li>
                    Recommend the suspension of any Engineering Technology
                    Professional Services, Works, Projects, Installation
                    processes, or any other Engineering Technology works which
                    do not meet the standards.
                  </li>
                  <li>
                    Assess, approve, or reject engineering technology
                    qualifications of foreign persons intending to offer
                    engineering technology professional services or works in
                    Kenya.
                  </li>
                  <li>
                    Enter and inspect business premises for verification
                    purposes or for monitoring works, services, and goods
                    rendered by Professional Engineering Technologists.
                  </li>
                  <li>
                    Set standards for Engineering Technologists in Management,
                    Marketing, Professional Ethics, Environmental Issues,
                    Safety, Legal matters, or any other relevant field.
                  </li>
                  <li>
                    Conduct Professional Examinations for the purposes of
                    registration where applicable.
                  </li>
                  <li>
                    Plan, arrange, coordinate, and oversee professional training
                    and facilitate internship of Engineering Technologists.
                  </li>
                  <li>
                    Determine the fees to be charged by Engineering
                    Technologists and firms for Professional services rendered
                    from time to time.
                  </li>
                  <li>
                    Collaborate with Engineering Technology Training
                    Institutions and Organisations, Professional Associations,
                    and other relevant bodies in matters relating to Training
                    and Professional Development of Engineering Technologists.
                  </li>
                </ul>
                <br />
              </div>
            </div>
          </div>
          <div className="about-image-item w-full md:w-1/2">
            <img src="https://fakeimg.pl/600x400?text=About+Us+Image" alt="About Us" className="w-full rounded" />
          </div>
        </div> */}

        {/* Our Mission and Vision Section */}
        <div className="mission-vision-section my-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mission-vision-content bg-white p-8 rounded shadow">
              <h2 className="about-heading">Our Mission</h2>
              <p className="about-description">
                To set and enforce standards that promote the engineering
                technology profession and ensure provision of quality services
                and works by stakeholders
              </p>
              <h2 className="about-heading mt-8">Our Vision</h2>
              <p className="about-description">
                To be renowned regulatory bosy for the advancement of the
                engineering technology profession.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        {/* <div className="services-section my-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="about-heading text-center">Our Services</h2>
            <div className="services-content grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="service-item bg-white p-6 rounded shadow">
                <h3 className="about-subheading">
                  Attending to customers at the office
                </h3>
                <p className="about-description">
                  Our office provides direct assistance to customers, offering
                  personalized consultations and addressing any queries or
                  concerns.
                </p>
              </div>
              <div className="service-item bg-white p-6 rounded shadow">
                <h3 className="about-subheading">
                  Feedback to information inquiries and complaints
                </h3>
                <p className="about-description">
                  We are committed to promptly responding to all information
                  inquiries and resolving complaints efficiently, ensuring
                  customer satisfaction.
                </p>
              </div>
              <div className="service-item bg-white p-6 rounded shadow">
                <h3 className="about-subheading">
                  Registration of Engineering Technology Professionals and Firms
                </h3>
                <p className="about-description">
                  We handle the registration process for engineering technology
                  professionals and firms, ensuring compliance with industry
                  standards and regulations.
                </p>
              </div>
              <div className="service-item bg-white p-6 rounded shadow">
                <h3 className="about-subheading">
                  Issuing of Licenses & Certificates
                </h3>
                <p className="about-description">
                  Our board is responsible for issuing licenses and certificates
                  to qualified engineering technology professionals, validating
                  their expertise and commitment to the field.
                </p>
              </div>
              <div className="service-item bg-white p-6 rounded shadow">
                <h3 className="about-subheading">
                  Provision of Training (Workshops)
                </h3>
                <p className="about-description">
                  We organize and conduct training workshops to enhance the
                  skills and knowledge of engineering technology professionals,
                  keeping them updated with the latest industry trends and
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Core Values Section */}
        <div className="core-values-section my-12 bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="about-heading">Core Values</h2>
            <div className="core-values-content grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Accountability</h3>
                <p className="about-description">
                  We take responsibility for our actions and decisions, ensuring
                  transparency and reliability in all our endeavors.
                </p>
              </div>
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Teamwork</h3>
                <p className="about-description">
                  We believe in the power of collaboration, working together to
                  achieve common goals and deliver outstanding results.
                </p>
              </div>
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Integrity</h3>
                <p className="about-description">
                  We adhere to strong moral and ethical principles, ensuring
                  honesty and fairness in all our interactions.
                </p>
              </div>
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Commitment</h3>
                <p className="about-description">
                  We are dedicated to our mission, consistently striving to
                  fulfill our responsibilities and exceed expectations.
                </p>
              </div>
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Respect</h3>
                <p className="about-description">
                  We treat everyone with dignity and consideration, valuing
                  diverse perspectives and fostering an inclusive environment.
                </p>
              </div>
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Passion for Quality</h3>
                <p className="about-description">
                  We are committed to excellence, continually seeking to improve
                  and deliver the highest quality in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="partners-section my-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="about-heading">Our Partners</h2>
            <div className="partners-content grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
             
              <div className="partner-item">
                <img
                  src={partner1}
                  alt="Partner Name"
                  className="partner-logo w-full h-auto"
                />
              </div>
              <div className="partner-item">
                <img
                  src={partner2}
                  alt="Partner Name"
                  className="partner-logo w-full h-auto"
                />
              </div>
              <div className="partner-item">
                <img
                  src={partner3}
                  alt="Partner Name"
                  className="partner-logo w-full h-auto"
                />
              </div>
              <div className="partner-item">
                <img
                  src={partner4}
                  alt="Partner Name"
                  className="partner-item-large"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
