import React from "react";
import "./Cards.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar sticky">
        <div className="navbar-inner">
          <div className="Logo">
            <i className="fa-solid fa-house-chimney"></i> <h5>Easter</h5>
          </div>
          <div className="btn active">Rent</div>
          <div className="btn">Buy</div> <div className="btn">Sell</div>
          <div>
            <select name="cars" id="cars" className="btn">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <select name="cars" id="cars" className="btn">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
