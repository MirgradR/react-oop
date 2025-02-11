import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

// Базовый UI-компонент
function Card({ title, children }: Props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;
