import { useState } from "react";

const Block = ({question, answer, ind}) => {
  const [isOpen, setIsOpen] = useState(()=>{
    return ind === 0 ? true : false
  })
  return (<>
  
  <div className={isOpen ? `block-open`: `block-closed`}>
    <div className="title">
      <div className="sign" onClick={e=> setIsOpen(prev => !prev)}> {isOpen ? "🔽": "▶️"}</div>
      <div className="question"> {question}</div>
    </div>
    <div id="margin"></div>
    {isOpen && <div className="answer">
      {answer}
    </div>}
  </div>
  
  </>);
};

export default Block;
