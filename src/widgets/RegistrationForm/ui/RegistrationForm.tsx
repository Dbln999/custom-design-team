import { memo } from "react";
import cls from "./RegistrationForm.module.css";

import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../../shared/ui/Button/Button.tsx";

interface RegistrationFormProps {
  className?: string;
}

export const RegistrationForm = memo(({ className }: RegistrationFormProps) => {
  return (
    <section className={classNames(cls.RegistrationForm, {}, [className])}>
      <div className={cls.inputWrapper}>
        <div className={cls.inputBox}>
          <label htmlFor="email">EMAIL ADDRESS:</label>
          <Input name="email" type="text" />
        </div>
        <div className={cls.inputBox}>
          <label htmlFor="password">PASSWORD:</label>
          <Input name="password" type="password" />
        </div>
        <div className={cls.inputBox}>
          <label htmlFor="phone">PHONE NUMBER:</label>
          <Input name="phone" type="phone" />
        </div>
      </div>
      <Button size={ButtonSize.L} theme={ButtonTheme.BACKGROUND_INVERTED}>
        Join Us
      </Button>
    </section>
  );
});
