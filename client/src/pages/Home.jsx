import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {

const [posts, setPosts] = useState([])
const cat = useLocation().search

useEffect(() =>{
const fetchData = async ()=> {
    try{
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
    }catch(err){
        console.log(err)
    }
};
fetchData();
}, [cat]);

// const posts = [
//     {
//         id:1,
//         title: "A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained",
//         desc:"lorem A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained in crutches, yoking under the weight of gross inefficiencies that have plagued it for several years.",
//         img:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
//     },
//     {
//         id:2,
//         title: "A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained",
//         desc:"lorem A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained in crutches, yoking under the weight of gross inefficiencies that have plagued it for several years.",
//         img:"https://t4.ftcdn.net/jpg/03/08/88/85/360_F_308888533_dAJWty7EGR3gkaEdSKf3TFHJoaeE2n9W.jpg"
//     },
//     {
//         id:3,
//         title: "A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained",
//         desc:"lorem A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained in crutches, yoking under the weight of gross inefficiencies that have plagued it for several years.",
//         img:"https://t3.ftcdn.net/jpg/03/59/31/68/360_F_359316888_QL4VKw3ZLdZWeHGZaajVrt6jbWQG5NsM.jpg"
//     },
//     {
//         id:4,
//         title: "A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained",
//         desc:"lorem A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained in crutches, yoking under the weight of gross inefficiencies that have plagued it for several years.",
//         img:"https://thumbs.dreamstime.com/b/abuja-skyline-part-city-nigeria-s-political-capital-53546863.jpg"
//     },
// ]


const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
}

  return (
    <div className='home'>
<div className='posts'>
{posts.map(post => (
    <div className='post' key={post.id}>
        <div className='img'>
            <img src={`../uploads/${post.img}`} alt=''/>
        </div>
        <div className='content'>
            <Link to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
            </Link>
            <p>{getText(post.desc)}</p>
            <button>Read More</button>
        </div>
         </div>
))}
</div>
    </div>
  )
}
