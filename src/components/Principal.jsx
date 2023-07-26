import { Link } from "react-router-dom";
import "../styles/Principal.css";

const Principal = () => {
  return (
    <main>
      <section className="principal">
        <h1>QuizApp</h1>
        <h2>Selecciona tu categoria preferida</h2>
        <div className="categorias">
          <div className="categoria">
            <img
              src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="info">
              <h3>Geografia</h3>
              <p>Pon aprueba tus conocimientos sobre geografia</p>
              <Link to="/geografia">Jugar</Link>
            </div>
          </div>

          <div className="categoria">
            <img
              src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <div className="info">
              <h3>Ciencias</h3>
              <p>Pon aprueba tus conocimientos sobre ciencias</p>
              <Link to="/ciencias">Jugar</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Principal;
