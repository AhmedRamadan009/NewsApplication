import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Politcis() {
  const [HealthNews, setHealthNews] = useState([])
  async function getHealthNews(){
let {data} = await axios.get('https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=27b72cf6eed44cdcb11855aed93e1c59');
setHealthNews(data.articles);


  }
useEffect(()=>{

  getHealthNews();
 
},[])
  return (
    <>
<div className="container">
      <div className="row gy-3 mt-5">
        {HealthNews.map((news,i)=>
        <div key={i} className="col-md-4 my-3 border-3 shadow-lg">
          <div className="news text=center">
            <img src={news.urlToImage}className="w-100" />
            <h5>{news.title}</h5>
            <p>{news.description}</p>
              <a href={news.url}>للذهاب الي الخبر اضغط هنا</a>
            <p>المؤلف:{news.author}</p>
            <span>تاريخ النشر:{news.publishedAt}</span>


          </div>
        </div>
        )}
      </div>
    </div>
    
    
    
    
    


    </>
  )
}
