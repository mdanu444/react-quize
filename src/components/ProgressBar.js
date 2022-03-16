import classes from "./../styles/ProgressBar.module.css";
import Button from "./Button";
export default function ProgressBar({
  next,
  prev,
  submit,
  videoId,
  currentQuestion,
}) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>
          {((currentQuestion + 1) / 4) * 100 + "%"}
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: ((currentQuestion + 1) / 4) * 100 + "%" }}
          ></div>
        </div>
      </div>
      {((currentQuestion + 1) / 4) * 100 === 100 ? (
        <Button onClick={submit} className={`${classes.next}`}>
          <span>Submit</span>
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
