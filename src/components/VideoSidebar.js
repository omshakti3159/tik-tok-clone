import React, { useState } from 'react'
import '../css/VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const VideoSidebar = ({likes,shares,messages}) => {
    const [liked,setliked]=useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {
                    liked ? (
                <FavoriteIcon fontSize="large" onClick={ (e)=>setliked(false)}/>
                    ) : <FavoriteBorderIcon fontSize="large" onClick={ (e)=>setliked(true)}/>
                }
            <p>{liked?Number(likes)+1:likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large"/> 
                <p>{ messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{ shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar