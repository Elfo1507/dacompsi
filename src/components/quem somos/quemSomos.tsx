import QuemSomosStyledComponent, { MembrosStyledComponent } from "./quemSomosStyles";

const QuemSomos = () => {
    return (
        <QuemSomosStyledComponent>
            <h3>Integrantes</h3>
            <MembrosStyledComponent>
                <li>
                    <img src="" alt="fulano1" />
                    <h4>Nome1</h4>
                    <p>Titulo</p>
                </li>
                <li>
                    <img src="" alt="fulano2" />
                    <h4>Nome2</h4>
                    <p>Titulo</p>
                </li>
                <li>
                    <img src="" alt="fulano3" />
                    <h4>Nome3</h4>
                    <p>Titulo</p>
                </li>
                <li>
                    <img src="" alt="fulano4" />
                    <h4>Nome4</h4>
                    <p>Titulo</p>
                </li>
                <li>
                    <img src="" alt="fulano5" />
                    <h4>Nome5</h4>
                    <p>Titulo</p>
                </li>
            </MembrosStyledComponent>
        </QuemSomosStyledComponent>
    );
}

export default QuemSomos;