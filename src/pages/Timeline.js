import React from 'react';
import '../css/Timeline.css';

import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';

const Timeline = () => {
  return (
    <div className='timeline'>
      <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">2019 - Present</div>
                        <h3 class="title">Freelance</h3>
                        <p class="description">
                        Digital Artist - Digital Painting, 2D Character Concept Art.
                        </p>
                        <div class="timeline-icon"><GiIcons.GiPencilBrush/></div>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">2021 - 2022</div>
                        <h3 class="title">Course Project - Applications of Graph Theory</h3>
                        <p class="description">
                        Prim's & Dijkstra's algorithm visualization - UI Design & Writing Reports.
                        </p>
                        <div class="timeline-icon"><GrIcons.GrGraphQl/></div>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">2021 - 2022</div>
                        <h3 class="title">Course Project - WinForms Application</h3>
                        <p class="description">
                        Footwear store management app - UI Design & Writing Reports.
                        </p>
                        <div class="timeline-icon"><FaIcons.FaRegWindowMaximize/></div>
                    </a>
                </div>
                <div class="timeline">
                    <a href="#" class="timeline-content">
                        <div class="timeline-year">2022</div>
                        <h3 class="title">Course Project - Object Oriented Analysis and Design</h3>
                        <p class="description">
                        Inn & Suites Management - Business Analysis & Writing Reports.
                        </p>
                        <div class="timeline-icon"><FaIcons.FaHotel/></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default Timeline;