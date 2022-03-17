import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";
export default function Answer({ options = [], myfun, input }) {
  return (
    <div className={classes.answers}>
      {options.length > 0 ? (
        options.map((option, index) =>
          input ? (
            <Checkbox
              key={index}
              className={classes.answer}
              checked={option.checked}
              value={index}
              text={option.title}
              onChange={(e) => {
                myfun(e, index);
              }}
            />
          ) : (
            <Checkbox
              key={index}
              checked={option.checked}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              text={option.title}
              disabled
            />
          )
        )
      ) : (
        <h1>No result found !</h1>
      )}
    </div>
  );
}
