import '../App.css';
import '../cssFiles/style.css'
import styles from '../cssFiles/TextCompletion.module.css'

import successMp3 from '../sounds/muy_bien.mp3';
import failureMp3 from '../sounds/intenta_lo_de_nuevo.mp3';
import {useNavigate } from 'react-router-dom';

import {ExerciseInstructions} from "./WebpageText.js"


import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import { useEffect, useRef ,useState, useMemo} from "react";

/* 
TODO
- KLiknięte obiekty label swięcą się do kliknięcia okienka z odpowiedzią
- zawartość label zamienia się na zawartość okienka

*/


const questionsText = {


}






function Articulo3() {


   //Sounds
    const SuccessSound = useRef(null);
    const FailureSound = useRef(null);
    
    const PlaySuccess = () => {
      SuccessSound.current.currentTime = 0;
      SuccessSound.current.play();
  
    }
  
     const PlayFailure = () => {
      FailureSound.current.currentTime = 0;
      FailureSound.current.play();
  
    }
  
    function PlayRender( { result } ){
      useEffect(() => {
        if(result===true){
          PlaySuccess();
        } else if(result === false){
          PlayFailure();
        }
      }, [result]);
      
    }


  const handleWordClick = (text) => {
     if (taskFinished) return; //Jżeli zadanie zostało ukończone
  if (!selectedObject) return; // Jeżeli żaden fragment nie został zaznaczony

  setAnswers(prev => ({
    ...prev,
    [selectedObject]: text,
  }));
};

  function checkIfLabelCorrect(id){
    console.log(correctAnsers[id].content)
    console.log(answers[id+1])
    if(correctAnsers[id].content === answers[id+1]){
      return true;
    }
    return false;
  }

  function giveUpShowAnswers(){
    const filledAnswers = {};

  correctAnsers.forEach((answer, index) => {
    filledAnswers[index + 1] = answer.content;
  });

    setAnswers(filledAnswers);
  }






  const [result, setResult] = useState(null);


const [selectedObject, setSelectedObject] = useState(null);
const [answers, setAnswers] = useState({
  1: "",
  2: "",
});


const correctAnsers = [
  {content: `Durante los últimos días, nuestro región ha vivido uno de los momentos más difíciles de su historia reciente. Una inesperada crecida del río provocó una grave inundación que arrasó viviendas, comercios y pertenencias de cientos de familias. Sin embargo, entre la desesperación y el miedo, también surgieron historias de solidaridad que demuestran que, incluso en las peores situaciones, la comunidad puede mantenerse fuerte.
`},

  {content:`Los primeros días de la lucha contra la inundación fueron caóticos. Los bomberos, junto con grupos de vecinos, trabajaron sin descanso para levantar barreras de arena y evacuar a quienes estaban aislados. Muchos voluntarios improvisaron puntos de ayuda en escuelas y centros deportivos, donde se repartían alimentos, mantas y agua potable. A pesar de los esfuerzos, los daños fueron enormes y muchas familias lo han perdido absolutamente todo. Por eso, ahora más que nunca, necesitamos unir fuerzas.

`},

  {content:`Desde nuestra redacción queremos hacer un llamamiento urgente a todos los lectores. En primer lugar, es fundamental encontrar nuevos voluntarios que puedan colaborar en la limpieza de viviendas y calles. Además, se necesitan personas que organicen recogidas de ropa, productos de higiene y comida no perecedera. También son importantísimas las donaciones económicas, por pequeñas que sean, para ayudar a las familias a empezar de nuevo.

`},

  {content:`En conclusión, la situación es grave, pero juntos podemos marcar la diferencia. Cada gesto cuenta. Si actuamos unidos, lograremos que quienes lo han perdido todo recuperen la esperanza.`
},


  ];

  const texto= `Cada vez más jóvenes eligen su carrera 
  universitaria pensando en las exigencias del mercado laboral.
<Esta tendencia genera un debate interesante, ya que presenta tanto beneficios 
   como inconvenientes. Existen tantas ventajas como desventajas en este tipo de decisiones.>

Por un lado, elegir una carrera con alta demanda laboral aumenta las posibilidades 
de conseguir empleo estable y bien remunerado. Según un informe del Ministerio de Educación, 
los graduados en ingeniería y tecnología tienen tasas de inserción superiores al 80 %. 

<Este dato demuestra que seguir las necesidades del mercado puede garantizar seguridad
 económica, algo muy valorado en la sociedad actual.>

Por otro lado, esta elección puede provocar frustración si la persona no siente interés 
por la profesión. Imaginemos a alguien que estudió informática solo por las oportunidades 
laborales, pero que siempre había soñado con ser profesor de historia. <Si hubiera seguido 
sus verdaderas pasiones, quizá habría sido más feliz, aunque con menos estabilidad. 
Que los jóvenes prioricen únicamente el mercado hace que se pierda la motivación y la creatividad.>

En resumen, esta tendencia tiene ventajas claras, como la estabilidad económica,
 pero también desventajas importantes, como la falta de satisfacción personal. 
 <Por eso, conviene que cada estudiante reflexione antes de decidir,
  para que su elección no dependa solo del mercado, sino también de sus intereses.>`;




  const answersShuffled = useMemo(() => {
      return [...correctAnsers].sort(() => Math.random() - 0.5);
    }, []);


function checkAnsers(){
   const len = correctAnsers.length;

   var score = 0;

   for(var i = 0; i < len; i++){
      if(correctAnsers[i].content === answers[i+1])
        {
          score ++; 
        }
   }

   return score;
}

const [taskFinished, setTaskFinished] = useState(false);
function finishTask(){
  setTaskFinished(true);
  console.log("Przucisk działa");

  if (checkAnsers() === correctAnsers.length) {
    PlaySuccess(); 
  } else {
    PlayFailure(); 
  }
}
const navigate = useNavigate();


  // function checkTask() {
  //   const correct =
  //     isQuestionInsideAnswer(boxGadyRef, turtleRef) &&
  //     isQuestionInsideAnswer(boxSsakiRef, dogRef) &&
  //     isQuestionInsideAnswer(boxPtakiRef, bocianRef);

  //   setResult(correct);
  // }
// TO DO
// dodac opis dla zadania nad kwadratem z tekstem
// DOdać opis zadania
  return (
    <>
      <div className = {styles.layout}>
        <div className={styles.layoutLeft}>

          <section className={styles.taskSection}>
        <p className={styles.taskLabelTop}>Zadanie: Uzupełnij luki w tekscie fragmentami znajdującymi się w prawej części strony <p/>
        - Kliknij na puste pole, które chcesz wypełnic, następnie nacisnij na fragment aby to pole wypełnić<p/>
        - Po wybraniu odpowiedzi wciśnij "Zakończ zadanie" aby sprawdzić punktację</p>
        
        <audio ref={SuccessSound} src={successMp3} />
        <audio ref={FailureSound} src={failureMp3} />
        </section>
      <PlayRender result={result} />
                          <div className={styles.textWrapper}>
              <h3 className={styles.boxTitle}>
    Tema: En los últimos días, una inundación ha azotado tu región, destruyendo todas las pertenencias de cientos de familias. Escribe un artículo para el periódico local en el que relates los primeros días de lucha contra la inundación y hagas un llamamiento a los lectores para solicitar ayuda en la búsqueda de voluntarios y en la organización de colectas de artículos de primera necesidad y dinero para los damnificados.</h3>
              <p>TIPO : Artículo</p>
              <div className={styles.boxText}>
                
                  <div className={styles.labelText}>
                 
                  <span 
                  className={`${styles.labelOutline}
    ${selectedObject === 1 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(0) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(1)}}
                >
                  {answers[1] || "________________________________________________"}

                </span>
                <p/>
                  <span
                  className={`${styles.labelOutline}
    ${selectedObject === 2 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(1) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(2)}}
                >
                  {answers[2] || "_____________________________________________________"}

                </span>
                                <p/>

         <span
                  className={`${styles.labelOutline}
    ${selectedObject === 3 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(2) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() =>{if (taskFinished) return;  setSelectedObject(3)}}
                >
                  {answers[3] || "___________________________________________________________________"}

                </span>
                <p/>
 <p/>
                 <span
                  className={`${styles.labelOutline}
    ${selectedObject === 4 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(3) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(4)}}
                >
                  {answers[4] || "___________________________________________________________________"}

                </span>
        

     

                

                
              </div>
              </div>
        </div>
        </div>
        
<div className={styles.layoutRigth}>
        {/* <div className={styles.boxAnswer}
          onClick={() => handleWordClick(`Por un lado, las redes sociales 
          aportan varias ventajas. Permiten comunicarse con amigos y familiares que 
          viven lejos y facilitan la creación de nuevas relaciones.`)}
        >
  Por un lado, las redes sociales 
  aportan varias ventajas. Permiten comunicarse con amigos y familiares que 
  viven lejos y facilitan la creación de nuevas relaciones.
</div>

<div
  className={styles.boxAnswer}
  onClick={() => handleWordClick(`Por otro lado, las redes sociales también pueden ser peligrosas. Uno de los
  problemas más comunes es la adicción: muchas personas pasan demasiado
  tiempo conectadas y descuidan sus estudios, su salud o sus relaciones reales.`)}
>
  Por otro lado, las redes sociales también pueden ser peligrosas. Uno de los
  problemas más comunes es la adicción: muchas personas pasan demasiado
  tiempo conectadas y descuidan sus estudios, su salud o sus relaciones reales.
</div>

<div
  className={styles.boxAnswer}
  onClick={() => handleWordClick(`En conclusión, las redes sociales tienen beneficios y riesgos en partes iguales. Su
  impacto depende del uso que cada persona haga de ellas. Por eso, es esencial
  aprender a utilizarlas con responsabilidad.`)}
>
  En conclusión, las redes sociales tienen beneficios y riesgos en partes iguales. Su
  impacto depende del uso que cada persona haga de ellas. Por eso, es esencial
  aprender a utilizarlas con responsabilidad.
</div> */}

{
  answersShuffled.map((question) => {

        return (
          <div className = {taskFinished ? styles.boxAnswerDisable : styles.boxAnswer}
          onClick = {() => handleWordClick(question.content)}>
            {question.content}
            </div>
        );
  
  })}


</div>
</div>

      <div className={styles.buttonsBottom}>
      <button onClick={() => navigate("/Articulo2")}
          disabled={!(taskFinished && checkAnsers() === correctAnsers.length)}
          >{ExerciseInstructions.exersize1Previous}</button>

      <button onClick={() => window.location.reload(false)}>Rozpocznij zadanie od nowa</button>
      <button onClick={giveUpShowAnswers}>Poddaj Się - Sprawdź odpowiedzi</button>
        {/* finishTask() sprawia ze funckja zostaje wywołana przy renderze */}
        <button onClick={finishTask}>Zakończ zadanie</button>

        {taskFinished === true && <h1>Masz poprawnie {checkAnsers()}/{correctAnsers.length} </h1>}
        {result === false && <h1>Nie wszystko dobrze </h1>}

         <button onClick={() => navigate("/Articulo4")}
          disabled={!(taskFinished && checkAnsers() === correctAnsers.length)}
          >{ExerciseInstructions.exersize1Next}</button>
      </div>

    </>
  );
}
//Debugowanie konsola za pomoca shift + cntr + i


// Las redes sociales forman parte esencial de la vida moderna, especialmente para los jóvenes. Mi tesis es que
//  las redes sociales ofrecen beneficios importantes, pero también presentan peligros serios, por lo que es necesario 
// analizarlas desde ambas perspectivas antes de sacar una conclusión.
// Por un lado, las redes sociales 
// aportan varias ventajas. Permiten comunicarse con amigos y familiares que 
// viven lejos y facilitan la creación de nuevas relaciones. También son una herramienta útil para informarse 
// rápidamente y para expresar opiniones o compartir proyectos personales. Además, muchas empresas utilizan estas
//  plataformas para promocionarse y encontrar clientes, lo que crea nuevas oportunidades laborales.
// Por otro lado, las redes sociales también pueden ser peligrosas. Uno de los problemas más comunes es la adicción: 
// muchas personas pasan demasiado tiempo conectadas y descuidan sus estudios, su salud o sus relaciones reales. 
// Además, existe el riesgo de recibir información falsa, lo que puede provocar confusión. Otro peligro importante 
// es el ciberacoso, que afecta sobre todo a adolescentes y puede causar graves problemas emocionales.
// En conclusión, las redes sociales tienen beneficios y riesgos en partes iguales. Su impacto depende del uso que
//  cada persona haga de ellas. Por eso, es esencial aprender a utilizarlas con responsabilidad.




export default Articulo3;