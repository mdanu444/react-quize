import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import classes from "./../styles/Miniplayer.module.css";
export default function Miniplayer() {
  const [show, setShow] = useState(false);
  const buttonRef = useRef();
  const { videoId } = useParams();

  function toggleButton() {
    if (!show) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setShow(!show);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setShow(!show);
    }
  }

  return (
    <div
      ref={buttonRef}
      onClick={toggleButton}
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleButton}
      >
        close
      </span>
      {show && (
        <ReactPlayer
          className={classes.player}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing={true}
          controls={true}
          width={"100%"}
          height={"100%"}
        />
      )}
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
