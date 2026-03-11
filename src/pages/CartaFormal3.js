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






function CartaFormal3() {


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
  {content: `[Ciudad], [fecha]`},

  {content:`A la atención del Sr. Alcalde de la Ciudad
`},

  {content:`Ayuntamiento de [Nombre de la ciudad]
`},

  {content:`[Dirección]`},

    {content:`Estimado señor Presidente:
`},


      {content:`Me dirijo a usted en nombre de mi clase para solicitar su apoyo en la organización de una campaña destinada a combatir el creciente problema del desperdicio de alimentos. El objetivo de esta carta es explicar por qué consideramos necesaria esta iniciativa y presentar un proyecto que podría involucrar a jóvenes de toda nuestra localidad.
`},


        {content:`En primer lugar, creemos que la falta de conciencia sobre el desperdicio alimentario afecta negativamente tanto a las familias como al medioambiente. Según organizaciones europeas especializadas en sostenibilidad, hasta un tercio de los alimentos producidos se pierde o se tira cada año, lo que demuestra la urgencia del problema. Además, muchos jóvenes no son plenamente conscientes de las consecuencias económicas y ecológicas de este fenómeno. Sería deseable que se promoviera una educación más responsable en este ámbito.
`},

 {content:`Para ello, querríamos proponer una campaña local dirigida a estudiantes de diferentes centros educativos. El proyecto incluiría talleres informativos, charlas impartidas por expertos en nutrición y medioambiente y, finalmente, una recogida solidaria de alimentos en colaboración con bancos de alimentos. Si fuera posible, nos gustaría que el Ayuntamiento ofreciera apoyo logístico, como el uso de una sala municipal y la difusión del evento en las redes oficiales de la ciudad.
`},

 {content:`Agradezco de antemano su atención y quedo a su disposición para cualquier aclaración adicional que considere necesaria.
`},

{content:`Atentamente,
`},

{content:`[Firma]\n[Nombre y apellidos]\n[Datos de contacto]`}

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
    Tema: Últimamente se habla mucho sobre el desperdicio de alimentos. Tu clase querría organizar una campaña para contrarrestar este fenómeno y animar a participar en ella a los jóvenes de toda tu localidad. Escribe una carta al Alcalde (Presidente de la Ciudad) en la que justifiques la necesidad de organizar tal acción y presentes el proyecto de la misma. </h3>
              <p>TIPO : Carta Formal</p>
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
        

        <p/>
 <p/>
                 <span
                  className={`${styles.labelOutline}
    ${selectedObject === 5 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(4) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(5)}}
                >
                  {answers[5] || "___________________________________________________________________"}

                </span>


                <p/>
 <p/>
                 <span
                  className={`${styles.labelOutline}
    ${selectedObject === 6 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(5) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(6)}}
                >
                  {answers[6] || "___________________________________________________________________"}

                </span>

                <p/>
 <p/>
                 <span
                  className={`${styles.labelOutline}
    ${selectedObject === 7 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(6) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(7)}}
                >
                  {answers[7] || "___________________________________________________________________"}

                </span>
 <p/>

                <span
                  className={`${styles.labelOutline}
    ${selectedObject === 8 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(7) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(8)}}
                >
                  {answers[8] || "___________________________________________________________________"}

                </span>
 <p/>

                <span
                  className={`${styles.labelOutline}
    ${selectedObject === 9 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(8) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(9)}}
                >
                  {answers[9] || "__________________________________________"}

                </span>

                <p/>
                
                
                 <p/>
                 

                <span
                  className={`${styles.labelOutline}
    ${selectedObject === 10 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(9) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(10)}}
                >
                  {answers[10] || "_________________________"}

                </span>

                <p/>
                 

                <span
                  className={`${styles.labelOutline}
    ${selectedObject === 11 ? styles.labelOutlineActive : ""}
    ${taskFinished && (checkIfLabelCorrect(10) ? styles.labelOutlineSet : styles.labelOutlineWrong)}`}
                  onClick={() => {if (taskFinished) return;  setSelectedObject(11)}}
                >
                  {answers[11] || "_________________________"}

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
          <div className = {taskFinished ? styles.boxAnswerDisableNoSetSizeCartaFormal : styles.boxAnswerNoSetSizeCartaFormal}
          onClick = {() => handleWordClick(question.content)}>
            {question.content}
            </div>
        );
  
  })}


</div>
</div>

      <div className={styles.buttonsBottom}>
      <button onClick={() => navigate("/CartaFormal2")}
          disabled={!(taskFinished && checkAnsers() === correctAnsers.length)}
          >{ExerciseInstructions.exersize1Previous}</button>

      <button onClick={() => window.location.reload(false)}>Rozpocznij zadanie od nowa</button>
      <button onClick={giveUpShowAnswers}>Poddaj Się - Sprawdź odpowiedzi</button>
        {/* finishTask() sprawia ze funckja zostaje wywołana przy renderze */}
        <button onClick={finishTask}>Zakończ zadanie</button>

        {taskFinished === true && <h1>Masz poprawnie {checkAnsers()}/{correctAnsers.length} </h1>}
        {result === false && <h1>Nie wszystko dobrze </h1>}

         <button onClick={() => navigate("/CartaFormal4")}
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




export default CartaFormal3;