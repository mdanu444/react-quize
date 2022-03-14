import Answer from "../Answer";
import Miniplayer from "../Miniplayer";
import ProgressBar from "../ProgressBar";
export default function Quize() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer />
      <ProgressBar />
      <Miniplayer />
    </>
  );
}
