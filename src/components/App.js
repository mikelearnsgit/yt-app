import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    // Run the anonymous function defined to useEffect whenever
    // the list (array) of videos changes i.e. whenever we get
    // a new list of videos select the first video in the list.
    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    // Only one line of code...
    //const onVideoSelect = video => {
    //    setSelectedVideo(video);
    //};
    // ...so can be written as...
    //const onVideoSelect = video => setSelectedVideo(video);
    // ...and made inline...
    //onVideoSelect = {video => setSelectedVideo(video)}
    // ...which is the same as...
    //onVideoSelect = {setSelectedVideo}

    return (
        <div className="ui container" >
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;