import { useState } from "react";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [text, setText] = useState("");
  console.log("🚀 ~ file: App.js:9 ~ App ~ text:", text);
  const [list, setList] = useState([
    {
      id: 1,
      name: "iPhone 14",
      price: 20,
    },
    {
      id: 2,
      name: "Samsung S23",
      price: 15,
    },
    {
      id: 3,
      name: "Xiaomi Mi13",
      price: 10,
    },
  ]);

  const renderItem = list.map((item) => {
    return (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <p>${item.price}</p>
      </div>
    );
  });
  // console.log("🚀 ~ file: App.js:71 ~ App ~ renderItem:", renderItem);

  const handleShowMore = () => {
    setList([
      ...list,
      {
        id: 4,
        name: text,
        price: 30,
      },
    ]);
    // list.push({
    //   id: 4,
    //   name: "iPhone 15",
    //   price: 30,
    // });
  };

  return (
    <div className="App">
      <Header name="Tuấn" gender="male">
        <h4>ahihi</h4>
      </Header>
      <div>
        <h3>Main</h3>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        {renderItem}
        <button onClick={() => handleShowMore()}>Show more</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
