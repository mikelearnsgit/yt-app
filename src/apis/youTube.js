import axios from 'axios';

const KEY = 'AIzaSyADcQt9GBCPRJ8Et43m1v3L_h1ghSE2wo4';

// The axios.create() function creates a new Axios instance enabling you to set custom defaults.
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});