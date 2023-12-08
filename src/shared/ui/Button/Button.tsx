import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import cls from "./Button.module.css";
import { classNames, Mods } from "../../lib/classNames/classNames.ts";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
