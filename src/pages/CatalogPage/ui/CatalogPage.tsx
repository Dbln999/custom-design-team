import { useState } from "react";
import Sidebar from "../../../widgets/Sidebar/ui/Sidebar.tsx";
import { Input, InputTheme } from "../../../shared/ui/Input/Input.tsx";
import cls from "./CatalogPage.module.css";
import outfit from "../../../shared/assets/examples/outfit.svg";
import { Card } from "../../../shared/ui/Card/Card.tsx";
import { IconSizes } from "../../../shared/ui/Icon/Icon.tsx";
import { Modal } from "../../../shared/ui/Modal/Modal.tsx";
import { productExmaples } from "../../../shared/lib/consts.ts";

export interface Product {
  id: number;
  src: string;
  price: number;
  sizes: number;
  colors: number;
  title: string;
}

const CatalogPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const result = productExmaples.filter((prod) =>
    prod.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [accountWindow, setAccountWindow] = useState(false);

  const openModal = (id: number) => {
    setModal((prev) => !prev);
    setModalId(id);
  };

  const closeAccountWindow = () => {
    if (accountWindow) {
      setAccountWindow(false);
    }
  };

  return (
    <section onClick={closeAccountWindow}>
      {modal && (
        <Modal setModal={setModal} product={productExmaples[modalId]} />
      )}
      <Sidebar
        accountWindow={accountWindow}
        setAccountWindow={setAccountWindow}
      />
      <div className={cls.InputWrapper}>
        <Input
          theme={InputTheme.OUTLINE_PRIMARY}
          placeholder={"Search"}
          onChange={onSearchChange}
          className={cls.Input}
          value={searchValue}
        ></Input>
      </div>
      <div className={cls.productContainer}>
        <h1 className={cls.heading}>Featured Products</h1>
        <div className={cls.product}>
          {result.map((product) => (
            <Card onClick={openModal} key={product.id} product={product} />
          ))}
        </div>
        <h1 className={cls.heading}>Special feature</h1>
        <Card
          onClick={openModal}
          className={cls.outfit}
          size={IconSizes.SIZE_XXL}
          product={{
            src: outfit,
            colors: 12,
            sizes: 8,
            price: 54.99,
            title: "Outfit",
            id: 6,
          }}
        />
      </div>
    </section>
  );
};

export default CatalogPage;
