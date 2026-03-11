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






function TextCompletion6conector() {


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
  {content: `En mi opinión`},
  {content: `aunque`},
  {content: `En primer lugar`},
  {content: `Por ejemplo`},
  {content: `Además`},
  {content: `Por lo tanto`},
  {content: `Sin embargo`},
  {content: `Aunque`},
  {content: `Además`},
  {content: `porque`},
  {content: `En conclusión`},
  {content: `pero`},
  {content: `Por eso`}
];



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
Tema: Muchos estudiantes que terminan la escuela secundaria se preguntan: ¿vale la pena ir a la universidad? Escribe un ensayo en el que expreses tu opinión sobre este tema, refiriéndote a aspectos tales como:
<p/>
<li>el desarrollo de los propios intereses</li>

<li>las finanzas</li>  </h3>
               <p>TIPO : Texto de Opinión</p>
              <div className={styles.boxText}>

Muchos alumnos que terminan la escuela secundaria se preguntan si merece la pena estudiar una carrera universitaria. 
Es una decisión importante que puede influir en su futuro profesional y personal.

<span
className={`${styles.labelOutline}
${selectedObject === 1 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(0) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(1)}}
>
{answers[1] || "____________________________"}
</span>

, continuar la educación en la universidad es una opción valiosa,

<span
className={`${styles.labelOutline}
${selectedObject === 2 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(1) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(2)}}
>
{answers[2] || "____________"}
</span>

no siempre es la elección adecuada para todos.

<p/>

<span
className={`${styles.labelOutline}
${selectedObject === 3 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(2) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(3)}}
>
{answers[3] || "__________________"}
</span>

, ir a la universidad permite desarrollar los propios intereses de una manera más profunda.

<span
className={`${styles.labelOutline}
${selectedObject === 4 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(3) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(4)}}
>
{answers[4] || "____________"}
</span>

, un estudiante apasionado por la biología puede asistir a laboratorios, participar en proyectos de investigación o asistir a conferencias especializadas.

<span
className={`${styles.labelOutline}
${selectedObject === 5 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(4) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(5)}}
>
{answers[5] || "____________"}
</span>

, gracias al contacto con profesores y compañeros con inquietudes similares, es posible descubrir nuevos campos y ampliar la curiosidad intelectual.

<span
className={`${styles.labelOutline}
${selectedObject === 6 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(5) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(6)}}
>
{answers[6] || "________________"}
</span>

, la universidad no solo ofrece conocimientos, sino también un espacio para crecer y aprender a pensar de forma crítica.

<p/>

<span
className={`${styles.labelOutline}
${selectedObject === 7 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(6) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(7)}}
>
{answers[7] || "________________"}
</span>

, también es necesario considerar el aspecto económico.

<span
className={`${styles.labelOutline}
${selectedObject === 8 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(7) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(8)}}
>
{answers[8] || "____________"}
</span>

en muchos países europeos los estudios son relativamente accesibles, siguen existiendo gastos importantes, como el alojamiento o los materiales.

<span
className={`${styles.labelOutline}
${selectedObject === 9 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(8) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(9)}}
>
{answers[9] || "____________"}
</span>

, algunos jóvenes prefieren empezar a trabajar pronto para ganar independencia económica.

Un ejemplo frecuente es el de quienes eligen una formación profesional

<span
className={`${styles.labelOutline}
${selectedObject === 10 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(9) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(10)}}
>
{answers[10] || "____________"}
</span>

les permite entrar antes al mercado laboral y obtener ingresos.

<p/>

<span
className={`${styles.labelOutline}
${selectedObject === 11 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(10) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(11)}}
>
{answers[11] || "________________"}
</span>

, estudiar en la universidad puede abrir muchas puertas y favorecer el desarrollo personal,

<span
className={`${styles.labelOutline}
${selectedObject === 12 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(11) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(12)}}
>
{answers[12] || "____________"}
</span>

no siempre es la opción ideal para todos.

<span
className={`${styles.labelOutline}
${selectedObject === 13 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(12) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(13)}}
>
{answers[13] || "____________"}
</span>

, cada alumno debe valorar sus intereses, su situación económica y sus objetivos antes de tomar una decisión tan importante.

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
          <div className = {taskFinished ? styles.boxAnswerDisableNoSetSize : styles.boxAnswerNoSetSize}
          onClick = {() => handleWordClick(question.content)}>
            {question.content}
            </div>
        );
  
  })}


</div>
</div>

      <div className={styles.buttonsBottom}>
      

      <button onClick={() => window.location.reload(false)}>Rozpocznij zadanie od nowa</button>
      <button onClick={giveUpShowAnswers}>Poddaj Się - Sprawdź odpowiedzi</button>
        {/* finishTask() sprawia ze funckja zostaje wywołana przy renderze */}
        <button onClick={finishTask}>Zakończ zadanie</button>

        {taskFinished === true && <h1>Masz poprawnie {checkAnsers()}/{correctAnsers.length} </h1>}
        {result === false && <h1>Nie wszystko dobrze </h1>}

<button onClick={() => navigate("/TextCompletion7conector")}
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




export default TextCompletion6conector;