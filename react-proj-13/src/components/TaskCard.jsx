import {  useState } from "react"
import useGetPosition from "../hooks/useGetPosition"
import { motion, useMotionValue  } from "framer-motion";
import useLocalStorage from "../hooks/useLocalStorage";
const TaskCard = ({id, content}) => {
    const {x, y} = useGetPosition(id)
    const [position, setPosition] = useState({x, y})
    const [startPos, setStartPos] = useState({x, y})
    const [coords, setCoords] = useLocalStorage(id + "-task-coords", {});
    // for framer motion
    const frame_x = useMotionValue(x);
    const frame_y = useMotionValue(y);

    const mouseDownHandler = (e) =>{
        console.log("mouse down |Dragging started|")
        setStartPos({
            x: e.screenX,
            y: e.screenY
        })
    }
    const mouseMoveHandler = (e) =>{
        if(!e.buttons) return 
            console.log("Trying to move......", e.screenX)
            setPosition(prev => ({
                x: prev.x + (e.screenX - startPos.x)/50,
                y: prev.y + (e.screenY - startPos.y)/50
            }))
           
    }
    const mouseUpHandler = (e) =>{
        // write to local storage
        setCoords({id, ...position})
    }
    // for framer motion
    // onDragEnd callback provides event and info, but we can also use our motion values
    const handleDragEnd = () => {
        console.log("Final position:", { x: frame_x.get(), y: frame_y.get() });
        // You can now use these values as needed
        // write to local storage
        setCoords({id,  x: frame_x.get(), y: frame_y.get() })
    };

    console.log("POSITION==>", id, position)
    return (<>

        {/* manual drag and drop feature */}
    
    <div className="task-container" style={{
        'left':`${position.x}px`,
        'top':`${position.y}px`
    }}
    onMouseDown={mouseDownHandler}
    onMouseUp={mouseUpHandler}
    onMouseMove={mouseMoveHandler}
    
    
    >
       📌 {content}
    </div>


{/* // using third party package */}
{/* <motion.div
      className="task-container"
      drag
      dragMomentum={false}
      dragConstraints={{ left: 0, right: window.innerWidth- 350, top: 0, bottom: window.innerHeight - 350}}
      dragElastic={0.5}  // controls elasticity, adjust for a more "organic" feel
      onDragEnd={handleDragEnd}
      style={{
        x:frame_x,
        y:frame_y
      }}
    >
      📌 {content}
    </motion.div> */}


    </>)
}

export default TaskCard