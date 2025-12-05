import '../App.css';
import '../cssFiles/style.css'
import '../cssFiles/TaskFrase.css'


import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import { useRef } from "react";


function Button(){
  
}



function TaskFrase() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  return (
    <div className="container">

      <div className="boxWrapper">
        <p className="label">Kwadrat 1</p>
        <Draggable nodeRef={box1Ref}>
          <div className="box" ref={box1Ref}></div>
        </Draggable>
      </div>

      <div className="boxWrapper">
        <p className="label">Kwadrat 2</p>
        <Draggable nodeRef={box2Ref}>
          <div className="box" ref={box2Ref}></div>
        </Draggable>
      </div>

      <div className="boxWrapper">
        <p className="label">Kwadrat 3</p>
        <Draggable nodeRef={box3Ref}>
          <div className="box" ref={box3Ref}></div>
        </Draggable>
      </div>

    </div>
  );
}

export default TaskFrase;