import { RegistrationForm } from "../../../widgets/RegistrationForm/ui/RegistrationForm.tsx";
import cls from "./RegistrationPage.module.css";
import { useState } from "react";
import { LogInForm } from "../../../widgets/LogInForm/ui/LogInForm.tsx";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
const RegistrationPage = () => {
  const [registration, setRegistration] = useState(true);

  const serRegistrationForm = () => {
    setRegistration(true);
  };

  const setLoginForm = () => {
    setRegistration(false);
  };

  return (
    <div className={cls.RegistrationPage}>
      <h1>Printime</h1>
      <div className={cls.categoryWrapper}>
        <p
          onClick={serRegistrationForm}
          className={classNames(cls.paragraph, { bold: registration }, [])}
        >
          Sign Up
        </p>
        <div className={cls.divider}></div>
        <p
          onClick={setLoginForm}
          className={classNames(cls.paragraph, { bold: !registration }, [])}
        >
          Log In
        </p>
      </div>
      {registration ? <RegistrationForm /> : <LogInForm />}
    </div>
  );
};

export default RegistrationPage;
