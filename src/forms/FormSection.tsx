import React, { useState } from "react";
import styled from "styled-components";
import RewardCard from "../componets/RewardCard";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormSection = styled.div`
  background: linear-gradient(135deg, #f0f8ff, #e0e0e0);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 300px;
  font-family: "Arial", sans-serif;
  transition: box-shadow 0.3s ease;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
      font-size: 1.1em;
      font-weight: bold;
    }

    input {
      margin-top: 5px;
      padding: 10px;
      font-size: 1em;
      border: 1px solid #bdc3c7;
      border-radius: 8px;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #3498db;
        outline: none;
      }
    }

    .error {
      color: #e74c3c;
      font-size: 0.9em;
      margin-top: 5px;
    }
  }
`;

const FormSectionValidation = () => {
  const [earned, setEarned] = useState<number>(0);
  const [total, setTotal] = useState<number>(100);
  const [qrData, setQrData] = useState<string>("https://example.com");
  const [redeem, setRedeem] = useState<string>("Redeem Now");
  const [errors, setErrors] = useState<{
    earned: string;
    total: string;
    qrData: string;
  }>({
    earned: "",
    total: "",
    qrData: "",
  });

  // Function to handle redeem logic
  const handleRedeem = () => {
    if (earned > 0) {
      setTotal(total + earned);
      alert(`You have redeemed ${earned} coins!`);
      setEarned(0); // Reset earned coins after redeem
    } else {
      alert("Earned coins must be greater than 0 to redeem.");
    }
  };

  const handleEarnedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setEarned(value);
    if (value < 0) {
      setErrors({ ...errors, earned: "Coins earned cannot be negative." });
    } else {
      setErrors({ ...errors, earned: "" });
    }
  };

  const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setTotal(value);
    if (value <= 0) {
      setErrors({ ...errors, total: "Total coins must be greater than zero." });
    } else {
      setErrors({ ...errors, total: "" });
    }
  };

  const handleQrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQrData(e.target.value);
    if (!e.target.value) {
      setErrors({ ...errors, qrData: "QR Code data is required." });
    } else {
      setErrors({ ...errors, qrData: "" });
    }
  };

  return (
    <Container>
      <FormSection>
        <form>
          <label>
            Coins Earned:
            <input
              type="number"
              value={earned}
              onChange={handleEarnedChange}
              min="0"
              required
            />
            {errors.earned && <span className="error">{errors.earned}</span>}
          </label>

          <label>
            Total Coins:
            <input
              type="number"
              value={total}
              onChange={handleTotalChange}
              min="0"
              required
            />
            {errors.total && <span className="error">{errors.total}</span>}
          </label>

          <label>
            QR Code Data:
            <input
              type="text"
              value={qrData}
              onChange={handleQrChange}
              required
            />
            {errors.qrData && <span className="error">{errors.qrData}</span>}
          </label>

          <label>
            Redeem Text:
            <input
              type="text"
              value={redeem}
              onChange={(e) => setRedeem(e.target.value)}
            />
          </label>
        </form>
      </FormSection>

      {/* Pass earned, total, QR code data, and redeem handler to RewardCard */}
      <RewardCard
        coinsEarned={earned}
        totalCoins={total}
        QrCodeValue={qrData}
        onRedeem={handleRedeem}
      />
    </Container>
  );
};

export default FormSectionValidation;
