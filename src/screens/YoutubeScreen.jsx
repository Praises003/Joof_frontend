import React, { useState, useEffect } from 'react';
import YoutubeEmbed from '../components/YoutubeEmbed'; // Import your YoutubeEmbed component

const YoutubeScreen = () => {
  const [channelId, setChannelId] = useState('UCJHuzwKKMrWvMMi8N232wKw'); // Replace with actual channel ID
  const [videoId, setVideoId] = useState(null);
  const [err, setErr] = useState("")
  const apiKey = 'AIzaSyB1UEKwOdN-jdPbT1vFBVaw49PhtoLxB8k'; // Replace with your API key

  useEffect(() => {
    const fetchLiveStream = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=live&key=${apiKey}`);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        } else {
          console.warn('No live stream found for the provided channel ID.');
          setErr('No live stream found for the provided channel ID.')

        }
      } catch (error) {
        console.error('Error fetching live stream data:', error);
      }
    };

    fetchLiveStream();
  }, [channelId]);

  return (
  <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto px-4">

  
      <div className='w-full'>
        {videoId ? (
          <YoutubeEmbed videoId={videoId} />
        ) : (
          <p className='text-3xl font-bold my-24'>Loading live stream...</p>
        )}
      </div>
    </div>
  );
};

export default YoutubeScreen;
