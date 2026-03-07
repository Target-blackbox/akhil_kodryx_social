import React, { useState } from 'react';

export default function VideoLoader({ onEnded }) {
    const [isFading, setIsFading] = useState(false);

    const handleEnded = () => {
        setIsFading(true);
        setTimeout(() => {
            if (onEnded) onEnded();
        }, 500); // 500ms fade out duration
    };

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
        >
            <video
                src="/kodryx ai_animation.mp4"
                autoPlay
                muted
                playsInline
                onEnded={handleEnded}
                className="w-full h-full object-cover"
            />
        </div>
    );
}
