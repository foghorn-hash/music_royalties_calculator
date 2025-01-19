import React, { useState, useEffect } from 'react';
import './MusicRoyaltiesCalculator.css'; // Optional for styling
import Button from 'react-bootstrap/Button';
import spotifyLogo from '../../assets/spotify.svg';
import deezerLogo from '../../assets/deezer.svg';
import amazonLogo from '../../assets/amazon-unlimited.svg';
import appleLogo from '../../assets/apple-music.svg';
import youtubeMusicLogo from '../../assets/youtube-music.svg';
import tidalLogo from '../../assets/tidal.svg';
import soundcloudLogo from '../../assets/soundcloud.svg';
import tiktokLogo from '../../assets/tiktok.svg';
import youtubeLogo from '../../assets/youtube.svg';

function MusicRoyaltiesCalculator() {
  // State for the number of streams
  const [streams, setStreams] = useState(1000000);

  // Platform data with rates
  const platforms = [
    { name: 'Spotify', rate: 0.00351234 },
    { name: 'Deezer', rate: 0.00616200 },
    { name: 'Amazon Unlimited', rate: 0.01027000 },
    { name: 'Apple Music', rate: 0.00523770 },
    { name: 'Youtube Music', rate: 0.00260858 },
    { name: 'Tidal', rate: 0.00821600 },
    { name: 'SoundCloud', rate: 0.00821600 },
    { name: 'TikTok', rate: 0.00821600 },
    { name: 'YouTube', rate: 0.00100749 },
  ];

  const logoPaths = {
    Spotify: spotifyLogo,
    Deezer: deezerLogo,
    'Amazon Unlimited': amazonLogo,
    'Apple Music': appleLogo,
    'Youtube Music': youtubeMusicLogo,
    Tidal: tidalLogo,
    SoundCloud: soundcloudLogo,
    TikTok: tiktokLogo,
    YouTube: youtubeLogo,
  };

  // Handle input change
  const handleChange = (e) => {
    setStreams(Number(e.target.value));
  };

  return (
    <div className="calculator">
      <div className="input-container">
        <label htmlFor="streams">Estimated number of streams:</label>
        <input
          type="number"
          id="streams"
          value={streams}
          onChange={handleChange}
        />
      </div>
      <Button variant="primary" className="calculate-button">Calculate</Button>
      <div className="results">
      {platforms.map((platform) => {
        const logoPath = logoPaths[platform.name];

        return (
            <div key={platform.name} className="platform">
            <img
                src={logoPath} // Use the dynamic path here
                alt={platform.name}
                className="platform-logo"
            />
            <div className="platform-details">
                <h3>{platform.name}</h3>
                <p className="result">{Number((streams * platform.rate).toFixed(2)).toLocaleString()} €</p>
            </div>
            </div>
        );
        })}
      </div>
    </div>
  );
}

export default MusicRoyaltiesCalculator;