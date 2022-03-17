import { Fragment } from "react";
import classes from "./../styles/Analysis.module.css";
import Answer from "./Answer";
export default function Analysis(answers) {
  return (
    <>
      <div className={classes.analysis}>
        <h1>Question Analysis</h1>

        {answers.answers.map((answer, index) => (
          <Fragment key={index}>
            <div className={classes.question}>
              <div className={classes.qtitle}>
                <span
                  className={`${classes.material} icons-outlined-help_outline`}
                ></span>
                {answer.title}
              </div>
              <div className={classes.answers}>
                <Answer options={answer.options} />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
