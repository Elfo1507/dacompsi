import RecursosStyledComponent, {
  RecursoStyledComponent,
} from "./recursosStyles";

const Recursos = () => {
  return (
    <RecursosStyledComponent>
      <h1>Recursos</h1>
      <RecursoStyledComponent>
        <li>Recurso 1</li>
        <li>Recurso 2</li>
        <li>Recurso 3</li>
      </RecursoStyledComponent>
    </RecursosStyledComponent>
  );
};

export default Recursos;
