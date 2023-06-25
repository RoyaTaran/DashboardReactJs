import "./widgetsm.css";
import React from "react";
import useFetch from "../../hooks/useFetch";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Widgetsm() {
  const { posts } = useFetch(
    "https://dashboard-35c87-default-rtdb.firebaseio.com/users.json"
  );
  
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://dashboard-35c87-default-rtdb.firebaseio.com/users.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       setUsers(Object.entries(data));
  //     });
  // }, []);

  return (
    <div className="Widgetsm">
      <h3 className="title">اعضای جدید</h3>
      {posts.length &&
        posts.map(
          (user) =>
            user[1].statusactive === " فعال" && (
              <div key={user[0]} className="user">
                <img src={user[1].imgurl} alt="عکس کاربر" />
                <div className="userInfo">
                  <span className="name"> {user[1].name}</span>
                  <span className="job"> {user[1].userJob}</span>
                </div>
                <VisibilityIcon style={{ cursor: "pointer" }} />
              </div>
            )
        )}
    </div>
  );
}
