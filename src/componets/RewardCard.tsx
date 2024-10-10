import React from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import { Coin } from "@phosphor-icons/react";

interface RewardCardProps {
  coinsEarned: number;
  totalCoins: number;
  QrCodeValue: string;
  onRedeem: () => void;
}

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
  font-family: Arial, sans-serif;
`;

const CoinCount = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffd700;
  color: black;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
`;

const CoinIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ffd700;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  position: relative;

  svg {
    position: absolute;
    font-size: 40px;
    color: black;
  }
`;

const CoinsEarned = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const CoinsAmount = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const EarnedText = styled.p`
  font-size: 16px;
  color: black;
  margin: 5px 0 0;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const QRCodeContainer = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QRCodeStyled = styled(QRCode)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const RedeemButton = styled.button`
  background-color: #ffd700;
  color: black;
  border: none;
  padding: 10px 20px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e6c200;
  }
`;

const RewardCard: React.FC<RewardCardProps> = ({
  coinsEarned,
  totalCoins,
  onRedeem,
  QrCodeValue,
}) => {
  return (
    <Card>
      <CoinCount>
        <Coin size={25} />
        {totalCoins.toLocaleString()}
      </CoinCount>
      <CoinIcon>
        <Coin size={40} />
      </CoinIcon>
      <CoinsEarned>
        <CoinsAmount>{coinsEarned.toLocaleString()} Coins</CoinsAmount>
        <EarnedText>EARNED</EarnedText>
      </CoinsEarned>

      <BottomSection>
        <QRCodeContainer>
          <QRCodeStyled size={80} value={QrCodeValue} viewBox={`0 0 256 256`} />
          <RedeemButton onClick={onRedeem}>Redeem</RedeemButton>
        </QRCodeContainer>
      </BottomSection>
    </Card>
  );
};

export default RewardCard;
