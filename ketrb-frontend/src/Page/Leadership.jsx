"use client"

import { useState, useEffect } from "react"
import "./leadership.css"
import TopBar from "../Component/Topbar"
import Footer from "../Component/Footer"
import Loading from "../Component/Loading"
import leader1 from "../Asset/Leaders/lady.png"
import leader2 from "../Asset/Leaders/chore.jpeg"
import leader3 from "../Asset/Leaders/linda.jpeg"
import leader4 from "../Asset/Leaders/ohande.jpeg"
import leader5 from "../Asset/Leaders/peter_nganga_kariuki.jpeg"
import leader6 from "../Asset/Leaders/samuel_muthondu.jpeg"
import leader7 from "../Asset/Leaders/temoet.jpeg"
import leader8 from "../Asset/Leaders/THUMBI.png"

const leadershipData = [
  {
    image: leader7,
    name: "mr nicholas kipruto temoet",
    description: "board chairman",
  },
  {
    image: leader1,
    name: "mrs florence kigo",
    description: "ceo",
  },
  {
    image: leader4,
    name: "mr fred n. oanda",
    description: "board member",
  },
  {
    image: leader5,
    name: "mr peter n. kariuki",
    description: "board member",
  },
  {
    image: leader3,
    name: "mrs linda a. wekhoba",
    description: "board member",
  },
  {
    image: leader8,
    name: "prof george thumbi",
    description: "board member",
  },
  {
    image: leader2,
    name: "mr charles c. majani",
    description: "board member",
  },
  {
    image: leader6,
    name: "mr samuel muthondu",
    description: "board member",
  },
]

const Leadership = () => {
  const [loading, setLoading] = useState(true)
  const [selectedLeader, setSelectedLeader] = useState(null)

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

  const chairman = leadershipData[0]
  const ceo = leadershipData[1]
  const boardMembers = leadershipData.slice(2)

  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader)
  }

  const closeModal = () => {
    setSelectedLeader(null)
  }

  return (
    <>
      <TopBar />
      <div className="leadership">
        <div className="leadership-header">
          <h1 className="leadership-title">Our Leadership Team</h1>
          <p className="leadership-subtitle">Meet the dedicated professionals guiding our organization</p>
        </div>

        <div className="leadership-org-chart">
          {/* Chairman Section */}
          <div className="leadership-section chairman-section">
            <h2 className="section-title">Board Chairman</h2>
            <div className="leadership-card chairman-card" onClick={() => handleLeaderClick(chairman)}>
              <div className="leadership-card-inner">
                <div className="leadership-image-container">
                  <img src={chairman.image || "/placeholder.svg"} alt={chairman.name} className="leadership-image" />
                </div>
                <div className="leadership-info">
                  <h3 className="leadership-name">{chairman.name}</h3>
                  <p className="leadership-description">{chairman.description}</p>
                </div>
              </div>
            </div>
            <div className="connector-line vertical-line"></div>
          </div>

          {/* Board Members Section */}
          <div className="leadership-section members-section">
            <h2 className="section-title">Board Members</h2>
            <div className="leadership-grid">
              {boardMembers.map((leader, index) => (
                <div key={index} className="leadership-card member-card" onClick={() => handleLeaderClick(leader)}>
                  <div className="leadership-card-inner">
                    <div className="leadership-image-container">
                      <img src={leader.image || "/placeholder.svg"} alt={leader.name} className="leadership-image" />
                    </div>
                    <div className="leadership-info">
                      <h3 className="leadership-name">{leader.name}</h3>
                      <p className="leadership-description">{leader.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="connector-line vertical-line"></div>
          </div>

          {/* CEO Section */}
          <div className="leadership-section ceo-section">
            <h2 className="section-title">Chief Executive Officer</h2>
            <div className="leadership-card ceo-card" onClick={() => handleLeaderClick(ceo)}>
              <div className="leadership-card-inner">
                <div className="leadership-image-container">
                  <img src={ceo.image || "/placeholder.svg"} alt={ceo.name} className="leadership-image" />
                </div>
                <div className="leadership-info">
                  <h3 className="leadership-name">{ceo.name}</h3>
                  <p className="leadership-description">{ceo.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leader Detail Modal */}
        {selectedLeader && (
          <div className="leader-modal-overlay" onClick={closeModal}>
            <div className="leader-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>
                ×
              </button>
              <div className="modal-content">
                <div className="modal-image-container">
                  <img
                    src={selectedLeader.image || "/placeholder.svg"}
                    alt={selectedLeader.name}
                    className="modal-image"
                  />
                </div>
                <div className="modal-info">
                  <h2 className="modal-name">{selectedLeader.name}</h2>
                  <h3 className="modal-title">{selectedLeader.description}</h3>
                  <div className="modal-bio">
                    <p>
                      {selectedLeader.bio ||
                        `${selectedLeader.name
                          .split(" ")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")} 
                        brings extensive experience and expertise to our organization. 
                        As a ${selectedLeader.description}, they provide strategic guidance 
                        and leadership to help achieve our mission and vision.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Leadership;