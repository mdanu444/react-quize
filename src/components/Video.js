import classes from "./../styles/Video.module.css";

export default function Video(props) {
  return (
    <div className={classes.video}>
      <img
        src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`}
        alt={props.title}
      />
      <p>{props.title}</p>
      <div className="qmeta">
        <p>{props.noq} Questions</p>
        <p>Score : {props.noq * 5}</p>
      </div>
    </div>
  );
}
