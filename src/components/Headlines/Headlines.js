import React, { useEffect, useState } from 'react';
import News from '../Card/News';

const Headlines = () => {
    const [newses, setNewses] = useState([])
    useEffect(()=>{
    const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=178adb437cde4379a65b36f47b7d3411";
    fetch(newsUrl)
    .then(res => res.json())
    .then(data => setNewses(data.articles))
    }, []);

    return (
        <div>
            <h3 className="text-danger text-center">Top Headlines : {newses.length}</h3>
            {
                newses.map(news => <News news={news}></News>)
            }
        </div>
    );
};

export default Headlines;