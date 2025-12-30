import '../App.css';
import '../cssFiles/style.css'
import '../cssFiles/TextCompletion.css'


import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import { useEffect, useRef ,useState} from "react";

/* 
TODO
- KLiknięte obiekty label swięcą się do kliknięcia okienka z odpowiedzią
- zawartość label zamienia się na zawartość okienka

*/





const texto= `Las redes sociales forman parte esencial de la vida moderna, especialmente para
los jóvenes. Mi tesis es que las redes sociales ofrecen beneficios importantes,
pero también presentan peligros serios, por lo que es necesario analizarlas desde
ambas perspectivas antes de sacar una conclusión.
Por un lado, las redes sociales aportan varias ventajas. Permiten comunicarse
con amigos y familiares que viven lejos y facilitan la creación de nuevas
relaciones. También son una herramienta útil para informarse rápidamente y
para expresar opiniones o compartir proyectos personales. Además, muchas
empresas utilizan estas plataformas para promocionarse y encontrar clientes, lo
que crea nuevas oportunidades laborales.
Por otro lado, las redes sociales también pueden ser peligrosas. Uno de los
problemas más comunes es la adicción: muchas personas pasan demasiado
tiempo conectadas y descuidan sus estudios, su salud o sus relaciones reales.
Además, existe el riesgo de recibir información falsa, lo que puede provocar
confusión. Otro peligro importante es el ciberacoso, que afecta sobre todo a
adolescentes y puede causar graves problemas emocionales.
En conclusión, las redes sociales tienen beneficios y riesgos en partes iguales. Su
impacto depende del uso que cada persona haga de ellas. Por eso, es esencial
aprender a utilizarlas con responsabilidad.`;



function isQuestionInsideAnswer(answerRef, questionRef) {
  if (!answerRef.current || !questionRef.current) return false;

  const answer = answerRef.current.getBoundingClientRect();
  const question = questionRef.current.getBoundingClientRect();

  return (
    question.left >= answer.left &&
    question.right <= answer.right &&
    question.top >= answer.top &&
    question.bottom <= answer.bottom
  );
}

function TextCompletion() {


  const handleWordClick = (text) => {
  if (!selectedObject) return; // brak zaznaczonej luki

  setAnswers(prev => ({
    ...prev,
    [selectedObject]: text,
  }));
};






  const [result, setResult] = useState(null);


const [selectedObject, setSelectedObject] = useState(null);
const [answers, setAnswers] = useState({
  1: "",
  2: "",
});


const correctAnsers = [
  `Por un lado, las redes sociales 
  aportan varias ventajas. Permiten comunicarse con amigos y familiares que 
  viven lejos y facilitan la creación de nuevas relaciones.`,

  `Por otro lado, las redes sociales también pueden ser peligrosas. Uno de los
  problemas más comunes es la adicción: muchas personas pasan demasiado
  tiempo conectadas y descuidan sus estudios, su salud o sus relaciones reales.`,

  `En conclusión, las redes sociales tienen beneficios y riesgos en partes iguales. Su
  impacto depende del uso que cada persona haga de ellas. Por eso, es esencial
  aprender a utilizarlas con responsabilidad.`

  ];


function checkAnsers(){
   const len = correctAnsers.length;

   var score = 0;

   for(var i = 0; i < len; i++){
      if(correctAnsers[i] === answers[i+1])
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
}


  // function checkTask() {
  //   const correct =
  //     isQuestionInsideAnswer(boxGadyRef, turtleRef) &&
  //     isQuestionInsideAnswer(boxSsakiRef, dogRef) &&
  //     isQuestionInsideAnswer(boxPtakiRef, bocianRef);

  //   setResult(correct);
  // }

  return (
    <>
      <div className="layout">
        <div className='layout-left'>
              <div className='box-text'>
                  <div className='layout-text'>
                  Las redes sociales forman parte esencial de la vida moderna, especialmente para los jóvenes. Mi tesis es que
                  las redes sociales ofrecen beneficios importantes, pero también presentan peligros serios, por lo que es necesario 
                  analizarlas desde ambas perspectivas antes de sacar una conclusión. 
                  <span 
                  className={`label-outline ${selectedObject === 1 ? "active" : ""}
                  ${taskFinished && answers[1] === correctAnsers[0] ? "set" : ""}`}
                  onClick={() => setSelectedObject(1)}
                >
                  {answers[1] || "________________________________________________"}

                </span>
         También son una herramienta útil para informarse rápidamente y
        para expresar opiniones o compartir proyectos personales. Además, muchas
        empresas utilizan estas plataformas para promocionarse y encontrar clientes, lo
        que crea nuevas oportunidades laborales.
                  <span
                  className={`label-outline ${selectedObject === 2 ? "active" : ""}
                  ${taskFinished && answers[2] === correctAnsers[1] ? "set" : ""}`}
                  onClick={() => setSelectedObject(2)}
                >
                  {answers[2] || "_______________________________________________________________________"}

                </span>
        Además, existe el riesgo de recibir información falsa, lo que puede provocar
        confusión. Otro peligro importante es el ciberacoso, que afecta sobre todo a
        adolescentes y puede causar graves problemas emocionales.
        <span
                  className={`label-outline ${selectedObject === 3 ? "active" : ""}
                  ${taskFinished && answers[3] === correctAnsers[2] ? "set" : ""}`}
                  onClick={() => setSelectedObject(3)}
                >
                  {answers[3] || "__________________________________________________________________________"}

                </span>
        
              </div>
              </div>
        </div>
        
<div className='layout-rigth'>
        <div
  className="boxAnswer"
  onClick={() => handleWordClick(`Por un lado, las redes sociales 
  aportan varias ventajas. Permiten comunicarse con amigos y familiares que 
  viven lejos y facilitan la creación de nuevas relaciones.`)}
>
  Por un lado, las redes sociales 
  aportan varias ventajas. Permiten comunicarse con amigos y familiares que 
  viven lejos y facilitan la creación de nuevas relaciones.
</div>

<div
  className="boxAnswer"
  onClick={() => handleWordClick(`Por otro lado, las redes sociales también pueden ser peligrosas. Uno de los
  problemas más comunes es la adicción: muchas personas pasan demasiado
  tiempo conectadas y descuidan sus estudios, su salud o sus relaciones reales.`)}
>
  Por otro lado, las redes sociales también pueden ser peligrosas. Uno de los
  problemas más comunes es la adicción: muchas personas pasan demasiado
  tiempo conectadas y descuidan sus estudios, su salud o sus relaciones reales.
</div>

<div
  className="boxAnswer"
  onClick={() => handleWordClick(`En conclusión, las redes sociales tienen beneficios y riesgos en partes iguales. Su
  impacto depende del uso que cada persona haga de ellas. Por eso, es esencial
  aprender a utilizarlas con responsabilidad.`)}
>
  En conclusión, las redes sociales tienen beneficios y riesgos en partes iguales. Su
  impacto depende del uso que cada persona haga de ellas. Por eso, es esencial
  aprender a utilizarlas con responsabilidad.
</div>
</div>
</div>


        {/* finishTask() sprawia ze funckja zostaje wywołana przy renderze */}
        <button onClick={finishTask}>Zakończ zadanie</button>

        {taskFinished === true && <h1>Masz poprawnie {checkAnsers()}/{correctAnsers.length} 🎉</h1>}
        {result === false && <h1>Nie wszystko dobrze ❌</h1>}
      

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




export default TextCompletion;