import React, { useEffect, useState } from "react";
import axios from "axios";
import {  Link } from "react-router-dom";
import './cards.scss';
function Cards() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5354/").then((data) => {
      setPost(data?.data);
    });
  }, []);

  return (
    <div className="searchAndCards">
        <input className="search" type="text" onChange={((e)=>setSearch(e.target.value))}></input>
      
    <div className="cards">

        
      {post.filter((item)=>{
        if (search ==="") {
           return item
        } else if ( item.title.toLowerCase().includes(search.toLowerCase())){
           return item
        }
      })
      
      .map((item, i) => {
        return (
          <div className="card" key={i}>
            <img src={item.img}/>
            <p>{item?.title}</p>
            <p>{item?.des}</p>

            <button className="linkMore">  <Link className="linkCard" to={`/Card/`+item._id}>More</Link></button>

            <button className="linkMore" onClick={()=>{
axios.delete(`http://localhost:5354/`+item._id).then(()=>{
    axios.get("http://localhost:5354/").then((data) => {
        setPost(data?.data);
      });
})


            }}><p>X</p></button>
          </div>
         
        );
      })}
    </div>
    </div>
  );
}

export default Cards;