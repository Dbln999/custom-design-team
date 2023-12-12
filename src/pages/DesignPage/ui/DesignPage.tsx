import React, { memo, useState } from "react";
import cls from "./DesignPage.module.css";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import Icon, { IconSizes } from "../../../shared/ui/Icon/Icon.tsx";
import tshirt from "../../../shared/assets/examples/t-shirt.svg";
import scope from "../../../shared/assets/examples/scope.svg";
import forward from "../../../shared/assets/examples/forward.svg";
import back from "../../../shared/assets/examples/back.svg";
import AI from "../../../shared/assets/examples/AI tool.svg";
import image from "../../../shared/assets/examples/Image Tool.svg";
import rob from "../../../shared/assets/examples/Vector.svg";
import template from "../../../shared/assets/examples/Templates Tool.svg";
import text from "../../../shared/assets/examples/Text tool.svg";
import { useNavigate } from "react-router-dom";

interface DesignPageProps {
  className?: string;
}

const DesignPage = memo(({ className }: DesignPageProps) => {
  const navigate = useNavigate();

  const [print, setPrint] = useState(scope);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrint(URL.createObjectURL(e.target.files![0]));
    console.log(print);
  };

  return (
    <div className={classNames(cls.DesignPage, {}, [className])}>
      <div className={cls.movement}>
        <Icon
          size={IconSizes.SIZE_M}
          className={cls.arrow}
          src={back}
          onClick={() => navigate("/catalog")}
        ></Icon>
        <Icon
          size={IconSizes.SIZE_M}
          className={cls.arrow}
          src={forward}
        ></Icon>
      </div>
      <div className={cls.design}>
        <Icon className={cls.tshirt} src={tshirt}></Icon>
        <Icon className={cls.scope} src={print}></Icon>
      </div>
      <div className={cls.designTools}>
        <div>
          <input
            accept="image/png, image/jpeg, image/jpg"
            type={"file"}
            onChange={handleImage}
            className={cls.file}
          />
          <Icon className={cls.tool} src={image}></Icon>
        </div>
        <Icon className={cls.tool} src={AI}></Icon>
        <Icon className={cls.tool} src={template}></Icon>
        <Icon className={cls.tool} src={text}></Icon>
        <Icon className={cls.tool} src={rob}></Icon>
      </div>
    </div>
  );
});

export default DesignPage;
