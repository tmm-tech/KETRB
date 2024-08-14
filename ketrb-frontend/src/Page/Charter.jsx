// src/Charter.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./charter.css";
import logo from "../Asset/Logo/kenya.png";
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
  const services = t('servicesTable', { returnObjects: true });

  return (
    <>
    <TopBar/>
    <div className="charter-page">
      <header className="charter-header">
        <img src={logo} alt="KETRB Logo" className="charter-logo" />
        <h1 className="charter-title">{t("charter")}</h1>
        <div className="language-switcher">
          <button onClick={() => handleLanguageChange("en")}>English</button>
          <button onClick={() => handleLanguageChange("sw")}>Kiswahili</button>
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
          <table>
            <thead>
              <tr>
                <th>{t("serviceOffered")}</th>
                <th>{t("processRequirement")}</th>
                <th>{t("cost")}</th>
                <th>{t("timelines")}</th>
              </tr>
            </thead>
            <tbody>
              {services.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
               <tr>
          <td colSpan="4">
            <h3>{t('title')}</h3>
            <p>{t('response')}</p>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <h4>{t('contactUs')}</h4>
            <p>{t('registrarContact')}</p>
          </td>
          <td colSpan="2">
            <h4>{t('contactUs')}</h4>
            <p>{t('ombudsmanContact')}</p>
          </td>
        </tr>
        <tr>
          <td colSpan="4" style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {t('hudumaBora')}
          </td>
        </tr>
            </tbody>
          </table>
        </section>

        <section className="contact-section">
          <h2>{t("contactUs")}</h2>
          <p>{t("registrarContact")}</p>
          <p>{t("ombudsmanContact")}</p>
        </section>

        <footer>
          <p>{t("hudumaBora")}</p>
        </footer>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Charter;
