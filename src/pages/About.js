import React from "react";
import '../css/About.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as SlIcons from 'react-icons/sl';
import * as ImIcons from 'react-icons/im';

function About(){
    return (
      <div class="cv">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
    
            {/* <!-- header --> */}
            <header class="cv-header">
              <img class="cv-header__img" src="https://i.imgur.com/LrPkFVQ.jpg" data-zoomable/>
              <div class="cv-header__text-container">
                <h1 class="cv-header__name">Nguyen Ngoc Tram</h1>
                {/* <!--<p class="cv-header__job-title">Intern Front-end developer</p>--> */}
              </div>
            </header>
    
            {/* <!-- content --> */}
            <section class="cv-section">
              <h2 class="cv-section__title">Objective</h2>
              <div class="cv-section__wrapper">
                <p class="cv-section__description">My goal is to embrace new knowledge and build career in a growing organization, where I can get the opportunities to prove my abilities by accepting challenges, fulfilling the organizational goal and climb the career ladder through continuous learning and commitment.</p>
              </div>
            </section>
            
            {/* <!-- education --> */}
            <section class="cv-section">
              <h2 class="cv-section__title">Education</h2>
              <div class="cv-section__wrapper">
                
                {/* <!-- University --> */}
                <div class="cv-section__experience">
                  <p class="cv-section__role">Ho Chi Minh City University of Education</p>
                  <p class="cv-section__period">2020 - Present</p>
                  <p class="cv-section__description">Faculty of Information Technology</p>
                </div>
                
                {/* <!-- high school --> */}
                <div class="cv-section__experience">
                  <p class="cv-section__role">Hung Vuong High School for The Gifted</p>
                  <p class="cv-section__period">2017 - 2020</p>
                  <p class="cv-section__description">English Specialized Class</p>
                </div>
              </div>
            </section>
    
          </div>
    
          {/* <!-- sidebar --> */}
          <aside class="col-md-4 cv-sidebar">
    
            {/* <!-- details --> */}
            <section class="cv-sidebar-section">
              <h2 class="cv-sidebar-section__title">Details</h2>
               <ul class="fa-ul">
                 <li><span class="fa-li"><AiIcons.AiTwotoneCalendar/></span>December 18th, 2002</li>
                  <li><span class="fa-li"><AiIcons.AiFillPhone/></span>032 766 0021</li>
                  <li><span class="fa-li"><AiIcons.AiFillMail/></span>tramnn.0702@gmail.com</li>
                 <li><span class="fa-li"><FaIcons.FaTwitter/></span>soullen_f</li>
                  <li><span class="fa-li"><ImIcons.ImLocation/></span>Tan Phu district, Ho Chi Minh city, Vietnam</li>
                </ul>
    
            </section>
    
            {/* <!-- skills --> */}
            <section class="cv-sidebar-section">
              <h2 class="cv-sidebar-section__title">Skills</h2>
              <h3><i>Front-end:</i></h3>
                <ul>
                  <li class="pri-tag">HTML</li>
                  <li class="pri-tag">CSS</li>
                  <li class="pri-tag">SCSS</li>
                  <li class="pri-tag">Bootstrap</li>
                  <li class="sec-tag">JavaScript</li>
                </ul>
              <h3><i>Others:</i></h3>
                <ul>
                  <li class="pri-tag">Teamwork</li>
                  <li class="pri-tag">Customer Service</li>
                  <li class="pri-tag">Verbal & Written Communication</li>
                  <li class="sec-tag">Digital Art</li>
                  <li class="pri-tag">Basic Graphic & Office Tools</li>
                </ul>
            </section>
    
            {/* <!-- interests --> */}
            <section class="cv-sidebar-section">
              <h2 class="cv-sidebar-section__title">Interests</h2>
              <p class="cv-sidebar-section__description">Minimalism, Responsive Design, UI Design, Foreign Languages, Gaming, Art.</p>
            </section>
    
            {/* <!-- languages --> */}
            <section class="cv-sidebar-section">
              <h2 class="cv-sidebar-section__title">Languages</h2>
                <ul>
                  <li class="pri-tag">Vietnamese (Native)</li>
                  <li class="pri-tag">English</li>
                  <li class="sec-tag">French</li>
                </ul>
            </section>
          </aside>
        </div>
      </div>
      </div>
    );
};

export default About;