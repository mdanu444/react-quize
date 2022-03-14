import classes from "./../styles/Button.module.css";
export default function Button({ children, className, ...resp }) {
  return (
    <>
      <button
        {...resp}
        className={`${classes.className || ""} ${classes.button}`}
      >
        {children}
      </button>
    </>
  );
}
