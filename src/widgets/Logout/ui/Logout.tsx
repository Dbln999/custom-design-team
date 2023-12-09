import { memo } from "react";
import cls from "./Logout.module.css";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { useNavigate } from "react-router-dom";

interface LogoutProps {
  className?: string;
}

export const Logout = memo(({ className }: LogoutProps) => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/registration");
  };

  return (
    <section className={classNames(cls.Logout, {}, [className])}>
      <div>
        <p className={cls.account}>Account</p>
        <p className={cls.account}>Settings</p>
      </div>
      <span onClick={onLogout} className={cls.logout}>
        Log Out
      </span>
    </section>
  );
});
