// components/YouTubeGallery.js

import React from "react";

const YouTubeGallery = ({ videos }) => {
  // uzmi samo prva 3 videa da budeš siguran
  const visibleVideos = videos.slice(0, 3);

  const toEmbedUrl = (input) => {
    if (!input) return "";

    // ako je samo ID (nema http), vrati standardni embed url
    if (!input.startsWith("http")) {
      return `https://www.youtube.com/embed/${input}`;
    }

    try {
      const url = new URL(input);

      // klasičan youtube link ?v=ID
      if (url.hostname.includes("youtube.com")) {
        const v = url.searchParams.get("v");
        if (v) return `https://www.youtube.com/embed/${v}`;
      }

      // youtu.be/ID
      if (url.hostname.includes("youtu.be")) {
        const idFromPath = url.pathname.replace("/", "");
        if (idFromPath) return `https://www.youtube.com/embed/${idFromPath}`;
      }

      return input; // fallback – ako je već embed link
    } catch {
      return input;
    }
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        {visibleVideos.map((video, index) => (
          <div className="video-card" key={index}>
            <div className="video-inner">
              <iframe
                src={toEmbedUrl(video)}
                title={`YouTube video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 1rem;
        }

        .gallery {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .video-card {
          background: #050505;
          border-radius: 16px;
          padding: 0.75rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .video-inner {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 */
          overflow: hidden;
          border-radius: 12px;
        }

        .video-inner iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (min-width: 640px) {
          .gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .gallery {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default YouTubeGallery;
