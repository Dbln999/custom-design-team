import { memo } from "react";
import cls from "./LogInForm.module.css";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import {
  Button,
  ButtonSize,
  ButtonTheme,
} from "../../../shared/ui/Button/Button.tsx";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";

interface LogInFormProps {
  className?: string;
}

export const LogInForm = memo(({ className }: LogInFormProps) => {
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
      </div>
      <Button size={ButtonSize.L} theme={ButtonTheme.BACKGROUND_INVERTED}>
        Log In
      </Button>
      <p className={cls.forgotPassword}>Forgot password?</p>
    </section>
  );
});
