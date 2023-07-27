import { useEffect, useState } from "react";
import { ciencias } from "../preguntas/preguntas";
import "../styles/stylesjuego.css";
import Terminado from "./Terminado";

const Ciencias = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);

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
    setTime(20);
    setPreguntaActual(preguntaActual + 1);
  };

  const handleAnswers = (e, isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      setPreguntaActual(preguntaActual + 1);
      if (preguntaActual === ciencias.length - 1) {
        return setIsFinish(true);
      }
    }, 700);
    setTime(20);
  };

  const resetGame = () => {
    setIsFinish(false);
    setPreguntaActual(0);
    setScore(0);
    setTime(0);
  };

  return (
    <>
      {isFinish ? (
        <Terminado score={score} resetGame={resetGame} />
      ) : (
        <main className="principal">
          <h1 className="titulo">PREGUNTA #{preguntaActual + 1}</h1>

          <div className="container">
            <h3 className="pregunta">{ciencias[preguntaActual].titulo}</h3>

            <img
              className="imagen"
              src={ciencias[preguntaActual].image}
              alt=""
            />

            <div className="opciones">
              {ciencias[preguntaActual].opciones.map((opcion) => (
                <button
                  disabled={time === 0}
                  className={time === 0 ? "opcion disabled" : "opcion"}
                  key={opcion.textoRespuesta}
                  onClick={(e) => handleAnswers(e, opcion.isCorrect)}
                >
                  {opcion.textoRespuesta}
                </button>
              ))}
            </div>
          </div>
          {time !== 0 ? (
            <p className="time-text">
              Tiempo restante:{" "}
              <span className={time < 10 ? "time-red" : ""}>{time}</span>{" "}
            </p>
          ) : preguntaActual === ciencias.length - 1 ? (
            setIsFinish(true)
          ) : (
            <>
              <p
                className="time-text"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Tiempo agotado
              </p>
              <button className="opcion next" onClick={handleNext}>
                Siguiente Pregunta
              </button>
            </>
          )}
        </main>
      )}
    </>
  );
};

export default Ciencias;
