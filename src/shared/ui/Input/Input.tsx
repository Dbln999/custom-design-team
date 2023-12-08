import { ChangeEvent, InputHTMLAttributes, memo, useRef } from "react";
import cls from "./Input.module.css";
import { classNames, Mods } from "../../lib/classNames/classNames.ts";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;
export enum InputTheme {
  OUTLINE = "outline",
  OUTLINE_PRIMARY = "outline-primary",
}
interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
  theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    readonly,
    theme = InputTheme.OUTLINE,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <input
      className={classNames(cls.Input, mods, [className, cls[theme]])}
      ref={ref}
      type={type}
      value={value}
      onChange={onChangeHandler}
      readOnly={readonly}
      {...otherProps}
    ></input>
  );
});
