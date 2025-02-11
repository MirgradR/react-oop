import { ElementType, ReactNode } from "react";

// Универсальный компонент Box с поддержкой разных тегов
type BoxProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Box<T extends ElementType = "div">({
  as,
  children,
  ...props
}: BoxProps<T>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}

export default Box;
