import { Circulo } from "./Componentes/Circulo";
function App() {
  const arrayLenght = 5;
  const arrayTotal = Array(arrayLenght);
  arrayTotal.fill("", "");
  return (
    <>
      <ul>
        {arrayTotal.map((redonda) => (
          <Circulo key={redonda} />
        ))}
      </ul>
    </>
  );
}
export default App;
