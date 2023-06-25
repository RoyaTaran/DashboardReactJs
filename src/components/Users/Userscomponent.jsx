import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import "./Userscomponent.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal, Button, Form } from "react-bootstrap";

export default function Userscomponent() {
  const [userId, setUserId] = useState("");
  const [showdeletemodal, setShowdeletemodal] = useState(false);
  const [showeditmodal, setShowEditmodal] = useState(false);
  const [getData, setGetData] = useState(false);

  const [name, setName] = useState("");
  const [userJob, setUserJob] = useState("");
  const [email, setEmail] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [datatransaction, setDataTransaction] = useState("");
  const [pricetransaction, setPriceTransaction] = useState("");
  const [statustransaction, setStatusTransaction] = useState("");
  const [statusactive, setStatusActive] = useState("");

  const { posts } = useFetch(
    "https://dashboard-35c87-default-rtdb.firebaseio.com/users.json",
    getData
  );
  let users = [...posts];
  let newUsers = users.map((user, index) => {
    let userData = { ...user[1], id: index + 1, userID: user[0] };
    return userData;
  });

  let removeUser = async () => {
    await fetch(
      `https://dashboard-35c87-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "DELETE",
      }
    ).then((res) => console.log(res));

    setShowdeletemodal(false);
    setGetData((prev) => !prev);
  };

  let editUserHandler = async () => {
    let newUserObject = {
      name,
      userJob,
      email,
      imgurl,
      pricetransaction,
      datatransaction,
      pricetransaction,
      statustransaction,
      statusactive,
    };
    await fetch(
      `https://dashboard-35c87-default-rtdb.firebaseio.com/users/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(newUserObject),
      }
    ).then((res) => console.log(res));
    setShowEditmodal(false);
    setGetData((prev) => !prev);
  };
  useEffect(() => {
    let userInfo = users.find((user) => user[0] == userId);
    if (userInfo) {
      setName(userInfo[1].name);
      setUserJob(userInfo[1].userJob);
      setEmail(userInfo[1].email);
      setImgurl(userInfo[1].imgurl);
      setDataTransaction(userInfo[1].datatransaction);
      setPriceTransaction(userInfo[1].pricetransaction);
      setStatusTransaction(userInfo[1].statustransaction);
      setStatusActive(userInfo[1].statusactive);
    }
  }, [userId]);

  const columns = [
    { field: "id", headerName: "ردیف", width: 90 },

    {
      field: "user",
      headerName: "نام و نام خانوادگی",
      description: "This column has a value getter and is not sortable.",
      width: 200,
      renderCell: (params) => (
        <div
          className="action"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={params.row.imgurl}
            alt="عکس کاربر"
            style={{
              width: "3em",
              height: "3em",
              borderRadius: "50%",
              marginLeft: "1em",
            }}
          />
          <div>{params.row.name}</div>
        </div>
      ),
    },
    {
      field: "email",
      headerName: "ایمیل",
      width: 150,
      editable: true,
    },
    {
      field: "statusactive",
      headerName: "وضعیت",
      width: 150,
      editable: true,
    },
    {
      field: "pricetransaction",
      headerName: "(تومان)تراکنش",
      width: 110,
      editable: true,
    },
    {
      field: "action",
      headerName: "ویرایش",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      renderCell: (params) => (
        <div
          className="action"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button
            className="editUser"
            onClick={() => {
              setUserId(params.row.userID);
              setShowEditmodal(true);
            }}
            style={{
              backgroundcolor: "rgb(202, 246, 231)",
              border: "none",
              color: "rgb(4, 187, 4)",
              cursor: "pointer",
              padding: ".2em .3em",
              borderRadius: "1em",
            }}
          >
            Edit
          </button>
          <DeleteIcon
            style={{ color: "rgb(255, 50, 50)", cursor: "pointer" }}
            onClick={() => {
              setUserId(params.row.userID);
              setShowdeletemodal(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Container sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={newUsers}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Container>

      {/* ////delete modal/// */}
      <Modal
        show={showdeletemodal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          onClick={() => setShowdeletemodal(false)}
          style={{ color: "red" }}
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>آیا از حذف کاربر مطمئنید؟</p>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", alignSelf: "center" }}>
          <Button
            style={{
              color: "#fff",
              border: "none",
              borderRadius: ".5em",
              backgroundColor: "#1e1ef7",
            }}
            onClick={removeUser}
          >
            بله, حذف شود
          </Button>
          <Button
            style={{
              color: "#fff",
              border: "none",
              borderRadius: ".5em",
              backgroundColor: "#1e1ef7",
            }}
            onClick={() => setShowdeletemodal(false)}
          >
            نه, بستن مدال
          </Button>
        </Modal.Footer>
      </Modal>

      {/* /////edit modal//// */}
      <Modal
        show={showeditmodal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header onClick={() => setShowEditmodal(false)} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ویرایش کاربر
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>نام ونام خانوادگی :</Form.Label>
              <Form.Control
                type="text"
                placeholder="نام و نام خانوادگی"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ایمیل : </Form.Label>
              <Form.Control
                type="email"
                placeholder="Email "
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>شغل :</Form.Label>
              <Form.Control
                type="text"
                placeholder="شغل"
                value={userJob}
                onChange={(event) => setUserJob(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>آدرس عکس :</Form.Label>
              <Form.Control
                type="text"
                placeholder="آدرس عکس"
                value={imgurl}
                onChange={(event) => setImgurl(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>مبلغ تراکنش :</Form.Label>
              <Form.Control
                type="text"
                placeholder="مبلغ تراکنش"
                value={pricetransaction}
                onChange={(event) => setPriceTransaction(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>تاریخ تراکنش :</Form.Label>
              <Form.Control
                type="text"
                placeholder="تاریخ تراکنش"
                value={datatransaction}
                onChange={(event) => setDataTransaction(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>وضعیت تراکنش: </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setStatusTransaction(event.target.value)}
              >
                <option>انتخاب تراکنش </option>
                <option value="پرداخت شد">پرداخت شده</option>
                <option value="درحال پرداخت">درحال پرداخت</option>
                <option value="پرداخت نشده">پرداخت نشده</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>وضعیت فعالیت: </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setStatusActive(event.target.value)}
              >
                <option>انتخاب وضعیت </option>
                <option value=" فعال"> فعال</option>
                <option value=" غیر فعال">غیرفعال </option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex", alignSelf: "center" }}>
          <Button onClick={() => editUserHandler()}>ویرایش</Button>
          <Button onClick={() => setShowEditmodal(false)}>بستن مدال</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
