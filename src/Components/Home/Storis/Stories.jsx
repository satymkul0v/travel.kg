import './Stories.css';
import React, { useState } from "react";

const storiesData = [
  { type: "video", src: "assets/karakamysh.MP4" },
  { type: "video", src: "assets/video.mp4" },
  { type: "video", src: "assets/chunkur.MP4"},
  { type: "video", src: "assets/jeti.MP4"}
];

export default function Stories() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <div className="stories-container">
      {storiesData.map((story, index) => (
        <div key={index} className="story-preview" onClick={() => setActiveStory(story)}>
          {story.type === "image" ? (
            <img src={story.src} alt="story" />
          ) : (
            <video src={story.src} muted playsInline autoPlay loop />
          )}
        </div>
      ))}

      {activeStory && (
        <div className="fullscreen-story" onClick={() => setActiveStory(null)}>
          {activeStory.type === "image" ? (
            <img src={activeStory.src} alt="story" />
          ) : (
            <video src={activeStory.src} autoPlay controls />
          )}
          <button className="close-btn" onClick={(e) => { 
              e.stopPropagation();
              setActiveStory(null);
          }}>×</button>
        </div>
      )}
    </div>
  );
}
