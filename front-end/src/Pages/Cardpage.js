import React, { useEffect, useState } from "react";
import axios from "axios";
import './cardpage.scss';
import {  useParams} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Cardpage() {
  const [card, setCard] = useState([]);
  const params = useParams()

  useEffect(() => {
    const id = params.id
    axios.get("http://localhost:5354/"+id).then((data) => {
      console.log(data);
      setCard(data?.data);
    });
  }, []);

  return (
    
    <div className="cardpage">
         <Navbar/>
         <div className="cardId">
             <div>
            <img src={card.img}/>
            <p>{card?.title}</p>
            <p>{card?.des}</p>
          </div>
          </div>

          <Footer/>
    </div>
  );
}

export default Cardpage;
