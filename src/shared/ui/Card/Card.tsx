import { memo } from "react";
import cls from "./Card.module.css";
import { Product } from "../../../pages/CatalogPage/ui/CatalogPage.tsx";
import Icon, { IconSizes } from "../Icon/Icon.tsx";
import { classNames } from "../../lib/classNames/classNames.ts";

interface CardProps {
  className?: string;
  product: Product;
  size?: IconSizes;
  onClick: (id: number) => void;
}

export const Card = memo(
  ({ className, product, onClick, size = IconSizes.SIZE_XL }: CardProps) => {
    return (
      <div
        onClick={() => onClick(product.id)}
        className={classNames(cls.Card, {}, [className])}
      >
        <Icon src={product.src} size={size}></Icon>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <span>
          {product.sizes} sizes ● {product.colors} colors
        </span>
      </div>
    );
  }
);
