import React from "react";
import "./Cards.css";

export default function Cards({price,name,about,image,favorite,handleFavorite,id}) {
  return (
    <div className="card">
      <img
        src={image}
        alt="Avatar"
        className="card-img"
      />
      <div className="container">
        <div className="secoundContainer">
          <div className="IconPrice">
            <div className="price">
              <h5>₹ {price}</h5>
              <p>/month</p>
            </div>
            <div className="iconBox" onClick={()=>handleFavorite(id)}>
              {
                favorite ? (<i className="fa-solid fa-heart"style={{color:"red"}}></i>): (<i className="fa-regular fa-heart" ></i>)
              }
              {/*            */}
              
            </div>
          </div>
          <h4>{name}</h4>
          <p>{about}</p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <i className="fa-solid fa-bed"></i>
              <p> 3 Beds</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
               <i className="fa-solid fa-bath"></i>
              <p> 3 Beds</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <i className="fa-solid fa-square"></i>
              <p> 3 Beds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
