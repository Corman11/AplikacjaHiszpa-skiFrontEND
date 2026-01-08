import '../App.css';
import '../cssFiles/style.css'
import '../cssFiles/TaskFrase.css'


import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import { useEffect, useRef ,useState} from "react";



//Tymczasowy plik w stylu JSON do testów
 const exersizeMap = [{
    id : 0,
    question : "żółw",
    answer : "gady"
  },
  {
    id : 1,
    question : "sowa",
    answer : "ptaki"


  },
  {
    id : 2,
    question : "pies",
    answer : "ssaki"


  }
  ]

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

function TaskFrase2() {
  const boxGadyRef = useRef(null);
  const boxSsakiRef = useRef(null);
  const boxPtakiRef = useRef(null);

  const turtleRef = useRef(null);
  const dogRef = useRef(null);
  const bocianRef = useRef(null);

  const [result, setResult] = useState(null);

  function checkTask() {
    const correct =
      isQuestionInsideAnswer(boxGadyRef, turtleRef) &&
      isQuestionInsideAnswer(boxSsakiRef, dogRef) &&
      isQuestionInsideAnswer(boxPtakiRef, bocianRef);

    setResult(correct);
  }

  return (
    <>
      <div className="layout">
        <div className="container">
          <div className="boxWrapper">
            <p className="label">Ogranizar el Texto</p>
            <div className="box" ref={boxGadyRef}></div>
          </div>

          
        </div>

        <div className="containerAnswer">
          <div className="boxWrapper">
            <Draggable nodeRef={turtleRef}>
              <div className="boxAnswer" ref={turtleRef}>
                 antes que nada <br />
    en primer/segundo lugar <br />
    por un lado <br />
    por otro lado <br />
    por último <br />
    en resumen <br />
    en suma <br />
    en conclusión <br />
    para concluir
              </div>
            </Draggable>
          </div>

          <div className="boxWrapper">
            <Draggable nodeRef={dogRef}>
              <div className="boxAnswer" ref={dogRef}>
                además <br />asimismo <br />también <br />tampoco <br />igualmente<br /> al mismo tiempo <br />así como
              </div>
            </Draggable>
          </div>

          <div className="boxWrapper">
            <Draggable nodeRef={bocianRef}>
              <div className="boxAnswer" ref={bocianRef}>
                porque<br /> puesto <br />que<br /> dado <br />que<br /> ya que <br />debido <br />a que<br /> a causa <br />de pues <br />como
              </div>
            </Draggable>
          </div>
        </div>

        <button onClick={checkTask}>Zakończ zadanie</button>

        {result === true && <h1>Udało się ukończyć zadanie 🎉</h1>}
        {result === false && <h1>Nie wszystko dobrze ❌</h1>}
      </div>
    </>
  );
}

export default TaskFrase2;