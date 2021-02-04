import { useState, useEffect } from 'react';
import youtube from '../apis/youTube';

const useVideos = (defaultsearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultsearchTerm);
    }, [defaultsearchTerm]);

    const search = async term => {
        const response = await youtube.get(
            '/search',
            {
                params: {
                    q: term
                }
            }
        );

        setVideos(response.data.items);
    };

    // Can return an array a la React convention for primitive hooks (useState etc.)...
    return [videos, search];
    // ...but most common is to return an object a la JavaScript convention.
    //return { videos, search };
};

export default useVideos;