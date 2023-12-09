import cls from "./Icon.module.css";
import { classNames } from "../../lib/classNames/classNames.ts";
interface IconProps {
  src: string;
  className?: string;
  onClick?: () => void;
  size?: IconSizes;
}

export enum IconSizes {
  SIZE_M = "size-m",
  SIZE_L = "size-l",
  SIZE_XL = "size-xl",
  SIZE_XXL = "size-xxl",
}

const Icon = ({
  src,
  onClick,
  size = IconSizes.SIZE_L,
  className = "",
}: IconProps) => {
  return (
    <img
      onClick={onClick}
      src={src}
      className={classNames(cls.Icon, {}, [cls[size], className])}
    ></img>
  );
};

export default Icon;
