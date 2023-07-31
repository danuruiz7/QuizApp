import { Link } from 'react-router-dom';
import '../styles/Principal.css';

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

          <div className="categoria">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elperiodico.com%2Fes%2Focio-y-cultura%2F20230620%2Ftaylor-swift-concierto-madrid-2024-88915660&psig=AOvVaw3SNC9h6XpbdSMn6uba9dM6&ust=1690909786655000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCTrvy3uYADFQAAAAAdAAAAABAD"
              alt="TL"
            />
            <div className="info">
              <h3>Taylor Swift</h3>
              <p>Pon aprueba tus conocimientos sobre Taylor Swift</p>
              <Link to="/taylor-swift">Jugar</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Principal;
