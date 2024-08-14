// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "charter": "KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD CUSTOMER SERVICE DELIVERY CHARTER",
      "mission": "Our Mission",
      "missionText": "To set and enforce standards that promote the Engineering Technology Profession and ensure provision of quality services and works by the stakeholders.",
      "vision": "Our Vision",
      "visionText": "To be renowned regulatory body for the advancement of the Engineering Technology Profession.",
      "commitment": "Our Commitment to Our Customers",
      "serviceOffered": "Service offered",
      "processRequirement": "Process requirement",
      "cost": "Cost (Kshs)",
      "timelines": "Timelines",
      "title":"WE ARE COMMITTED TO COURTESY AND EXCELLENCE IN SERVICE DELIVERY",
       "response": "Any service/good rendered that does not conform to the above standards or any officer who does not live up to commitment to courtesy and excellence in Service Delivery should be reported to:",
      "contactUs": "Contact Us",
      "registrarContact": "The Registrar, Kenya Engineering Registration Board (KETRB), National Bank Building, 11th floor, Harambee Avenue, P. O. Box 37046-00200, Nairobi. TEL: 0740137877,0113250187. Email: info@ketrb.go.ke; registration@ketrb.go.ke",
      "ombudsmanContact": "The Commission Secretary/Chief Executive Officer, Commission on Administrative Justice, 2nd Floor, West End Towers, Waiyaki Way, Nairobi. P.O. Box 20414-00200 Nairobi. Tel: +254 (0)20 2270000/2303000. Email: feedback@ombudsman.go.ke",
      "hudumaBora": "Huduma Bora ni Haki Yako",
      "servicesTable": [
        ["Attending to customers at the office", "None", "Nil", "Within 10 minutes"],
        ["Feedback to information inquiries and complaints", "Correct contact address\nChannels:\n- visit to offices\n- call office lines\n- letter to registrar\n- emails info@ketrb.go.ke; registration@ketrb.go.ke", "Nil", "Phone calls: 3 rings\nEmails: 24hrs\nLetters: 7 days"],
        ["Registration of Engineering Technology Professionals & Firms", "Submission of duly filled application forms with relevant and certified documents\nPayment of the prescribed fees", "Application Fees (Kes)", "Quarterly\nConsulting firms: 5,000/\nConsulting Engineering Technologist: 5,000/\nCandidate/Professional Engineering Technologist: 2,000/\nCertified Engineering Technician: 2,000/\nCandidate Engineering Technician: 500/\nCandidate Engineering Technician (Craft-person): 100/\nCandidate Engineering Technician (Artisan): 100/"],
        ["Annual subscription/License renewal", "Payment of prescribed fees", "Consulting firms: 50,000/", "Immediate\nConsulting Engineering Technologist: 30,000/\nCandidate/Professional Engineering Technologist: 3,000/\nCertified Engineering Technician: 7,000/\nCandidate Engineering Technician: 2,000/\nCandidate Engineering Technician (Craftperson): 500/\nCandidate Engineering Technician (Artisan): 500/"],
        ["Provision of goods/works/services", "Adherence to Public Procurement and Asset Disposal Act, 2015\nCompliance with Contract Provisions", "As per contract", "As per contract"],
        ["Payment of suppliers", "Invoices\nDelivery notes", "None", "Within 30 days upon receipt of prerequisite documents"]
      ],
    }
  },
  sw: {
    translation: {
      "charter": "BODI YA USAJILI WA TEKNOLOJIA YA UHANDISI YA KENYA HATI YA UTOAJI WA HUDUMA KWA WATEJA",
      "mission": "Dhamira Yetu",
      "missionText": "Kuweka na kutekeleza viwango vinavyokuza Taaluma ya Teknolojia ya Uhandisi na kuhakikisha utoaji wa huduma bora na kazi za wadau.",
      "vision": "Dira Yetu",
      "visionText": "Kuwa chombo mashuhuri cha udhibiti kwa maendeleo ya Taaluma ya Teknolojia ya Uhandisi.",
      "commitment": "Kujitolea Kwetu kwa Wateja Wetu",
      "serviceOffered": "Huduma Inayotolewa",
      "processRequirement": "Mahitaji ya Mchakato",
      "cost": "Gharama (Kshs)",
      "timelines": "Ratiba",
      "title":"TUMEJITOLEA KWA ADABU NA UBORA KATIKA UTOAJI WA HUDUMA",
       "response": "Huduma/nzuri yoyote inayotolewa ambayo hailingani na viwango vilivyo hapo juu au afisa yeyote ambaye haishi kulingana na kujitolea kwa adabu na ubora katika Utoaji Huduma inapaswa kuripotiwa kwa:",
      "contactUs": "Wasiliana Nasi",
      "registrarContact": "Msajili, Bodi ya Usajili wa Teknolojia ya Uhandisi ya Kenya (KETRB), Jengo la Benki ya Taifa, Ghorofa ya 11, Harambee Avenue, Sanduku la Posta 37046-00200, Nairobi. Simu: 0740137877,0113250187. Barua pepe: info@ketrb.go.ke; registration@ketrb.go.ke",
      "ombudsmanContact": "Katibu wa Tume/Mtendaji Mkuu Mtendaji, Tume ya Haki ya Utawala, Ghorofa ya 2, Magharibi mwish Minara, Njia ya Waiyaki, Nairobi. Sanduku la Posta 20414-00200 Nairobi. Simu: +254 (0)20 2270000/2303000. Barua pepe: mrejesho@ombudsman.go.ke",
      "hudumaBora": "Huduma Bora ni Haki Yako",
      "servicesTable": [
        ["Kuhudhuria wateja ofisini", "Hakuna", "Hakuna", "Ndani ya dakika 10"],
        ["Maoni kuhusu maswali ya habari na malalamiko", "Sahihi anwani mawasiliano\nVituo:\n- Tembelea ofisi\n- Piga mistari ya ofisi\n- Barua kwa msajili\n- Barua pepe info@ketrb.go.ke; registration@ketrb.go.ke", "Hakuna", "Simu: inaita pete 3\nBarua pepe: Saa 24\nBarua: Siku 7"],
        ["Usajili wa Wataalamu na Makampuni ya Teknolojia ya Uhandisi", "Uwasilishaji wa fomu za maombi zilizojazwa ipasavyo na hati zinazofaa na zilizoidhinishwa\nMalipo ya ada zilizowekwa", "Ada za Maombi (Kes)", "Robo mwaka\nMakampuni ya ushauri: 5,000/\nMtaalamu wa Teknolojia ya Uhandisi wa Ushauri: 5,000/\nMgombea/Mtaalamu wa Teknolojia ya Uhandisi: 2,000/\nFundi wa Uhandisi Aliyeidhinishwa: 2,000/\nFundi Mtahiniwa wa Uhandisi: 500/\nFundi Mtahiniwa wa Uhandisi (Craft-person): 100/\nFundi Mtahiniwa wa Uhandisi (Artisan): 100/"],
        ["Usajili wa kila mwaka/Usasishaji wa leseni", "Malipo ya ada zilizowekwa", "Makampuni ya ushauri: 50,000/", "Mara moja\nMtaalamu wa Teknolojia ya Uhandisi wa Ushauri: 30,000/\nMgombea/Mtaalamu wa Teknolojia ya Uhandisi: 3,000/\nFundi wa Uhandisi Aliyeidhinishwa: 7,000/\nFundi Mtahiniwa wa Uhandisi: 2,000/\nFundi Mtahiniwa wa Uhandisi (Mfundi): 500/\nFundi Mtahiniwa wa Uhandisi (Msanii): 500/"],
        ["Utoaji wa bidhaa/kazi/huduma", "Kuzingatia Sheria ya Ununuzi wa Umma na Utupaji Mali, 2015\nKulingana na mkataba", "Kulingana na mkataba", "Kulingana na mkataba"],
        ["Malipo ya wauzaji", "Ankara\nVidokezo vya utoaji", "Hakuna", "Ndani ya siku 30 baada ya kupokea hati zinazohitajika mapema"]
      ],
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;