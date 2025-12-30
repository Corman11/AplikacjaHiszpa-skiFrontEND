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

function TaskFrase() {
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
            <p className="label">Gady</p>
            <div className="box" ref={boxGadyRef}></div>
          </div>

          <div className="boxWrapper">
            <p className="label">Ssaki</p>
            <div className="box" ref={boxSsakiRef}></div>
          </div>

          <div className="boxWrapper">
            <p className="label">Ptaki</p>
            <div className="box" ref={boxPtakiRef}></div>
          </div>
        </div>

        <div className="containerAnswer">
          <div className="boxWrapper">
            <p className="label">Kwadrat 1</p>
            <Draggable nodeRef={turtleRef}>
              <div className="boxAnswer" ref={turtleRef}>
                Żółw
              </div>
            </Draggable>
          </div>

          <div className="boxWrapper">
            <p className="label">Kwadrat 2</p>
            <Draggable nodeRef={dogRef}>
              <div className="boxAnswer" ref={dogRef}>
                Pies
              </div>
            </Draggable>
          </div>

          <div className="boxWrapper">
            <p className="label">Kwadrat 3</p>
            <Draggable nodeRef={bocianRef}>
              <div className="boxAnswer" ref={bocianRef}>
                Bocian
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

export default TaskFrase;
