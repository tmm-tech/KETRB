import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./charter.css";
import "./i18n";
import logo from "../Asset/Logo/kenya.png";
import logo1 from "../Asset/Logo/logo_1.png";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const Charter = () => {
  const { t, i18n } = useTranslation();
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
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  

  return (
    <>
      <TopBar />
      <div style={{ paddingTop: "230px" }} className="charter-page">
        <header className="charter-header">
          <div className="charter-header-content">
            <img src={logo} alt="Kenya Logo" className="charter-logo1" />
            <h1 className="charter-title">{t("charter")}</h1>
            <img src={logo1} alt="KETRB Logo" className="charter-logo" />
          </div>

          <div className="language-switcher">
            <button onClick={() => handleLanguageChange("en")}>English</button>
            <button onClick={() => handleLanguageChange("sw")}>
              Kiswahili
            </button>
          </div>
        </header>

        <div className="charter-content">
          <section className="mission-section">
            <h2>{t("mission")}</h2>
            <p>{t("missionText")}</p>
          </section>

          <section className="vision-section">
            <h2>{t("vision")}</h2>
            <p>{t("visionText")}</p>
          </section>

          <section className="commitment-section">
            <h2>{t("commitment")}</h2>
            <div dangerouslySetInnerHTML={{__html: t('servicesTable')}}/>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Charter;
