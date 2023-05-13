import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar1 from '../components/LandingPage/Sidebar1';
import ShowRoadmap from '../components/Roadmaps/RoadmapTemplate';

const WeGuide = () => {
    return (
        <div className=''>
          <Sidebar1 />  
            {/* <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className="text-gray-3000 font-[800] text-large rounded-lg p-2">Welcome!!</div>
            <div className="px-6 pt-6 2xl:container">
                        <ShowRoadmap />
                    </div>
            </div> */}
        </div>


    )
}

export default WeGuide