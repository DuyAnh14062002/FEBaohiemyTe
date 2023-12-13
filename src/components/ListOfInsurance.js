import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListOfInsurance.css";
import { useHistory } from "react-router-dom";
import Header from "./Header";
const ListOfInsurance = () => {
  let [arrInsurance, setArrInsurance] = useState([]);
  const history = useHistory();
  const handleDetailInsurance = () => {
    history.push("/detailInsurance");
    window.location.reload();
  };
  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get("https://localhost:44313/api/Insurance");
        setArrInsurance(res.data);
      };
      loading();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="title-list-insurance ">
        <h2>DANH SÁCH CÁC GÓI BẢO HIỂM</h2>
      </div>
      <div class="insuranceItemTemplate row">
        {arrInsurance &&
          arrInsurance.map((item, index) => {
            return (
              <div
                class="col-12 col-md-6 col-lg-4 insurance-item-container "
                onClick={handleDetailInsurance}
              >
                <div class="insurance-item mb-4">
                  <div class="card">
                    <div
                      data-id="thumbnail"
                      class="card-img-top"
                      // style={{ backgroundImage: `url("${item.image}")` }}
                    ></div>

                    <div class="card-body">
                      <h5 data-id="title" class="card-title">
                        {item.name}
                      </h5>

                      <p data-id="description" class="card-text">
                        {item.title}
                      </p>

                      <p class="card-text">
                        <div className="price">
                          <small class="price-title">Giá: </small>
                          <small class="text-price font-weight-bold">
                            {item.price} Vnd
                          </small>
                        </div>
                        <div className="period">
                          <small class="period-title">Thời hạn: </small>
                          <small class="period-text font-weight-bold">
                            {item.period}
                          </small>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListOfInsurance;
