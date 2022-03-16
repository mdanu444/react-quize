import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";
export default function Answer({ options = [], myfun }) {
  return (
    <div className={classes.answers}>
      {options.length > 0 ? (
        options.map((option, index) => (
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
        ))
      ) : (
        <h1>No result found !</h1>
      )}
    </div>
  );
}
