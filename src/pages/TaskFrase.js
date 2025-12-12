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
    <>
    <div className='layout'>
    <div className="container">

      <div className="boxWrapper">
        <p className="label">Gady</p>
         <div className="box"></div>
      </div>

      <div className="boxWrapper">
        <p className="label">Ssaki</p>
        
          <div className="box"></div>
        
      </div>

      <div className="boxWrapper">
        <p className="label">Ptaki</p>
         <div className="box"></div>
      </div>
    </div>
  

    <div class = "containerAnswer">

       <div className="boxWrapper">
        <p className="label">Kwadrat 1</p>
        <Draggable nodeRef={box1Ref}>
          <div className="boxAnswer" ref={box1Ref}>Żółw</div>
        </Draggable>
      </div>

      <div className="boxWrapper">
        <p className="label">Kwadrat 2</p>
        <Draggable nodeRef={box2Ref}>
          <div className="boxAnswer" ref={box2Ref}>Pies</div>
        </Draggable>
      </div>

      <div className="boxWrapper">
        <p className="label">Kwadrat 3</p>
        <Draggable nodeRef={box3Ref}>
          <div className="boxAnswer" ref={box3Ref}> Bocian</div>
        </Draggable>
      </div>

    </div>


    </div>
    </>
  );
}

export default TaskFrase;