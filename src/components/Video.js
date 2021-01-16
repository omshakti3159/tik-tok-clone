import React, { useRef, useState } from 'react'
import '../css/Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
const Video = ({ url, likes, messages, shares, channel, description, song }) => {
    const [playing, setplaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoClick = () => {
        if (playing) {
            videoRef.current.pause();
            setplaying(false)
        }
        else {
            videoRef.current.play();
            setplaying(true)
        }
    }

    return (
        <div className="video">
            <video
                onClick={handleVideoClick}
                loop
                autoPlay='true'
                ref={videoRef}
                className="video__player" >
                <source src={url} type="Video/mp4" />
            </video>
            <VideoFooter channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
