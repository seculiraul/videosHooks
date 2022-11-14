import {useState, useEffect} from "react";
import youtube from "../apis/youtube";


const useVideos = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultTerm);
    }, [defaultTerm])

    const search = async(term) => {
        const res = await youtube.get('/search', {
              params: {
                  q: term
                }
            })
        setVideos(res.data.items);
    }

    return [videos, search];
};

export default useVideos;