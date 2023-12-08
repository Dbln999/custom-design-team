import cls from "./MainPage.module.css";
import ManWomanImage from "../../../shared/assets/onboadrding/Man and woman collaborate on web design.svg";
import DeliveryImage from "../../../shared/assets/onboadrding/Delivery app for tracking order with GPS.svg";
import OrderImage from "../../../shared/assets/onboadrding/Order delivered to the location.svg";
import OnboardingScreen from "../../../widgets/OnboardingScreen/OnboardingScreen.tsx";
import { useState } from "react";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../../shared/ui/Button/Button.tsx";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const list = [
    { src: ManWomanImage, text: "Choose and Create" },
    { src: DeliveryImage, text: "Track your order" },
    { src: OrderImage, text: "Get it delivered" },
  ];

  const [screenNumber, setScreenNumber] = useState(0);

  const changeScreenNumber = (screen: number) => {
    setScreenNumber(screen);
  };

  const navigate = useNavigate();

  const screenHandler = () => {
    if (screenNumber !== 2) {
      setScreenNumber((prev) => prev + 1);
    } else {
      navigate("/registration");
    }
  };

  return (
    <>
      <OnboardingScreen
        src={list[screenNumber].src}
        text={list[screenNumber].text}
      ></OnboardingScreen>
      <div className={cls.wrapper}>
        <div className={cls.checkboxWrapper}>
          <Input
            onChange={() => changeScreenNumber(0)}
            className={cls.checkbox}
            type="checkbox"
          ></Input>
          <Input
            onChange={() => changeScreenNumber(1)}
            className={cls.checkbox}
            type="checkbox"
          ></Input>
          <Input
            onChange={() => changeScreenNumber(2)}
            className={cls.checkbox}
            type="checkbox"
          ></Input>
        </div>
        <div>
          <Button
            size={ButtonSize.L}
            className={cls.skipButton}
            theme={ButtonTheme.OUTLINE}
            onClick={screenHandler}
          >
            SKIP
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
