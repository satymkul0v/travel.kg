import "./Stories.css";
import React, { useState, useEffect } from "react";

const storiesData = [
  {
    id: 1,
    preview: "assets/jalalabad1.png",
    media: [
      { type: "image", src: "assets/chatkal.png" },
      { type: "video", src: "assets/karakamysh.MP4" },
      { type: "image", src: "assets/alabuka.png" },
      { type: "video", src: "assets/sary.MP4" },
    ],
  },
  {
    id: 2,
    preview: "assets/ysssyk.jpg",
    media: [
      { type: "video", src: "assets/yssyk.mp4" },
      { type: "image", src: "assets/ik.jpg" },
      { type: 'video', src: 'assets/jeti.MP4'},
    ],
  },
  {
    id: 3,
    preview: "assets/naryn.jpg",
    media: [
      { type: "image", src: "assets/image4.jpg" },
      { type: "video", src: "assets/video4.mp4" },
      { type: "video", src: "assets/video5.mp4" },
    ],
  },
];

export default function Stories() {
  const [activeStory, setActiveStory] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isManual, setIsManual] = useState(false); // Флаг для ручного переключения

  const handleOpenStory = (story) => {
    setActiveStory(story);
    setCurrentMediaIndex(0);
    setIsManual(false); // Сброс ручного режима при открытии истории
  };

  const handleNextMedia = () => {
    if (activeStory && currentMediaIndex < activeStory.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    } else {
      setActiveStory(null);
    }
    setIsManual(true); // Если нажали кнопку, выключаем авто-смену
  };

  const handlePrevMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
    setIsManual(true); // Если нажали кнопку, выключаем авто-смену
  };

  // Авто-переключение изображений (если не было ручного вмешательства)
  useEffect(() => {
    if (!activeStory || isManual) return;

    const currentMedia = activeStory.media[currentMediaIndex];

    if (currentMedia.type === "image") {
      const timer = setTimeout(() => {
        handleNextMedia();
      }, 3000); // 3 секунды на изображение

      return () => clearTimeout(timer);
    }
  }, [activeStory, currentMediaIndex, isManual]);

  return (
    <div className="blok1">
      <h1>Kyrgyzstan Stories</h1>
      <div className="stories-container">
        {storiesData.map((story) => (
          <div key={story.id} className="story-preview" onClick={() => handleOpenStory(story)}>
            <img src={story.preview} alt="Story Preview" />
          </div>
        ))}
      </div>

      {activeStory && (
        <div className="fullscreen-story" onClick={() => setActiveStory(null)}>
          {activeStory.media[currentMediaIndex].type === "image" ? (
            <img src={activeStory.media[currentMediaIndex].src} alt="Story" />
          ) : (
            <video
              src={activeStory.media[currentMediaIndex].src}
              autoPlay
              controls
              onEnded={handleNextMedia}
            />
          )}

          <button className="close-btn" onClick={(e) => { 
            e.stopPropagation();
            setActiveStory(null);
          }}>
            ×
          </button>

          {/* Кнопки переключения */}
          <div className="story-controls">
  <button 
    className="batton" 
    onClick={(e) => { 
      e.stopPropagation(); // предотвращаем закрытие истории
      handlePrevMedia(); 
    }} 
    disabled={currentMediaIndex === 0}
  >
    ⬅ Prev
  </button>

  <button 
    className="batton" 
    onClick={(e) => { 
      e.stopPropagation(); // предотвращаем закрытие истории
      handleNextMedia(); 
    }}
  >
    Next ➡
  </button>
</div>

        </div>
      )}
    </div>
  );
}
