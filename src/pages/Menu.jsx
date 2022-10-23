import React from 'react'

export default function Menu() {

    const posts = [
        {
    id:1,
        title: "A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained",
        desc:"lorem A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained in crutches, yoking under the weight of gross inefficiencies that have plagued it for several years.",
        img:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
    },
    {
        id:2,
        title: "A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained",
        desc:"lorem A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained in crutches, yoking under the weight of gross inefficiencies that have plagued it for several years.",
        img:"https://t4.ftcdn.net/jpg/03/08/88/85/360_F_308888533_dAJWty7EGR3gkaEdSKf3TFHJoaeE2n9W.jpg"
    },
    {
        id:3,
        title: "A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained",
        desc:"lorem A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained in crutches, yoking under the weight of gross inefficiencies that have plagued it for several years.",
        img:"https://t3.ftcdn.net/jpg/03/59/31/68/360_F_359316888_QL4VKw3ZLdZWeHGZaajVrt6jbWQG5NsM.jpg"
    },
    {
        id:4,
        title: "A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained",
        desc:"lorem A little over a year after the passage of the Petroleum Industry Act (PIA), the sector has remained in crutches, yoking under the weight of gross inefficiencies that have plagued it for several years.",
        img:"https://thumbs.dreamstime.com/b/abuja-skyline-part-city-nigeria-s-political-capital-53546863.jpg"
    },
]
  return (
    <div className='menu'>
        <h1>Other post you may like</h1>
        {posts.map(post => (
             <div className='post' key={post.id}>
                 <img src={post.img} alt=''/>
                 <h2>{post.title}</h2>
                 <button>Read more</button>

             </div>
        ))}
    </div>
  )
}
