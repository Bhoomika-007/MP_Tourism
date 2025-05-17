import React from 'react'
import './Home.css'
import BG_video from '../bg_video/BG_video';

function Home() {
  return (
    <>
        <div className="home-cont">
            <div className="bg-cont">
                <BG_video/>
            </div>
            <div className="home-total-cont">
                <div className="home-left">
                    <h1>MP TOURISM</h1>
                    <p>From the heart of INDIA </p>
                </div>
                <div className="home-right">
                    <p>MP known for its variety of </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;