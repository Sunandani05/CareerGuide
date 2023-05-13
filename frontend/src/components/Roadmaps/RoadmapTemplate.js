import React from 'react'
import "./Roadmap.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import  History  from "../../pages/humanities/History";
import Philosophy from "../../pages/humanities/Philosophy"
import Literature from '../../pages/humanities/Literature';
import ReligiousStudies from '../../pages/humanities/ReligiousStudies';
import Languages from '../../pages/humanities/Languages';
import CulturalStudies from '../../pages/humanities/CulturalStudies';
import  Communication from '../../pages/humanities/Communication';
import VisualandPerformingArts from '../../pages/humanities/VisualandPerformingArts';
import Anthropology from '../../pages/humanities/Anthropology';
import DiplomainEducation from '../../pages/arts/DiplomainEducation';
import Law from '../../pages/arts/Law'
import BusinessManagement from '../../pages/arts/BusinessManagement';
import BArch from '../../pages/arts/BArch';
import DiplomaInEducation from '../../pages/arts/DiplomainEducation';
import EventManagement from '../../pages/arts/EventManagement';
import DiplomaInDramatization from '../../pages/arts/DiplomaInDramatization';
import AdvertisingManagement from '../../pages/arts/AdvertisingManagement';
import Journalism from '../../pages/arts/Journalism';
import FashionDesign from '../../pages/arts/FashionDesign';
import InteriorDesign from '../../pages/arts/InteriorDesign';
import ForeignLanguagesDiploma from '../../pages/arts/ForeignLanguagesDiploma';
import BachelorOfEducation from '../../pages/commerce/BachelorOfEducation';
import BankingInsurance from '../../pages/commerce/BankingInsurance';
import BCom from '../../pages/commerce/BCom';
import BusinessManagementC from '../../pages/commerce/BusinessManagement';
import CharteredAccountant from '../../pages/commerce/CharteredAccountant';
import UPSC from '../../pages/commerce/UPSC';
import Bcom from '../../pages/commerce/BCom';
import Agriculture from '../../pages/science/Agriculture';
import BachelorofScienceC from '../../pages/science/BachelorofScience';
import HomeScience from '../../pages/science/HomeScience';
import HotelManagement from '../../pages/science/HotelManagement';
import MBBS from '../../pages/science/MBBS';
import NDA from '../../pages/science/NDA';
import Nursing from '../../pages/science/Nursing';
import Pharmacy from '../../pages/science/Pharmacy';
import Technology from '../../pages/science/Technology';




const ShowRoadmap = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("")
   const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
   const [isSubMenuVisible_2, setIsSubMenuVisible_2] = useState(false);
   const [isSubMenuVisible_3, setIsSubMenuVisible_3] = useState(false);
   const [isSubMenuVisible_4, setIsSubMenuVisible_4] = useState(false);
   const [isSubMenuVisible_5, setIsSubMenuVisible_5] = useState(false);
   const [isSubMenuVisible_6, setIsSubMenuVisible_6] = useState(false);

  
    function toggleSubMenu() {
        console.log("toggle")
       setIsSubMenuVisible(!isSubMenuVisible);
       console.log(isSubMenuVisible)
   
     }
    function toggleSubMenu_2() {
      console.log("toggle-2")
     setIsSubMenuVisible_2(!isSubMenuVisible_2);
     console.log(isSubMenuVisible_2)
     }
   function toggleSubMenu_3() {
    console.log("toggle-3")
   setIsSubMenuVisible_3(!isSubMenuVisible_3);
   console.log(isSubMenuVisible_3)
    }
    function toggleSubMenu_4() {
      console.log("toggle-4")
     setIsSubMenuVisible_4(!isSubMenuVisible_4);
     console.log(isSubMenuVisible_4)
      }
      function toggleSubMenu_5() {
        console.log("toggle-5")
       setIsSubMenuVisible_5(!isSubMenuVisible_5);
       console.log(isSubMenuVisible_5)
        }
        function toggleSubMenu_6() {
          console.log("toggle-6")
         setIsSubMenuVisible_6(!isSubMenuVisible_6);
         console.log(isSubMenuVisible_6)
          }
         
 
 


    return (
        
<div>
<html lang="en">
  <head>
    
    <title>Career Guidance</title>
  </head>
  <body>
   <section className="introd">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="fluid">
              <p id="par">
                Career interests are your preferences regarding work activities
                and environment. Identifying your career interest helps you make
                a well-informed and more strategic decision on your career
                path.<br />
                Following your career interest means your are pursuing a career
                that uses your talents and aligns with your passion and
                preferences. Understanding and being able to determine your
                passion helps you find fulfillment and success in your chosen
                profession.<br />
                In this webpage we provide you with several options that will enable you to explore and make the
                right career decisions.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
          </div>
        </div>
    </div>
    </section>
    <section class="mycourse">
      <div class="container" id="table">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <div class="humanities">
                <h3 onClick={toggleSubMenu}>Humanities</h3>
                {isSubMenuVisible && (
                <div id="course1"  style={{ display: isSubMenuVisible ? "block" : "none" }}>
                  <button class="btn" onClick={() => setActive("history")}>History</button>
                  <button class="btn" onClick={() => setActive("philosophy")}>Philosophy</button>
                  <button class="btn" onClick={() => setActive("Literature")}>Literature</button>
                  <button class="btn" onClick={() => setActive("ReligiousStudies")}>Religious Studies</button>
                  <button class="btn" onClick={() => setActive("Languages")} id="itB">Languages</button>
                  <button class="btn" onClick={() => setActive("VisualandPerformingArts")} id="itB">Visual and performing Arts</button>
                  <button class="btn" onClick={() => setActive("Communication")} id="itB">Communication</button>
                  <button class="btn" onClick={() => setActive("Anthropology")} id="itB">Anthropology</button>
                  <button class="btn" onClick={() => setActive("CulturalStudies")} id="itB">Cultural Studies</button>
                </div>
                )}
              </div>
              <hr />
              <div class="arts">
                <h3 onClick={toggleSubMenu_2} id="two">Arts</h3>
                {isSubMenuVisible_2 && (
                <div id="course2"style={{ display: isSubMenuVisible_2 ? "block" : "none" }}>
                  <button class="btn" onClick={() => setActive("DiplomainEducation")} >Diploma in education</button>
                  <button class="btn" onClick={() => setActive('Law')}>Law</button>
                  <button class="btn" onClick={() => setActive('FashionDesign')}>Fashion Design</button>
                  <button class="btn" onClick={() => setActive('InteriorDesign')}>Interior Design</button>
                  <button class="btn" onClick={() => setActive('BusinessManagement')}id="itA">Business Management</button>
                  <button class="btn" onClick={() => setActive('ForeignLanguagesDiploma')}id="itA">Foreign Languages Diploma</button>
                  <button class="btn" onClick={() => setActive('BArch')}id="itA">B. Arch</button>
                  <button class="btn" onClick={() => setActive('Journalism')}id="itA">Journalism</button>
                  <button class="btn" onClick={() => setActive('DiplomaInDramatization')}id="itA">Diploma in Dramatization</button>
                  <button class="btn" onClick={() => setActive('AdvertisingManagement')}id="itA">Advertising Management</button>
                  <button class="btn" onClick={() => setActive('EventManagement')}id="itA">Event Management</button>
                </div>
                 )}
              </div>
              <hr />
              <div class="commerce">
                <h3 onClick={toggleSubMenu_3} id="three">Commerce</h3>
                {isSubMenuVisible_3 && (
                <div id="course3"style={{ display: isSubMenuVisible_3 ? "block" : "none" }}>
                  <button class="btn" onClick={() => setActive('CharteredAccountant')} id="acc">Chartered Accountant</button>
                  <button class="btn" onClick={() => setActive('BCom')}>B. Com</button>
                  <button class="btn" onClick={() => setActive('BankingInsurance')}>Banking/Insurance</button>
                  <button class="btn" onClick={() => setActive('UPSC')}>UPSC</button>
                  <button class="btn" onClick={() => setActive('BusinessManagement')}>Business Management</button>
                  <button class="btn" onClick={() => setActive('BachelorOfEducation')}>Bachelor of Education</button>
                </div>
                )}
              </div>
              <hr />
              <div class="science">
                <h3 onClick={toggleSubMenu_4} id="four">Science</h3>
                {isSubMenuVisible_4 && (
                <div id="course4"style={{ display: isSubMenuVisible_4 ? "block" : "none" }}>
                  <button class="btn" onClick={() => setActive('Technology')}>Technology</button>
                  <button class="btn" onClick={() => setActive('MBBS')}>MBBS</button>
                  <button class="btn" onClick={() => setActive('BachelorofScience')}id="ENG">
                  Bachelor of Science
                  </button>
                  <button class="btn" onClick={() => setActive('Agriculture')}>Agriculture</button>
                  <button class="btn" onClick={() => setActive('Pharmacy')}>Pharmacy</button>
                  <button class="btn" onClick={() => setActive('Nursing')}>Nursing</button>
                  <button class="btn" onClick={() => setActive('HomeScience')}>Home Science</button>
                  <button class="btn" onClick={() => setActive('HotelManagement')}>Hotel Management</button>
                  <button class="btn" onClick={() => setActive('NDA')}>Indian Armed Forces (Navy, Defence and Army)</button>
                </div>
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
    {active === "history" && <div><History /></div>}   
    {active === "philosophy" && <div><Philosophy /></div>}   
    {active === "Literature" && <div><Literature /></div>}   
    {active === "ReligiousStudies" && <div><ReligiousStudies /></div>}   
    {active === "Languages" && <div><Languages /></div>}   
    {active === "VisualandPerformingArts" && <div><VisualandPerformingArts /></div>}
    {active === "Communication" && <div><Communication /></div>} 
    {active === "Anthropology" && <div><Anthropology /></div>}
    {active === "CulturalStudies" && <div><CulturalStudies /></div>}
    {active === "DiplomainEducation" && <div><DiplomainEducation /></div>}   
    {active === "Law" && <div><Law /></div>}   
    {active === "FashionDesign" && <div><FashionDesign /></div>}   
    {active === "InteriorDesign" && <div><InteriorDesign /></div>}   
    {active === "BusinessManagement" && <div><BusinessManagement /></div>}   
    {active === "ForeignLanguagesDiploma" && <div><ForeignLanguagesDiploma /></div>}
    {active === "BArch" && <div><BArch /></div>} 
    {active === "Journalism" && <div><Journalism /></div>}
    {active === "DiplomaInDramatization" && <div><DiplomaInDramatization /></div>}
    {active === "AdvertisingManagement" && <div><AdvertisingManagement /></div>}   
    {active === "EventManagement" && <div><EventManagement /></div>}   
    {active === "CharteredAccountant" && <div><CharteredAccountant /></div>}   
    {active === "BCom" && <div><Bcom /></div>}   
    {active === "BankingInsurance" && <div><BankingInsurance /></div>}   
    {active === "UPSC" && <div><UPSC /></div>}
    {active === "BusinessManagement" && <div><BusinessManagementC /></div>} 
    {active === "BachelorOfEducation" && <div><BachelorOfEducation /></div>}
    {active === "Technology" && <div><Technology /></div>}
    {active === "MBBS" && <div><MBBS /></div>}
    {active === "BachelorofScience" && <div><BachelorofScienceC /></div>}
    {active === "Agriculture" && <div><Agriculture /></div>}
    {active === "Pharmacy" && <div><Pharmacy /></div>}
    {active === "Nursing" && <div><Nursing /></div>}
    {active === "HomeScience" && <div><HomeScience /></div>}
    {active === "HotelManagement" && <div><HotelManagement /></div>}
    {active === "NDA" && <div><NDA /></div>}
    

             
            

   

  </body>
</html>
</div>
    )
}
export default ShowRoadmap