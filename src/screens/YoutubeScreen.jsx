import React, { useState, useEffect } from 'react';
import YoutubeEmbed from '../components/YoutubeEmbed'; // Import your YoutubeEmbed component

const YoutubeScreen = () => {
  const [channelId, setChannelId] = useState('UCyEJX-kSj0kOOCS7Qlq2G7g'); // Replace with actual channel ID
  const [videoId, setVideoId] = useState(null);
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
        }
      } catch (error) {
        console.error('Error fetching live stream data:', error);
      }
    };

    fetchLiveStream();
  }, [channelId]);

  return (
    <div>
      {videoId ? (
        <YoutubeEmbed videoId={videoId} />
      ) : (
        <p>Loading live stream...</p>
      )}
    </div>
  );
};

export default YoutubeScreen;
