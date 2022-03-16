import classes from "./../styles/Video.module.css";

export default function Video({ id, title, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Score : {noq * 5}</p>
      </div>
    </div>
  );
}
