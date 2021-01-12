import React, { useState, useEffect } from "react";

export default function About(props) {
  const [name, setName] = useState([]);
  useEffect(() => {
    fetch("senddata")
      .then((res) => res.json())
      .then((res) => {
        setName(res.students);
        console.log(name);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
      <h2>About</h2>
      <h3>{props.sendNumber}</h3>
      {/* <ul>
         { name.map(({st})=>
              {<li key={st.id}></li>}
          )
          }
      </ul> */}

    </div>
  );
}
