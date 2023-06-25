import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [userJob, setUserJob] = useState("");
  const [email, setEmail] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [datatransaction, setDataTransaction] = useState("");
  const [pricetransaction, setPriceTransaction] = useState("");
  const [statustransaction, setStatusTransaction] = useState("");
  const [statusactive, setStatusActive] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    let userInfo = {
      name,
      userJob,
      email,
      imgurl,
      datatransaction,
      pricetransaction,
      statustransaction,
      statusactive,
    };

    fetch("https://dashboard-35c87-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((response) => console.log(response));
    setName("");
    setUserJob("");
    setEmail("");
    setImgurl("");
    setDataTransaction("");
    setPriceTransaction("");
    setStatusTransaction("");
    setStatusActive("");
  };

  return (
    <div className="form-container">
      <form
        className="register-form"
        autoComplete="off"
        onSubmit={registerHandler}
      >
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-field"
          type="text"
          placeholder="نام و نام خانوادگی"
          name="name"
        />

        <input
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        <input
          id="job"
          value={userJob}
          onChange={(event) => setUserJob(event.target.value)}
          className="form-field"
          type="text"
          placeholder="شغل"
          name="userJob"
        />

        <input
          id="imgurl"
          value={imgurl}
          onChange={(event) => setImgurl(event.target.value)}
          className="form-field"
          type="text"
          placeholder="آدرس عکس"
          name="imgurl"
        />

        <input
          id="datatransaction"
          value={datatransaction}
          onChange={(event) => setDataTransaction(event.target.value)}
          className="form-field"
          type="data"
          placeholder="تاریخ تراکنش "
          name="datatransaction"
        />

        <input
          id="pricetransaction"
          value={pricetransaction}
          onChange={(event) => setPriceTransaction(event.target.value)}
          className="form-field"
          type="text"
          placeholder="مبلغ تراکنش "
          name="pricetransaction"
        />

        <select
          className=" form-field selector"
          id="statustransaction"
          name="statustransaction"
          onChange={(event) => setStatusTransaction(event.target.value)}
        >
          <option> وضعیت تراکنش </option>
          <option value="پرداخت شد">پرداخت شد</option>
          <option value="درحال پرداخت">در حال پرداخت</option>
          <option value="پرداخت نشده">پرداخت نشد</option>
        </select>

        <select
          className=" form-field selector"
          id="statusactive"
          name="statusactive"
          onChange={(event) => setStatusActive(event.target.value)}
        >
          <option> انتخاب وضعیت </option>
          <option value=" فعال">فعال</option>
          <option value=" غیر فعال">غیر فعال</option>
        </select>

        <button className="form-field" type="submit">
          ارسال
        </button>
      </form>
    </div>
  );
}
