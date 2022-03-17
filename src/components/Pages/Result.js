import _ from "lodash";
import { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetchAnswer from "../../hooks/useAnswes";
import Analysis from "../Analysis";
import Summery from "../Summery";

export default function Result() {
  const { state } = useLocation();
  const { videoId } = useParams();
  const { loading, error, answers } = useFetchAnswer(videoId);
  const calculate = () => {
    const currectIndex = [];
    const checkedIndex = [];
    let score = 0;
    answers.forEach((questions, index1) => {
      questions.options.forEach((option, index2) => {
        if (option.correct) currectIndex.push(index2);

        if (state[index1].options[index2].checked === true) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(currectIndex, checkedIndex)) {
        score = score + 5;
      }
    });
    return { score, currectIndex, checkedIndex };
  };
  const { score, currectIndex, checkedIndex } = calculate();
  console.log(score);
  return (
    <>
      {loading && "loading..."}
      {error && "Something error!"}
      {!loading && !error && answers && answers.length > 0 && (
        <Fragment>
          <Summery score={score} noq={answers.length} />
          <Analysis answers={answers} />
        </Fragment>
      )}
    </>
  );
}
