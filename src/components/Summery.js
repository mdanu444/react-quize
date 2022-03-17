import image from "./../Assets/images/success.png";
import classes from "./../styles/Summery.module.css";
export default function Summery({ score, noq }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}
