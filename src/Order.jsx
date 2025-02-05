import React, { useEffect, useState } from "react";
import { getFlower } from "./utils";
import { useParams } from "react-router-dom";

const url = "http://localhost:8000/api/flowers/";

const Order = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getFlower(url, setProduct, id);
  }, []);

  product && console.log(product[0]);

  return (
    <>
      <main className="container">
        {product && (
          <>
            <h2>
              {product[0]?.nev} ({product[0]?.kategoria_nev})
            </h2>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={product[0]?.kepUrl}
                  alt={product[0]?.leiras}
                  className="img-thumbnail"
                />
              </div>
              <div className="col-md-6">
                <p>{product[0]?.leiras}</p>
                <form>
                  <p className="text-center">
                    <span id="ar">Ár: {product[0]?.ar} Ft</span>
                    <label htmlFor="mennyiseg">Mennyiség:</label>
                    <input
                      type="number"
                      name="mennyiseg"
                      id="mennyiseg"
                      min={1}
                      max={999}
                      defaultValue={1}
                    />
                  </p>
                  <p className="text-center">
                    <button className="btn btn-warning btn-lg">Megrendelem</button>
                  </p>
                </form>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Order;
