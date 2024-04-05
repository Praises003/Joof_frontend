import React, { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoComponent';
import axios from 'axios';

const YoutubeScreen = () => {
  const [liveStreamId, setLiveStreamId] = useState('https://www.youtube.com/watch?v=nvvLD5TNAwQ');

  useEffect(() => {
    const fetchLiveStreamId = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search', {
            params: {
              part: 'snippet',
              eventType: 'live',
              type: 'video',
              q: 'YOUR_SEARCH_KEYWORD_HERE', // Provide a keyword to search for the live stream
              key: 'AIzaSyB1UEKwOdN-jdPbT1vFBVaw49PhtoLxB8k', // Replace with your YouTube Data API key
            }
          }
        );

        if (response.data.items.length > 0) {
          setLiveStreamId(response.data.items[0].id.videoId);
        } else {
          console.error('No live streams found');
        }
      } catch (error) {
        console.error('Error fetching live stream:', error);
      }
    };

    fetchLiveStreamId();
  }, []);

  return (
    <div>
      <h1>My YouTube Live Stream App</h1>
      {liveStreamId && <VideoPlayer videoId={liveStreamId} />}
    </div>
  );
};

export default YoutubeScreen
