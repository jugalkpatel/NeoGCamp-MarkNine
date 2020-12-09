import React, { useState } from "react";
import "./styles.css";

const gaming = [
  {
    name: "Asus ROG",
    rating: "4"
  },
  {
    name: "Acer Predator",
    rating: "5"
  },
  {
    name: "Alienware m15 R3",
    rating: "5"
  },
  {
    name: "HP Omen 15 ",
    rating: "5"
  }
];

const convertible = [
  {
    name: "HP Pavillion x360",
    rating: "5"
  },
  {
    name: "Lenovo Ideapad flex 5",
    rating: "4"
  },
  {
    name: "Lenovo ThinkPad L13 Yoga",
    rating: "4"
  },
  {
    name: "Microsoft Surface Go 2",
    rating: "3"
  }
];

const business = [
  {
    name: "Lenovo Thinkpad X1",
    rating: "5"
  },
  {
    name: "Apple Macbook Air",
    rating: "5"
  },
  {
    name: "Microsoft Surface Pro 7",
    rating: "4.5"
  },
  {
    name: "Asus ExpertBook B9450",
    rating: "4.5"
  }
];

export default function App() {
  const btnStyle = {
    margin: "0.5rem 0.3rem",
    fontSize: "1rem",
    padding: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "#393e46",
    color: "#ffffff"
  };
  const listStyle = {
    border: "1px solid black",
    margin: "1.5rem 0",
    borderColor: "grey",
    borderRadius: "0.5rem",
    color: "#393e46"
  };
  const appStyle = {
    maxWidth: "800px",
    margin: "auto",
    padding: "1rem"
  };
  const initialList = displayList(gaming);
  const [list, setList] = useState(initialList);

  function displayButton(text) {
    return (
      <button onClick={() => clickHandler(text)} style={btnStyle}>
        {text}
      </button>
    );
  }

  function clickHandler(text) {
    if (text === "Gaming") {
      let data = displayList(gaming);
      setList(data);
    } else if (text === "Convertible") {
      let data = displayList(convertible);
      setList(data);
    } else {
      let data = displayList(business);
      setList(data);
    }
  }

  function displayList(listArray) {
    let populatedlist = listArray.map((item, index) => {
      return (
        <div key={index} style={listStyle}>
          <h3>{item.name}</h3>
          <p>{item.rating} / 5</p>
        </div>
      );
    });
    return populatedlist;
  }
  return (
    <div className="App" style={appStyle}>
      <h1>
        Laptops
        <span role="img" aria-label="laptop">
          💻
        </span>
      </h1>
      <p>Checkout My favorite laptops in different genres and their ratings</p>
      {displayButton("Gaming")}
      {displayButton("Convertible")}
      {displayButton("Business")}
      <hr />
      {list}
    </div>
  );
}
