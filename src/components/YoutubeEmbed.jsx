import React, { useState, useEffect } from 'react';

const YoutubeEmbed = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player('player', {
        videoId/*:"1lKTSdpc0go"*/,
        playerVars: { autoplay: 0, controls: 1 }, // Customize player options here
      });
      setPlayer(newPlayer);
    };

    // Load the YouTube Iframe API script asynchronously
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      // Cleanup function to avoid memory leaks
      window.onYouTubeIframeAPIReady = null;
    };
  }, [videoId]);

  return (
    <div id="player"></div>
  );
};

export default YoutubeEmbed;
