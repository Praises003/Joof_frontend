import React, { useState, useEffect } from 'react';

const YoutubeScreen = ({ channelId }) => {
  const [player, setPlayer] = useState(null);
  const [liveStreamId, setLiveStreamId] = useState(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const search = async () => {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCyEJX-kSj0kOOCS7Qlq2G7g&type=live&key=AIzaSyB1UEKwOdN-jdPbT1vFBVaw49PhtoLxB8k`);
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setLiveStreamId(data.items[0].id.videoId);
        }
      };

      search();

      const newPlayer = new window.YT.Player('player', {
        width: '640', // Adjust width and height as needed
        height: '390',
        videoId: liveStreamId, // Initially set to null
        playerVars: { autoplay: 1, controls: 1 }, // Customize player options here
        events: {
          onReady: (event) => {
            event.target.playVideo(); // Autoplay the live stream
          },
        },
      });
      setPlayer(newPlayer);
    };

    // Load the YouTube Iframe API script asynchronously
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      // Cleanup function to avoid memory leaks
      window.onYouTubeIframeAPIReady = null;
    };
  }, [channelId]);

  return (
    <div id="player"></div>
  );
};

export default YoutubeScreen;
