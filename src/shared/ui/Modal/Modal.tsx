import React, { memo, useState } from "react";
import cls from "./Modal.module.css";
import { classNames } from "../../lib/classNames/classNames.ts";
import Icon, { IconSizes } from "../Icon/Icon.tsx";
import { Product } from "../../../pages/CatalogPage/ui/CatalogPage.tsx";
import { colors, sizes } from "../../lib/consts.ts";
import tick from "../../assets/icons/tick.svg";

interface ModalProps {
  className?: string;
  product: Product;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = memo(({ className, product, setModal }: ModalProps) => {
  const [sizeIdx, setSizeIdx] = useState<number>(0);
  const [colorIdx, setColorIdx] = useState<number>(0);

  return (
    <>
      <div onClick={() => setModal(false)} className={cls.black}></div>
      <div className={classNames(cls.Modal, {}, [className])}>
        <div className={cls.wrapper}>
          <Icon size={IconSizes.SIZE_XL} src={product.src}></Icon>
          <div className={cls.priceWrapper}>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
          </div>
          <div className={cls.sizeGuide}>
            <h2>Sizes ({product.sizes})</h2>
            <span>Size Guide</span>
          </div>
          <div className={cls.sizes}>
            {sizes.map((size, index) => (
              <p
                key={size}
                className={cls.size}
                style={sizeIdx === index ? { fontWeight: "bold" } : {}}
                onClick={() => setSizeIdx(index)}
              >
                {size}
              </p>
            ))}
          </div>
          <div className={cls.colors}>
            <h2>Colors ({product.colors})</h2>
          </div>
          <div className={cls.circleWrapper}>
            {colors.map((color, index) => (
              <div>
                {colorIdx === index && (
                  <Icon className={cls.tick} src={tick}></Icon>
                )}
                <div
                  key={color}
                  className={cls.circle}
                  style={{ background: color }}
                  onClick={() => setColorIdx(index)}
                ></div>
              </div>
            ))}
          </div>
          <button className={cls.inventBtn}>Invent</button>
        </div>
      </div>
    </>
  );
});
