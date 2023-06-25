import React, { useState } from "react";
import "./CreatProductForm.css";

export default function CreatProductForm() {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productStack, setProductStack] = useState("");
  const [statusactive, setStatusActive] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    let userInfo = {
      productTitle,
      productPrice,
      productUrl,
      productStack,
      statusactive,
    };

    fetch("https://dashboard-35c87-default-rtdb.firebaseio.com/product.json", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((response) => console.log(response));
    setProductTitle("");
    setProductPrice("");
    setProductUrl("");
    setProductStack("");
    setStatusActive("");
  };

  return (
    <div className="ProductForm-container">
      <form
        className="register-ProductForm"
        autoComplete="off"
        onSubmit={registerHandler}
      >
        <input
          id="productTitle"
          value={productTitle}
          onChange={(event) => setProductTitle(event.target.value)}
          className="ProductForm-field"
          type="text"
          placeholder="نام محصول"
          name="productTitle"
        />

        <input
          id="productPrice"
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
          className="ProductForm-field"
          type="text"
          placeholder="مبلغ"
          name="productPrice"
        />

        <input
          id="productUrl"
          value={productUrl}
          onChange={(event) => setProductUrl(event.target.value)}
          className="ProductForm-field"
          type="text"
          placeholder="آدرس عکس محصول"
          name="productUrl"
        />

        <select
          className=" ProductForm-field selector"
          id="productStack"
          name="productStack"
          onChange={(event) => setProductStack(event.target.value)}
        >
          <option> موجودی انبار </option>
          <option value="Yes">بله</option>
          <option value="No">خیر</option>
        </select>

        <select
          className=" ProductForm-field selector"
          id="statusactive"
          name="statusactive"
          onChange={(event) => setStatusActive(event.target.value)}
        >
          <option> وضعیت فعال </option>
          <option value="Yes">بله</option>
          <option value="No">خیر</option>
        </select>

        <button className="ProductForm-field" type="submit">
          ارسال
        </button>
      </form>
    </div>
  );
}
