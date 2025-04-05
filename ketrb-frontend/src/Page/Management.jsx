import { useState, useEffect } from "react";
import "./management.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import management1 from "../Asset/Management/lady.png";
import management2 from "../Asset/Management/male.jpg";

const managementData = {
  ceo: {
    image: management1,
    name: "Mrs Florence Kigo",
    title: "CEO",
  },
  departments: [
    {
      image: management2,
      name: "",
      title: "Research",
      subDepartments: [],
    },
    {
      image: management2,
      name: "",
      title: "Department",
      subDepartments: [],
    },
    {
      image: management1,
      name: "",
      title: "Human Resource & Administration",
      subDepartments: [
        {
          image: management2,
          name: "",
          title: "ICT",
        },
        {
          image: management1,
          name: "",
          title: "Finance",
        },
        {
          image: management1,
          name: "",
          title: "Supply Chain Management",
        },
      ],
    },
    {
      image: management2,
      name: "Robert Miller",
      title: "Registration & Licensing",
      subDepartments: [],
    },
  ],
}

const Management = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setLoading(false)
    }

    loadData()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <TopBar />
      <div className="management">
        <h1 className="management-title">Our Management Team</h1>

        <div className="org-chart">
          {/* CEO */}
          <div className="org-level ceo-level">
            <div className="management-card">
              <img
                src={managementData.ceo.image || "/placeholder.svg"}
                alt={managementData.ceo.name}
                className="management-image"
              />
              <h2 className="management-name">{managementData.ceo.name}</h2>
              <p className="management-description">{managementData.ceo.title}</p>
            </div>
          </div>

          {/* Vertical line from CEO to departments */}
          <div className="vertical-line"></div>

          {/* Horizontal line connecting all departments */}
          <div className="horizontal-line"></div>

          {/* Departments */}
          <div className="org-level department-level">
            {managementData.departments.map((dept, index) => (
              <div key={index} className="department-column">
                <div className="management-card">
                  <img src={dept.image || "/placeholder.svg"} alt={dept.name} className="management-image" />
                  <h2 className="management-name">{dept.name}</h2>
                  <p className="management-description">{dept.title}</p>
                </div>

                {/* If this department has sub-departments */}
                {dept.subDepartments.length > 0 && (
                  <>
                    <div className="vertical-line sub-dept-line"></div>
                    <div className="horizontal-line sub-dept-line"></div>
                    <div className="sub-departments">
                      {dept.subDepartments.map((subDept, subIndex) => (
                        <div key={subIndex} className="management-card sub-dept-card">
                          <img
                            src={subDept.image || "/placeholder.svg"}
                            alt={subDept.name}
                            className="management-image"
                          />
                          <h2 className="management-name">{subDept.name}</h2>
                          <p className="management-description">{subDept.title}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Management