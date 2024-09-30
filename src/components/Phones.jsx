import React, { useEffect, useState } from "react";
import "./phones.css";

// const API = "http://localhost:4000";

const API = "https://mongo-node-production.up.railway.app";

function Phones() {
  const [mobiles, setMoblies] = useState([]);

  useEffect(() => {
    fetch(`${API}/mobiles`) // Promise Object
      .then((data) => data.json())
      .then((mbs) => setMoblies(mbs));
  }, []);

  return (
    <div className="App">
      {mobiles.map((mobile, index) => (
        <div key={index} className="phone-list-container">
          <div className="phone-container">
            <img
              className="phone-picture"
              src={mobile.img}
              alt={mobile.model}
            />
            <h2 className="phone-name">{mobile.model}</h2>
            <p className="phone-company">{mobile.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Phones;
