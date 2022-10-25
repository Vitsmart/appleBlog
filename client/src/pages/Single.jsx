import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaTrashAlt} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import moment from "moment"
import { useContext } from 'react';
import { AuthContext } from '../components/context/authContext';

export const Single = () => {
  const [post, setPost] = useState({})
const location = useLocation()
const navigate = useNavigate()
const postId = location.pathname.split("/")[2]
const {currentUser} = useContext(AuthContext);



const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}

useEffect(() =>{
const fetchData = async ()=> {
    try{
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
    }catch(err){
        console.log(err)
    }
};
fetchData();
}, [postId]);

const handleDelete = async ()=>{
  try{
    await axios.delete(`/posts/${postId}`);
    navigate("/")
  }catch(err){}
}

  return (
    <div className='single'>
    <div className="content">
      <img src={`../uploads/${post?.img}`} alt=""/>
    <div className="user">
      {post.userImg && <img src={post.userImg} alt=''/>}
    
    <div className="info">
      <span>{post.username}</span>
      <p>{moment(post.date).fromNow()}</p>
    </div>
    </div>
    {currentUser.username === post.username && (
    <div className="edit">
      <Link to={'/write?edit=2'} state={post}><FaEdit/></Link>
      < FaTrashAlt onClick={handleDelete}/>
    </div>
    )}
    <h1>{post.title}</h1>
    {getText(post.desc)}
    </div>
    <Menu cat={post.cat}/>
    </div>
  )
}
