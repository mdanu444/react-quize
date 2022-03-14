export default function InputBox({ className, text, ...resp }) {
  return (
    <label className={className}>
      <input type="checkbox" {...resp} />
      <span>{text}</span>
    </label>
  );
}
