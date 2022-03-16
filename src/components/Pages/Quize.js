import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./../../contexts/AuthContext";
import useFetchQuize from "./../../hooks/useFetchQuize";
import Answer from "./../Answer";
import Miniplayer from "./../Miniplayer";
import ProgressBar from "./../ProgressBar";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "question":
      action.value.forEach((question, index) => {
        question.options.forEach((option, index) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

export default function Quize() {
  const { videoId } = useParams();
  const { error, loading, quizes } = useFetchQuize(videoId);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();

  const ansWerHandler = async (e, index) => {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };
  useEffect(() => {
    dispatch({
      type: "question",
      value: quizes,
    });
  }, [quizes]);

  // function for next btn
  const nextBtn = async () => {
    if (currentQuestion >= 0 && currentQuestion < quizes.length - 1) {
      await setCurrentQuestion(currentQuestion + 1);
    }
  };
  //function for prev btn
  const prevBtn = async () => {
    if (currentQuestion >= 1 && currentQuestion < quizes.length) {
      await setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submit = async () => {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [videoId]: qna,
    });
    navigate(`/result/${videoId}`, { state: qna });
  };

  return (
    <>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Something Error</h1>}
      {!loading && !error && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            options={qna[currentQuestion].options}
            myfun={ansWerHandler}
          />
          <ProgressBar
            next={nextBtn}
            prev={prevBtn}
            submit={submit}
            videoId={videoId}
            currentQuestion={currentQuestion}
          />
          <Miniplayer />
        </>
      )}
    </>
  );
}
