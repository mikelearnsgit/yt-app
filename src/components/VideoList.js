import React from 'react';
import VideoItem from './VideoItem';

// Here we're using JavaScript object destructuring:
// First pass:
// const props = { videos: <array of videos> }; 
// const {videos} = props;
// Second pass:
// const props = { videos: <array of videos>, onVideoSelect: <reference to callback function> }; 
// const {videos, onVideoSelect} = props;
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        )
    })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
};

export default VideoList;