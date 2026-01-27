import '../App.css';
import '../cssFiles/style.css'
//Lepiej tu importować bo przynajmniej kompilator powie czy widzi plik
import styles from '../cssFiles/TaskFrase.module.css'
import successMp3 from '../sounds/muy_bien.mp3';
import failureMp3 from '../sounds/intenta_lo_de_nuevo.mp3';
import {useNavigate } from 'react-router-dom';

import {questionsData} from "./QuestionsData.js"


import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import { useMemo, useEffect, useRef ,useState, createRef } from "react";

import React from 'react'


// TODO
// sprawdzac czy w polu znajduje się więcej niż 1 kwadrat


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
  indicar_consecuencia: "gady",
  
  };

  
  
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




  // const boxGadyRef = useRef(null);
  // const boxSsakiRef = useRef(null);
  // const boxPtakiRef = useRef(null);

  // const turtleRef = useRef(null);
  // const dogRef = useRef(null);
  // const bocianRef = useRef(null);

  const [result, setResult] = useState(null);

  const [correctanswer, setCorrectAnswer] = useState(null);

  // function checkTask() {
  //   const correct =
  //     isQuestionInsideAnswer(boxGadyRef, turtleRef) &&
  //     isQuestionInsideAnswer(boxSsakiRef, dogRef) &&
  //     isQuestionInsideAnswer(boxPtakiRef, bocianRef);

  //   setResult(correct);
  // }

//Wersja 2


function checkIfMultipleInAnswer() {
  const counts = {
    indicar_consecuencia: 0,
  };

  questionsData.forEach((question) => {
    Object.entries(answerRefs.current).forEach(([answerId, answerRef]) => {
      if (
        isQuestionInsideAnswer(
          answerRef,
          questionRefs.current[question.id]
        )
      ) {
        counts[answerId]++;
      }
    });
  });

  return counts;
}


  function checkTask() {
  
    const counts = checkIfMultipleInAnswer();

  const hasMultiple = Object.values(counts).some(
    (count) => count > 1
  );

  if (hasMultiple) {
    setResult(false);
    return;
  }

  const correct = Object.entries(correctMap).every(
    ([questionId, answerId]) =>
      isQuestionInsideAnswer(
        answerRefs.current[answerId],
        questionRefs.current[questionId]
      )
  );

  setResult(correct);
}


  function revealCorrectAnswer(){
      setCorrectAnswer(true);
  }



const navigate = useNavigate();


  return (
    <>
      <div className={styles.layout}>

      <section className={styles.taskSection}>
        <p className={styles.taskLabelTop}>Zadanie: Wybierz najlepiej pasujące łączniki tekstu i umieść je w polu <p/>
        - Nie umieszczaj w polu więcej niż jednego kwadratu!<p/>
        - Po wybraniu odpowiedzi wciśnij "Zakończ zadanie"


        </p>
        
        <audio ref={SuccessSound} src={successMp3} />
        <audio ref={FailureSound} src={failureMp3} />

      <PlayRender result={result} />
        <div className={styles.resultSlot}> 
        {result === true && <h1>Muy bien!</h1>}
        {result === false && <h1>Intenta de nuevo</h1>}
        </div>

         {/* ANSWERS */}
      <div className={styles.container}>
        <div className={styles.boxWrapper}>
          <p className={styles.label}>Indicar concequencia</p>
          <div className={styles.box} ref={answerRefs.current.gady} />
        </div>
      </div>
</section>
      {/* QUESTIONS */}
      <div className={styles.ansersLayout}>
      <div className={styles.containerAnswerTop}>



        {shuffledBoxes.slice(0,5).map((box) => {
          if (!questionRefs.current[box.id]) {
            questionRefs.current[box.id] = createRef();
          }

          return (
            <div className={styles.boxAnwserWrapper} key={box.id}>
              <Draggable nodeRef={questionRefs.current[box.id]}>
                <div
                  className={`${correctanswer === true && box.id === 'indicar_consecuencia' ? styles.boxAnswerCorrect : styles.boxAnswer}`}
                  ref={questionRefs.current[box.id]}
                >
                  {box.content}
                </div>
              </Draggable>
            </div>
          );
        })}


        
      </div>


       {/* .slice pozwala na określenie zakresu iteracji w JSX */}


          {/* {Bottom} */}
       <div className={styles.containerAnswerBottom}>
        {shuffledBoxes.slice(5).map((box) => {
          if (!questionRefs.current[box.id]) {
            questionRefs.current[box.id] = createRef();
          }

          return (
            <div className={styles.boxAnwserWrapper} key={box.id}>
              <Draggable nodeRef={questionRefs.current[box.id]}>
                <div
                  className={  `${correctanswer === true && box.id === 'indicar_consecuencia'? styles.boxAnswerCorrect : styles.boxAnswer}` }
                  ref={questionRefs.current[box.id]}
                >
                  {box.content}
                </div>
              </Draggable>
            </div>
          );
        })}
      </div>
        </div>

       {/* QUESTIONS  END*/}

          <div className={styles.buttonsBottom}>

            <button onClick={() => navigate("/TaskFrase7")}
          disabled={!result}
          >Poprzednie zadanie</button>


        <button onClick={checkTask}>Zakończ zadanie</button>
        <button onClick={revealCorrectAnswer}>Sprawdź poprawną odpowiedz</button>

          

          <button onClick={() => navigate("/TaskFrase9")}
          disabled={!result}
          >Zadanie 2 - Ańadir Ideas</button>

        </div>


        
        
      </div>
    </>
  );
}

export default TaskFrase2;