import React, { useEffect, useState } from 'react'
import "./news.css"
const API_KEY="9e11cc47367c4d608fcdd8a7fca44357";

const News = () => {

    const [mynews , setMyNews] = useState([]);

    const fetchData = async () => {
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9e11cc47367c4d608fcdd8a7fca44357")
        let data = await response.json();
        setMyNews(data.articles)
    }
    

    useEffect(() => {
        fetchData();

    },[])
  return ( //begins the rendering of the components
    <>
    <div className="mainDiv">
    {mynews.map((ele) => {
            console.log(ele)
            return(
         <>
    <div class="card" style={{width: "350px" , height:"400px" , marginLeft:"7.2rem" , marginTop:"2rem"}}>
        
        <img src={ele.urlToImage== null?"https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/10/PAPP/72176847007-flooddh-011024-c.jpg?crop=5019,2824,x0,y278&width=3200&height=1801&format=pjpg&auto=webp":ele.urlToImage} class="card-img-top" alt='...'/>
        <div class="card-body">
            <h5 class="card-title">{ele.author}</h5>
            <p class="card-text">
                {ele.title}
            </p>
            <a href={ele.url} target="_blank" class="btn btn-primary">
                Read More
                </a>
        </div>
    </div>
    </>
      );

 }) }
     </div>
     </>
  );
};

export default News