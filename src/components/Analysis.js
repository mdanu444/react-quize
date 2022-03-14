import classes from "./../styles/Analysis.module.css";
import Answer from "./Answer";
export default function Analysis() {
  return (
    <>
      <div className={classes.analysis}>
        <h1>Question Analysis</h1>
        <h4>You answerd 5 out of 10 questions correctly</h4>
        <div className={classes.question}>
          <div className={classes.qtitle}>
            <span
              className={`${classes.material} icons-outlined-help_outline`}
            ></span>
            Here goes the question from Learn with Sumit?
          </div>
          <div className={classes.answers}>
            <Answer />
          </div>
        </div>
      </div>
    </>
  );
}
