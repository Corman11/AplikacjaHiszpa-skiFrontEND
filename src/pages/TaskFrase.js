import '../App.css';
import '../cssFiles/style.css'
import '../cssFiles/TaskFrase.css'

import {questionsData} from "./QuestionsData.js"


import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import { useMemo, useEffect, useRef ,useState, createRef } from "react";

import React from 'react'


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


  const questionRefs = useRef({});
  const answerRefs = useRef({
  gady: React.createRef(),
  ssaki: React.createRef(),
  ptaki: React.createRef(),
});

  const shuffledBoxes = useMemo(() => {
    return [...questionsData].sort(() => Math.random() - 0.5);
  }, []);


  const correctMap = {
  turtle: "gady",
  
  };
  // const boxGadyRef = useRef(null);
  // const boxSsakiRef = useRef(null);
  // const boxPtakiRef = useRef(null);

  // const turtleRef = useRef(null);
  // const dogRef = useRef(null);
  // const bocianRef = useRef(null);

  const [result, setResult] = useState(null);

  // function checkTask() {
  //   const correct =
  //     isQuestionInsideAnswer(boxGadyRef, turtleRef) &&
  //     isQuestionInsideAnswer(boxSsakiRef, dogRef) &&
  //     isQuestionInsideAnswer(boxPtakiRef, bocianRef);

  //   setResult(correct);
  // }

//Wersja 2
  function checkTask() {
  const correct = Object.entries(correctMap).every(
    ([questionId, answerId]) =>
      isQuestionInsideAnswer(
        answerRefs.current[answerId],
        questionRefs.current[questionId]
      )
  );

  setResult(correct);
}


  return (
    <>
      <div className="layout">

         {/* ANSWERS */}
      <div className="container">
        <div className="boxWrapper">
          <p className="label">Organizar el texto</p>
          <div className="box" ref={answerRefs.current.gady} />
        </div>
      </div>

      {/* QUESTIONS */}
      <div className="containerAnswer">
        {shuffledBoxes.map((box) => {
          if (!questionRefs.current[box.id]) {
            questionRefs.current[box.id] = createRef();
          }

          return (
            <div className="boxWrapper" key={box.id}>
              <Draggable nodeRef={questionRefs.current[box.id]}>
                <div
                  className="boxAnswer"
                  ref={questionRefs.current[box.id]}
                >
                  {box.content}
                </div>
              </Draggable>
            </div>
          );
        })}
      </div>

        <button onClick={checkTask}>Zakończ zadanie</button>

        {result === true && <h1>Udało się ukończyć zadanie 🎉</h1>}
        {result === false && <h1>Nie wszystko dobrze ❌</h1>}
      </div>
    </>
  );
}

export default TaskFrase;