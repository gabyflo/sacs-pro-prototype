import { useState } from "react";

function PlayIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23" fill="#ff0000" opacity="0.9"/>
      <polygon points="19,14 38,24 19,34" fill="white"/>
    </svg>
  );
}

export default function VideoTab() {
  const [videoId, setVideoId] = useState("JW56981");
  const [validated, setValidated] = useState(false);

  function handleValidate() {
    if (videoId.trim()) setValidated(true);
  }

  return (
    <div className="flex-1 overflow-y-auto font-['Roboto',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#dee2e6]">
        <span className="text-[18px] font-semibold text-[#2d353c]">Video</span>
        <div className="flex items-center gap-2">
          {/* ID Video input group */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-[#6b7280] shrink-0">ID Video:</span>
            <input
              type="text"
              value={videoId}
              onChange={e => { setVideoId(e.target.value); setValidated(false); }}
              placeholder="JW56981"
              className="border border-[#dadce0] rounded-[6px] px-3 py-2 text-[14px] text-[#2d353c] w-[220px] focus:outline-none focus:border-[#5c96f6] transition-colors"
            />
            <button
              onClick={handleValidate}
              className="border border-[#4285f4] text-[#4285f4] rounded-[6px] px-4 py-2 text-[14px] hover:bg-[#e8f0fe] transition-colors"
            >
              Validar
            </button>
          </div>

          {/* Vertical divider */}
          <div className="w-px h-6 bg-[#dadce0] mx-1" />

          <button className="border border-[#dadce0] rounded-[6px] px-4 py-2 text-[14px] text-[#2d353c] hover:bg-[#f5f5f5] transition-colors">
            Buscar
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6">
        <div className="max-w-[800px] mx-auto flex flex-col gap-3">
          {/* Video placeholder */}
          <div
            className="bg-[#1a1a2e] rounded-[4px] relative flex items-center justify-center overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Thumbnail-style gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

            {/* Play button */}
            <div className="relative z-10">
              <PlayIcon />
            </div>

            {/* Mock title at bottom */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <p className="text-white text-[14px] font-medium leading-snug line-clamp-2">
                How to Add Pinterest Feed to Your Website
              </p>
              {validated && videoId && (
                <p className="text-white/60 text-[12px] mt-1">ID: {videoId}</p>
              )}
            </div>
          </div>

          {/* Status message */}
          {validated && (
            <div className="flex items-center gap-2 text-[13px] text-[#22c55e]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="#22c55e" strokeWidth="1.2"/>
                <path d="M4 7l2 2 4-4" stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Video validado correctamente.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
