import React, { useEffect, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
// import useFetch from "../../hooks/useFetch";
import { useParams, Navigate, Link } from "react-router-dom";
import Chart from "../../components/Charts/Chart";
import "./MainProduct.css";
import { ProductChart } from "../../datds";
import PublishIcon from "@mui/icons-material/Publish";

export default function MainProduct() {
  const params = useParams();
  const [mainProduct, setMainProduct] = useState([]);
  const [hasProduct, setHasProduct] = useState(true);

  // const { posts } = useFetch(
  //   "https://dashboard-35c87-default-rtdb.firebaseio.com/product.json"
  // );
  useEffect(() => {
    fetch("https://dashboard-35c87-default-rtdb.firebaseio.com/product.json")
      .then((res) => res.json())
      .then((data) => {
        let AllProduct = Object.entries(data).map((product, index) => {
          let newProducts = {
            ...product[1],
            id: index + 1,
            productId: product[0],
          };
          return newProducts;
        });
        let MainProduct = AllProduct.find(
          (product) => product.productId == params.productId
        );
        let hasProduct = AllProduct.some(
          (product) => product.productId == params.productId
        );
        setMainProduct(MainProduct);
        setHasProduct(hasProduct);
      });
  }, [hasProduct]);

  return (
    <>
      {!hasProduct ? (
        <Navigate to="/products" />
      ) : (
        <div className="product">
          <div className="productTopbar">
            <div className="productTitle">محصول</div>
            <div className="createProduct">
              <Link to="/productcreate">
                <button className="createBtn">ایجاد محصول</button>
              </Link>
            </div>
          </div>
          <div className="ChartInfo">
            <div className=" ProductChart">
              <Chart
                aspect="2"
                dataKey="sale"
                title="فروش ماهانه"
                data={ProductChart}
                // style={{height:'15.8em',marginBottom:"0"}}
              />
            </div>
            <div className="ProductInfo">
              <div className="InfoTitleImg">
                <img
                  className="InfoImg"
                  src={`.${mainProduct.productUrl}`}
                  alt="محصول"
                />
                <div className="InfoTitle">{mainProduct.productTitle}</div>
              </div>
              <div className="Info">
                <div className="Id">
                  <span>کد:</span>
                  <span>{mainProduct.id}</span>
                </div>
                <div className="Name">
                  <span>نام:</span>
                  <span>{mainProduct.productTitle}</span>
                </div>
                <div className="Sale">
                  <span>مبلغ:</span>
                  <span>{mainProduct.productPrice}</span>
                </div>
                <div className="Active">
                  <span>فعال:</span>
                  <span>
                    {mainProduct.statusactive == "Yes" ? "بله" : "خیر"}
                  </span>
                </div>
                <div className="Stoke">
                  <span>موجودی:</span>
                  <span>
                    {mainProduct.productStack == "Yes"
                      ? "موجود در انبار"
                      : "تمام"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ProductEdit">
            <div className="ProductEditLeft">
              <div className="Top">
                <div>نام محصول</div>
                <div>{mainProduct.productTitle}</div>
              </div>
              <hr />
              <div className="Bottom">
                <label>موجودی</label>
                <select name="stock" id="stock">
                  <option>وضعیت موجودی</option>
                  <option value="Yes">بله</option>
                  <option value="No">خیر</option>
                </select>
                <label>فعال</label>
                <select name="active" id="active">
                  <option>وضعیت </option>
                  <option value="Yes">بله</option>
                  <option value="No">خیر</option>
                </select>
              </div>
            </div>

            <div className="ProductEditRight">
              <div className="Top">
                <img
                  className="EditImg"
                  src={`.${mainProduct.productUrl}`}
                  alt="محصول"
                />
                <PublishIcon style={{ fontSize: "2em", cursor: "pointer" }} />
              </div>
              <button className="BtnEdit">ویرایش محصول</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
