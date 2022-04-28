import React from "react";

import styled from "styled-components";
const MainDiv = styled.div`
  color: #7e7e7e;
  width: 45%;
  box-sizing: border-box;
  label {
    font-size: 10px;
  }
  i {
    color: #f6425b;
    font-size: 12px;
  }
`;

const Inputpart = styled.div`
  border-bottom: 2px solid #f6425b;
  display: flex;
  gap: 5px;
  padding: 5px 0;
  margin-top: 5px;
  input {
    border: none;
  }
  input:focus {
    border: none;
    outline: none;
  }
`;

const Paypart = styled.div`
  text-align: center;
  button {
    background-color: #f6425b;
    border: none;
    padding: 10px 30px;
    color: #fff;
    border-radius: 10px;
  }
  span {
    font-size: 18px;
    color: #f6425b;
    font-weight: 700;
  }
`;
const Frompart = styled.div`
  margin-top: 40px;
  > div {
    margin: 15px 0;
  }
  > div:nth-child(3) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  > div:nth-child(3) > div {
    width: 25%;
  }
`;

const Form = ({ handleName, handleNumber, handleMonth, handleYear,handleCvc }) => {
  return (
    <MainDiv>
      <p>Payment Details</p>
      <Frompart>
        <div>
          <label>CARDHOLDER NAME</label> <br />
          <Inputpart>
            <i class="fa-solid fa-user"></i>
            <input
              type="text"
              placeholder="Card holder name"
              onChange={handleName}
            />
          </Inputpart>
        </div>

        <div>
          <label>CARD NUMBER</label> <br />
          <Inputpart>
            <i class="fa-solid fa-credit-card"></i>
            <input
              type="tel"
              placeholder="Card number"
              onChange={handleNumber}
            />
          </Inputpart>
        </div>

        <div>
          <div>
            <label>EXPIRY MONTH</label> <br />
            <Inputpart>
              <i class="fa-regular fa-calendar"></i>
              <input type="text" onChange={handleMonth} placeholder="month"/>
            </Inputpart>
          </div>

          <div>
            <label>EXPIRY YEAR</label> <br />
            <Inputpart>
              <i class="fa-regular fa-calendar"></i>
              <input type="text" onChange={handleYear} placeholder="year"/>
            </Inputpart>
          </div>

          <div>
            <label>CVC</label> <br />
            <Inputpart>
              <i class="fa-solid fa-lock"></i>
              <input type="text" onChange={handleCvc} placeholder="cvc"/>
            </Inputpart>
          </div>
        </div>
        <Paypart>
          <p>
            Payment amount: <span>12 300 ₽</span>
          </p>
          <button type="submit">PAY</button>
        </Paypart>
      </Frompart>
    </MainDiv>
  );
};

export default Form;