import React from 'react';

interface VideoCardProps {
    title: string;
    description: string;
    videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, videoUrl }) => {
    return (
        <div className="video-card w-[250px] h-[444px] flex-shrink-0 rounded-lg overflow-hidden bg-black">
            <video 
                className="w-full h-full object-cover"
                controls 
                playsInline
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

const VideoCards: React.FC<{ videos: VideoCardProps[] }> = ({ videos }) => {
    return (
        <div className="video-cards flex gap-4 overflow-x-auto p-4 scrollbar-hide">
            {videos.map((video, index) => (
                <VideoCard
                    key={index}
                    title={video.title}
                    description={video.description}
                    videoUrl={video.videoUrl}
                />
            ))}
        </div>
    );
};

export default VideoCards;
