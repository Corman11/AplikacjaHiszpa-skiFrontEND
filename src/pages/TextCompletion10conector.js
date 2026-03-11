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






function TextCompletion10conector() {


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
  {content: `aunque`},
  {content: `En mi opinión`},
  {content: `En primer lugar`},
  {content: `Por ejemplo`},
  {content: `Además`},
  {content: `Sin embargo`},
  {content: `Aunque`},
  {content: `Por ejemplo`},
  {content: `Por eso`},
  {content: `En conclusión`}
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
        Tema: Un vale para realizar un salto de puenting o un salto en paracaídas se ha convertido últimamente en un regalo de cumpleaños popular entre los jóvenes. ¿Es un regalo así una buena idea? Escribe un ensayo sobre este tema, considerándolo desde el punto de vista de la persona que compra el regalo y de la persona que lo recibe.

  </h3>
              <p>TIPO : Texto de Opinión</p>
             <div className={styles.boxText}>

En los últimos años, regalar un cupón para realizar un salto en bungee, un salto de puenting o un salto en paracaídas se ha convertido en una idea muy popular entre los jóvenes. Muchas personas consideran que este tipo de regalo es original y emocionante,

<span
className={`${styles.labelOutline}
${selectedObject === 1 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(0) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(1)}}
>
{answers[1] || "____________"}
</span>

otros lo ven como algo arriesgado.

<span
className={`${styles.labelOutline}
${selectedObject === 2 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(1) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(2)}}
>
{answers[2] || "________________"}
</span>

puede ser un buen regalo, siempre que se tengan en cuenta tanto las expectativas de quien lo compra como los deseos de quien lo recibe.

<p/>

<span
className={`${styles.labelOutline}
${selectedObject === 3 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(2) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(3)}}
>
{answers[3] || "________________"}
</span>

se trata de un regalo diferente, que no se olvida fácilmente.

<span
className={`${styles.labelOutline}
${selectedObject === 4 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(3) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(4)}}
>
{answers[4] || "____________"}
</span>

muchos jóvenes prefieren vivir una aventura antes que recibir un objeto material.

<span
className={`${styles.labelOutline}
${selectedObject === 5 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(4) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(5)}}
>
{answers[5] || "____________"}
</span>

este tipo de actividades permite demostrar cariño de una manera creativa.

<p/>

<span
className={`${styles.labelOutline}
${selectedObject === 6 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(5) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(6)}}
>
{answers[6] || "____________"}
</span>

a algunos les encantan las emociones fuertes, no todos disfrutan de las alturas.

<span
className={`${styles.labelOutline}
${selectedObject === 7 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(6) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(7)}}
>
{answers[7] || "____________"}
</span>

un regalo de este tipo puede generar estrés o incomodidad.

<span
className={`${styles.labelOutline}
${selectedObject === 8 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(7) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(8)}}
>
{answers[8] || "____________"}
</span>

es importante conocer bien a la persona antes de elegir este tipo de regalo.

<span
className={`${styles.labelOutline}
${selectedObject === 9 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(8) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(9)}}
>
{answers[9] || "____________"}
</span>

un salto en bungee o en paracaídas puede ser un regalo fantástico.

<span
className={`${styles.labelOutline}
${selectedObject === 10 ? styles.labelOutlineActive : ""}
${taskFinished && (checkIfLabelCorrect(9) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
onClick={() => {if (taskFinished) return; setSelectedObject(10)}}
>
{answers[10] || "____________"}
</span>

puede ser un regalo fantástico para quienes aman la aventura.

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
      <button onClick={() => navigate("/TextCompletion9conector")}
          disabled={!(taskFinished && checkAnsers() === correctAnsers.length)}
          >{ExerciseInstructions.exersize1Previous}</button>

      <button onClick={() => window.location.reload(false)}>Rozpocznij zadanie od nowa</button>
      <button onClick={giveUpShowAnswers}>Poddaj Się - Sprawdź odpowiedzi</button>
        {/* finishTask() sprawia ze funckja zostaje wywołana przy renderze */}
        <button onClick={finishTask}>Zakończ zadanie</button>

        {taskFinished === true && <h1>Masz poprawnie {checkAnsers()}/{correctAnsers.length} </h1>}
        {result === false && <h1>Nie wszystko dobrze </h1>}

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




export default TextCompletion10conector;