import React, { memo } from "react";
import cls from "./Sidebar.module.css";
import Icon, { IconSizes } from "../../../shared/ui/Icon/Icon.tsx";
import userIcon from "../../../shared/assets/icons/userIcon.svg";
import { Logout } from "../../Logout/ui/Logout.tsx";

interface SibebarProps {
  accountWindow: boolean;
  setAccountWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = memo(({ accountWindow, setAccountWindow }: SibebarProps) => {
  const onAccountHandle = () => setAccountWindow(true);

  return (
    <section className={cls.Sidebar}>
      {accountWindow && <Logout />}
      <h2>Catalog</h2>
      <Icon
        className={cls.icon}
        onClick={onAccountHandle}
        key={userIcon}
        src={userIcon}
        size={IconSizes.SIZE_M}
      />
    </section>
  );
});

export default Sidebar;
