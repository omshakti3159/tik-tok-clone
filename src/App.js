import React, { useEffect, useState } from 'react'
import './App.css';
import axios from './axios'
import Video from './components/Video'

function App() {
  const [videos, setvideos] = useState([])
  useEffect(() => {
    async function fetchpost() {
      const response = await axios.get('/videos')
      setvideos(response.data)

      return response;
    }
    fetchpost();
  }, [])
  console.log(videos)
  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map(({ channel, description, likes, messages, shares, song, url, _id }) => (
            <Video url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
              key={_id}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
