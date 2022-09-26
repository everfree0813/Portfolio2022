import {useEffect} from 'react'
import "./Typewritter.css";
// import {useEffect} from 'react'
//http://jsdoc.app/tags-pram.html

function Typewritter({data = [], TypeSpeed = 100, MsgDelay = 2000 }) {
  useEffect(() => {
    let characterPos = 0;
    let MsgBuffer = "";
    let MsgIndex = 0;
    let delay;

    function startTyping() {
      let id = document. getElementById("typing-text");
      if (characterPos !== data[MsgIndex].length) {
        MsgBuffer = MsgBuffer + data[MsgIndex].charAt(characterPos);
        id.value = MsgBuffer + "_";
        delay = TypeSpeed;
      } else {
        delay = MsgDelay;
        MsgBuffer = "";
        characterPos = -1;
        if(MsgIndex !== data.length - 1) {
          MsgIndex++;
        } else {
          MsgIndex = 0;
        }
      }
    
    characterPos++;
    setTimeout(startTyping,delay);
  }

    startTyping();

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <textarea id= "typing-text" readOnly></textarea>
)
}

export default Typewritter