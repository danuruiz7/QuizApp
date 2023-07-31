import { useState, useEffect } from 'react';
import { taylorSwift } from '../preguntas/preguntas';
import '../styles/stylesjuego.css';
import Terminado from './Terminado';

const random = (array) => {
  const hola = array.toSorted(() => 0.5 - Math.random());
  return hola;
};

const TaylorSwift = () => {
  let seconds = 20;

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(seconds);
  const [opciones, setOpciones] = useState([]);

  const $time = document.getElementById('time');

  if (time === 10) {
    $time.style.color = 'yellow';
  }
  if (time === 5) {
    $time.style.color = 'red';
  }

  useEffect(() => {
    if (preguntaActual !== taylorSwift.length) {
      const orden = random(taylorSwift[preguntaActual].opciones);
      setOpciones(orden);
    }
  }, [preguntaActual]);

  // console.log(opciones);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const handleNext = () => {
    setTime(seconds);
    setPreguntaActual(preguntaActual + 1);
  };

  const handleAnswers = (e, isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    e.target.classList.add(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      setPreguntaActual(preguntaActual + 1);
      if (preguntaActual === taylorSwift.length - 1) {
        return setIsFinish(true);
      }
    }, 700);
    setTime(seconds);
  };

  const resetGame = () => {
    setIsFinish(false);
    setPreguntaActual(0);
    setScore(0);
    setTime(seconds);
  };

  return (
    <>
      {isFinish ? (
        <Terminado score={score} resetGame={resetGame} />
      ) : (
        <main className="main">
          <h1 className="titulo">PREGUNTA #{preguntaActual + 1}</h1>
          <div className="timer">
            {time !== 0 ? (
              <p className="time-text" id="time">
                {time}
              </p>
            ) : preguntaActual === taylorSwift.length - 1 ? (
              setIsFinish(true)
            ) : (
              <p
                className="time-text-off"
                style={{
                  color: 'red',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
              >
                Tiempo agotado
              </p>
            )}
          </div>

          <div className="container">
            <h3 className="pregunta">{taylorSwift[preguntaActual].titulo}</h3>

            <img
              className="imagen"
              src={taylorSwift[preguntaActual].image}
              alt=""
            />

            <div className="opciones">
              {opciones.map((opcion) => {
                return (
                  <button
                    disabled={time === 0}
                    className={time === 0 ? 'opcion disabled' : 'opcion'}
                    key={opcion.textoRespuesta}
                    onClick={(e) => handleAnswers(e, opcion.isCorrect)}
                  >
                    {opcion.textoRespuesta}
                  </button>
                );
              })}
            </div>
          </div>
          {time === 0 && preguntaActual !== taylorSwift.length - 1 && (
            <button className="opcion next" onClick={handleNext}>
              Siguiente Pregunta
            </button>
          )}
        </main>
      )}
    </>
  );
};

export default TaylorSwift;
