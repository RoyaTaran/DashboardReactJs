import React from "react";
import useFetch from "../../hooks/useFetch";
import "./widgetlg.css";

export default function Widgetlg() {
  const { posts } = useFetch(
    "https://dashboard-35c87-default-rtdb.firebaseio.com/users.json"
  );
console.log(posts);
  return (
    <>
      <div className="widgetlgTable">
        <h3 className="title">آخرین تراکنش ها</h3>
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="widgetTh">مشتری</th>
              <th className="widgetTh">تاریخ</th>
              <th className="widgetTh">مبلغ</th>
              <th className="widgetTh">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {posts.length &&
              posts.map(
                (user) =>
                  user[1].statusactive === " فعال" && (
                    <tr key={user[0]} className="widgetlgbodytr">
                      <td className="userAndImg">
                        <div>
                          <img src={user[1].imgurl} alt="عکس مخاطب" />
                        </div>
                        <span>{user[1].name}</span>
                      </td>
                      <td className="widgettd" style={{ paddingTop: "3em " }}>
                        {user[1].datatransaction}
                      </td>
                      <td
                        className="widgetPrice widgettd"
                        style={{ paddingTop: "3em " }}
                      >
                        {user[1].pricetransaction}
                        <span>تومان</span>
                      </td>
                      <td className="widgettd " style={{ paddingTop: "2.5em " }}>
                        <div
                          className={
                            user[1].statustransaction === "پرداخت شد"
                              ? "widgetApproved"
                              : user[1].statustransaction === "پرداخت نشده"
                              ? "widgetDeclined"
                              : "widgetPending"
                          }
                        >
                          {user[1].statustransaction}
                        </div>
                      </td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </div>
    </>
    // <div>{posts.map(user=><div key={user[0]}>{user[0]}</div>)}</div>
  );
}
