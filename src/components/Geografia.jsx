import { useEffect, useState } from "react";
import { geografia } from "../preguntas/preguntas";
import "../styles/stylesjuego.css";
import Terminado from "./Terminado";

const Geografia = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(5);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime((prevTime) => prevTime - 1);
  //   }, 1000);

  //   if (time === 0) {
  //     clearInterval(timer);
  //   }

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [time]);

  const handleNext = () => {
    setTime(5);
    setPreguntaActual(preguntaActual + 1);
  };

  const handleAnswers = (e, isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      setPreguntaActual(preguntaActual + 1);
      if (preguntaActual === geografia.length - 1) {
        return setIsFinish(true);
      }
    }, 700);
  };

  return (
    <>
      {isFinish ? (
        <Terminado score={score} />
      ) : (
        <main className="main">
          <h1 className="titulo">PREGUNTA #{preguntaActual + 1}</h1>

          <div className="container">
            <h3 className="pregunta">{geografia[preguntaActual].titulo}</h3>

            <img
              className="imagen"
              src={geografia[preguntaActual].image}
              alt=""
            />

            <div className="opciones">
              {geografia[preguntaActual].opciones.map((opcion) => (
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
          ) : preguntaActual === geografia.length - 1 ? (
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

export default Geografia;
