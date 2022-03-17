import { useRef, useState } from "react";
import classes from "./../styles/ProgressBar.module.css";
import Button from "./Button";
export default function ProgressBar({
  next,
  prev,
  submit,
  videoId,
  currentQuestion,
}) {
  const progress = ((currentQuestion + 1) / 4) * 100;
  const [show, setShow] = useState(false);
  const tooltipRef = useRef();

  function toggleTooltip() {
    if (show) {
      setShow(false);
      tooltipRef.current.style.display = "none";
    } else {
      setShow(true);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
    }
  }

  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={classes.rangeArea}>
        <div ref={tooltipRef} className={classes.tooltip}>
          {progress + "%"}
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            style={{ width: progress + "%" }}
          ></div>
        </div>
      </div>
      {progress === 100 ? (
        <Button onClick={submit} className={`${classes.next}`}>
          <span>Submit Quize</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      ) : (
        <Button onClick={next} className={`${classes.next}`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      )}
    </div>
  );
}
