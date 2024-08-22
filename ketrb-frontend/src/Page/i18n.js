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
      "servicesTable": `
        <table>
          <tr>
            <th>Service offered</th>
            <th>Process requirement</th>
            <th>Cost (Kshs)</th>
            <th>Timelines</th>
          </tr>
          <tr>
            <td>Attending to customers at the office</td>
            <td>None</td>
            <td>Nil</td>
            <td>Within 10 minutes</td>
          </tr>
          <tr>
            <td>Feedback to information inquiries and complaints</td>
            <td>Correct contact address<br>Channels:<br>- visit to offices<br>- call office lines<br>- letter to registrar<br>- emails <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>; <a href="mailto:registration@ketrb.go.ke">registration@ketrb.go.ke</a></td>
            <td>Nil</td>
            <td>
              <table className="nested-table">
                <tr>
                  <td>Phone calls</td>
                  <td>3 rings</td>
                </tr>
                <tr>
                  <td>Emails</td>
                  <td>24hrs</td>
                </tr>
                  <tr>
                  <td>Letters</td>
                  <td>7 days</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>Registration of Engineering Technology Professionals & Firms:<br>-Consulting Engineering Technology firms</td>
            <td>-Submission of duly filled application forms with relevant and certified documents<br>Payment of the prescribed fees</td>
            <td>
              <table className="nested-table">
                <tr>
                  <td>Application Fees (Kes)</td>
                  <td>Quarterly</td>
                </tr>
                <tr>
                  <td>Consulting firms</td>
                  <td>5,000&#47;</td>
                </tr>
                <tr>
                  <td>Consulting Engineering Technologist</td>
                  <td>5,000&#47;</td>
                </tr>
                <tr>
                  <td>Candidate/Professional Engineering Technologist</td>
                  <td>2,000&#47;</td>
                </tr>
                <tr>
                  <td>Certified Engineering Technician</td>
                  <td>2,000&#47;</td>
                </tr>
                <tr>
                  <td>Candidate Engineering Technician</td>
                  <td>500&#47;</td>
                </tr>
                <tr>
                  <td>Candidate Engineering Technician (Craft-person)</td>
                  <td>100&#47;</td>
                </tr>
                <tr>
                  <td>Candidate Engineering Technician (Artisan)</td>
                  <td>100&#47;</td>
                </tr>
              </table>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Annual subscription/License renewal</td>
            <td>Payment of prescribed fees</td>
            <td>
              <table className="nested-table">
                <tr>
                  <td>Consulting firms</td>
                  <td>50,000&#47;</td>
                </tr>
                <tr>
                  <td>Consulting Engineering Technologist</td>
                  <td>30,000&#47;</td>
                </tr>
                <tr>
                  <td>Candidate/Professional Engineering Technologist</td>
                  <td>3,000&#47;</td>
                </tr>
                <tr>
                  <td>Certified Engineering Technician</td>
                  <td>7,000&#47;</td>
                </tr>
                <tr>
                  <td>Candidate Engineering Technician</td>
                  <td>2,000&#47;</td>
                </tr>
                <tr>
                  <td>Candidate Engineering Technician (Craft-person)</td>
                  <td>500&#47;</td>
                </tr>
                <tr>
                  <td>Candidate Engineering Technician (Artisan)</td>
                  <td>500&#47;</td>
                </tr>
              </table>
            </td>
            <td>Immediate</td>
          </tr>
          <tr>
            <td>Provision of goods/works/services</td>
            <td>Adherence to Public Procurement and Asset Disposal Act, 2015<br>Compliance with Contract Provisions</td>
            <td>As per contract</td>
            <td>As per contract</td>
          </tr>
          <tr>
            <td>Payment of suppliers</td>
            <td>Invoices<br>Delivery notes</td>
            <td>None</td>
            <td>Within 30 days upon receipt of prerequisite documents</td>
          </tr>
          <tr>
            <td colSpan="4">
              <h3>WE ARE COMMITTED TO COURTESY AND EXCELLENCE IN SERVICE DELIVERY</h3>
              <p>Any service/good rendered that does not conform to the above standards or any officer who does not live up to commitment to courtesy and excellence in Service Delivery should be reported to:</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h4>Contact Us</h4>
              <p>The Registrar, Kenya Engineering Registration Board (KETRB), National Bank Building, 11th floor, Harambee Avenue, P. O. Box 37046-00200, Nairobi. TEL: 0740137877,0113250187. Email: <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>; <a href="mailto:registration@ketrb.go.ke">registration@ketrb.go.ke</a></p>
            </td>
            <td colSpan="2">
              <h4>Contact Us</h4>
              <p>The Commission Secretary/Chief Executive Officer, Commission on Administrative Justice, 2nd Floor, West End Towers, Waiyaki Way, Nairobi. P.O. Box 20414-00200 Nairobi. Tel: +254 (0)20 2270000/2303000. Email: <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>; <a href="mailto:feedback@ombudsman.go.ke">feedback@ombudsman.go.ke</a></p>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style="text-align: center; font-weight: bold;">
              Huduma Bora ni Haki Yako
            </td>
          </tr>
        </table>
      `,
    }
  },
  sw: {
    translation: {
      "charter": "BODI YA USAJILI WA TEKNOLOJIA YA UHANDISI YA KENYA HATI YA UTOAJI WA HUDUMA KWA WATEJA",
      "mission": "DHAMIRA YETU",
      "missionText": "Kuweka na kutekeleza viwango vinavyokuza Taaluma ya Teknolojia ya Uhandisi na kuhakikisha utoaji wa huduma bora na kazi za wadau.",
      "vision": "MAONO YETU",
      "visionText": "Kuwa chombo mashuhuri cha udhibiti kwa maendeleo ya Taaluma ya Teknolojia ya Uhandisi.",
      "commitment": "Kujitolea Kwetu kwa Wateja Wetu",
      "servicesTable": `
        <table>
          <tr>
            <th>Huduma Inayotolewa</th>
            <th>Mahitaji ya Mchakato</th>
            <th>Ratiba za Gharama (Kshs)</th>
            <th>Ratiba</th>
          </tr>
          <tr>
            <td>Kuhudhuria wateja ofisini</td>
            <td>Hakuna</td>
            <td>Ndani ya dakika 10</td>
          </tr>
          <tr>
            <td>Maoni kuhusu maswali ya habari na malalamiko</td>
            <td>Sahihi anwani mawasiliano<br>Vituo:<br>- Tembelea ofisi<br>- Piga mistari ya ofisi<br>- Barua kwa msajili<br>- Barua pepe <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>; <a href="mailto:registration@ketrb.go.ke">registration@ketrb.go.ke</a></td>
            <td>Hakuna</td>
            <td>
              <table className="nested-table">
                <tr>
                  <td>Simu</td>
                  <td>inaita pete 3</td>
                </tr>
                <tr>
                  <td>Barua pepe</td>
                  <td>Saa 24</td>
                </tr>
                  <tr>
                  <td>Barua</td>
                  <td>Siku 7</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>Usajili wa Wataalamu na Makampuni ya Teknolojia ya Uhandisi:<br>- Makampuni ya Teknolojia ya Uhandisi ya Ushauri<br>-Teknolojia za Uhandisi (Ushauri, Mtaalamu & Mgombea)<br>-Mafundi wa Uhandisi wakiwemo Wafundi na Mafundi (Walioidhinishwa na Wagombea)</td>
            <td>-Uwasilishaji wa fomu za maombi zilizojazwa ipasavyo na hati zinazofaa na zilizoidhinishwa<br>-  vm ya ada zilizowekwa</td>
            <table className="nested-table">
                <tr>
                  <td>Ada za Maombi (Kes)</td>
                  <td>Robo mwaka</td>
                </tr>
                <tr>
                  <td>Makampuni ya ushauri</td>
                  <td>5,000&#47;</td>
                </tr>
                <tr>
                  <td>Mtaalamu wa Teknolojia ya Uhandisi wa Ushauri Mtaalamu wa Teknolojia ya Uhandisi wa Ushauri</td>
                  <td>5,000&#47;</td>
                </tr>
                <tr>
                  <td>Mgombea/Mtaalamu wa Teknolojia ya Uhandisi</td>
                  <td>2,000&#47;</td>
                </tr>
                <tr>
                  <td>Fundi wa Uhandisi Aliyeidhinishwa</td>
                  <td>2,000&#47;</td>
                </tr>
                <tr>
                  <td>Fundi Mtahiniwa wa Uhandisi</td>
                  <td>500&#47;</td>
                </tr>
                <tr>
                  <td>Fundi Mtahiniwa wa Uhandisi (Craft-person)</td>
                  <td>100&#47;</td>
                </tr>
                <tr>
                  <td>Fundi Mtahiniwa wa Uhandisi (Artisan)</td>
                  <td>100&#47;</td>
                </tr>
              </table>
            </td>
            <td></td>           
            </tr>
          <tr>
            <td>Usajili wa kila mwaka/Usasishaji wa leseni</td>
            <td>Malipo ya ada zilizowekwa</td>
            <table className="nested-table">
                
                <tr>
                  <td>Makampuni ya ushauri</td>
                  <td>50,000&#47;</td>
                </tr>
                <tr>
                  <td>Mtaalamu wa Teknolojia ya Uhandisi wa Ushauri Mtaalamu wa Teknolojia ya Uhandisi wa Ushauri</td>
                  <td>30,000&#47;</td>
                </tr>
                <tr>
                  <td>Mgombea/Mtaalamu wa Teknolojia ya Uhandisi</td>
                  <td>3,000&#47;</td>
                </tr>
                <tr>
                  <td>Fundi wa Uhandisi Aliyeidhinishwa</td>
                  <td>7,000&#47;</td>
                </tr>
                <tr>
                  <td>Fundi Mtahiniwa wa Uhandisi</td>
                  <td>2,000&#47;</td>
                </tr>
                <tr>
                  <td>Fundi Mtahiniwa wa Uhandisi (Craft-person)</td>
                  <td>500&#47;</td>
                </tr>
                <tr>
                  <td>Fundi Mtahiniwa wa Uhandisi (Artisan)</td>
                  <td>500&#47;</td>
                </tr>
              </table>
            </td>
            <td>Mara moja</td>          
            </tr>
          <tr>
            <td>Utoaji wa bidhaa/kazi/huduma</td>
            <td>Kuzingatia Sheria ya Ununuzi wa Umma na Utupaji Mali, 2015<br>Kulingana na mkataba</td>
            <td>Kulingana na mkataba</td>
            <td>Kulingana na mkataba</td>
          </tr>
          <tr>
            <td>Malipo ya wauzaji</td>
            <td>Ankara<br>Vidokezo vya utoaji</td>
            <td>Hakuna</td>
            <td>Ndani ya siku 30 baada ya kupokea hati zinazohitajika mapema</td>
          </tr>
          <tr>
            <td colSpan="4">
              <h3>TUMEJITOLEA KWA ADABU NA UBORA KATIKA UTOAJI WA HUDUMA</h3>
              <p>Huduma/nzuri yoyote inayotolewa ambayo hailingani na viwango vilivyo hapo juu au afisa yeyote ambaye haishi kulingana na kujitolea kwa adabu na ubora katika Utoaji Huduma inapaswa kuripotiwa kwa:</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h4>Wasiliana Nasi</h4>
              <p>Msajili, Bodi ya Usajili wa Teknolojia ya Uhandisi ya Kenya (KETRB), Jengo la Benki ya Taifa, Ghorofa ya 11, Harambee Avenue, Sanduku la Posta 37046-00200, Nairobi. Simu: 0740137877,0113250187. Barua pepe: <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>; <a href="mailto:registration@ketrb.go.ke">registration@ketrb.go.ke</a></p>
            </td>
            <td colSpan="2">
              <h4>Wasiliana Nasi</h4>
              <p>Katibu wa Tume/Mtendaji Mkuu Mtendaji, Tume ya Haki ya Utawala, Ghorofa ya 2, Magharibi mwish Minara, Njia ya Waiyaki, Nairobi. Sanduku la Posta 20414-00200 Nairobi. Simu: +254 (0)20 2270000/2303000. Barua pepe: <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>; <a href="mailto:feedback@ombudsman.go.ke">feedback@ombudsman.go.ke</a></p>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style="text-align: center; font-weight: bold;">
              Huduma Bora ni Haki Yako
            </td>
          </tr>
        </table>
      `,
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