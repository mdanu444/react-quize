import classes from "./../styles/textInput.module.css";
export default function InputBox({ inputClass, icon, ...resp }) {
  return (
    <div className={classes.textInput}>
      <input {...resp} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
