import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CardView = styled.View`
  margin-top: 15px;
  padding: 5px 10px;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.card.bg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  elevation: 3;
`;

const CardLeftBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const CardOnOffBox = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.card.circle.bg};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardOnOffText = styled.Text`
  color: ${(props) => props.theme.card.circle.text};
  font-size: 14px;
  line-height: 16px;
  font-family: "5";
`;

const CardInfoBox = styled.View`
  display: flex;
  justify-content: center;
`;

const CardTitleText = styled.Text`
  font-size: 20px;
  line-height: 23px;
  font-family: "5";
  color: ${(props) => props.theme.card.title};
`;

const CardAddressText = styled.Text`
  margin-top: 4px;
  margin-bottom: 6px;
  margin-left: 1px;
  color: ${(props) => props.theme.card.addr};
  font-size: 12px;
  line-height: 14px;
  font-family: "4";
`;

const CardTimeTagText = styled.Text`
  align-self: flex-start;
  color: ${(props) => props.theme.card.time.text};
  background-color: ${(props) => props.theme.card.time.bg};
  border-radius: 10px;
  font-size: 12px;
  line-height: 14px;
  font-family: "4";
  padding: 4px 8px 2px 8px;
`;

const CardRightBox = styled.View`
  min-width: 100px;
  max-width: 100px;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-right: 10px;
`;

const TimeLeftText = styled.Text`
  color: ${(props) => props.theme.card.timer};
  font-size: 12px;
  line-height: 14px;
  font-family: "5";
  margin-top: 12px;
`;

const Card = ({ title, address, time }) => (
  <CardView>
    <CardLeftBox>
      <CardOnOffBox>
        <Icon name="map" size={20} color="#FFFFFF" />
        <CardOnOffText>ON</CardOnOffText>
      </CardOnOffBox>
      <CardInfoBox>
        <CardTitleText>{title}</CardTitleText>
        <CardAddressText>{address}</CardAddressText>
        <CardTimeTagText>{time}</CardTimeTagText>
      </CardInfoBox>
    </CardLeftBox>
    <CardRightBox>
      <TimeLeftText>1시간 15분 후</TimeLeftText>
    </CardRightBox>
  </CardView>
);

export default Card;
