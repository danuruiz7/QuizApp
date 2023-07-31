import { Link } from 'react-router-dom';
import '../styles/Terminado.css';

const Terminado = ({ score, resetGame }) => {
  return (
    <main className="principal">
      <h1>Fin de juego</h1>
      <h2 className="puntaje">
        Tu puntaje es: <span>{score}</span> de 4
      </h2>
      <div className="botones">
        <Link onClick={resetGame}>Volver a jugar</Link>
        <Link to="/">Ir al inicio</Link>
      </div>
    </main>
  );
};

export default Terminado;
