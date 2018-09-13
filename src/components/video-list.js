import React, { Component } from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video, id) => {
        return (
        <VideoListItem 
        key={id} 
        onVideoSelect={props.onVideoSelect}
        video={video} 
        />);
    })

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
