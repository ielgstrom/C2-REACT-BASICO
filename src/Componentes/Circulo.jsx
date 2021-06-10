import { useState } from "react";

export const Circulo = (props) => {
  const [estado, setEstado] = useState(false);
  const pintarCirculo = () => {
    setEstado(!estado);
  };
  return (
    <li
      onClick={pintarCirculo}
      style={{ backgroundColor: estado ? "orange" : "gray" }}
      className="punto"
    ></li>
  );
};
