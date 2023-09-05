import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Footer from "../Footer";
import Header from "../layouts/Header";
import { CustomButton } from "../components/Button/styles";

import * as S from "./styles";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");

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
  console.log("🚀 ~ file: App.js:28 ~ App ~ list:", list);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(parseInt(e.target.value));
  };

  const handleCreateProduct = () => {
    let isValid = true;
    if (!name) {
      setNameError("Chưa nhập tên sản phẩm");
      isValid = false;
    } else {
      setNameError("");
    }
    if (!price) {
      setPriceError("Chưa nhập giá sản phẩm");
      isValid = false;
    } else {
      setPriceError("");
    }
    if (isValid) {
      setList([
        ...list,
        {
          id: uuidv4(),
          name: name,
          price: price,
        },
      ]);
      setName("");
      setPrice(0);
    }
  };

  const renderItem = list.map((item) => {
    return (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <p>${item.price}</p>
      </div>
    );
  });

  return (
    <S.AppWrapper>
      <Header />
      <S.MainWrapper>
        <S.MainContainer>
          <h3>Main</h3>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => handleChangeName(e)}
            />
            <span>{nameError}</span>
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              value={price.toString()}
              onChange={(e) => handleChangePrice(e)}
            />
            <span>{priceError}</span>
          </div>
          <CustomButton onClick={() => handleCreateProduct()}>
            Create product
          </CustomButton>
          <hr />
          {renderItem}
        </S.MainContainer>
      </S.MainWrapper>
      <Footer />
    </S.AppWrapper>
  );
}

export default App;
