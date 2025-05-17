import React from 'react'
import './BG_video.css'
function BG_video() {
  return (
    <>
        <div className="container_vide">
        <video className="background-video" autoPlay muted loop playsInline>
        <source src="/Bg_vid_mp_tou.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
    </>
  )
}

export default BG_video;