import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
// import "./../firebase";

export default function useFetchAnswer(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswer() {
      //database realted works
      const db = getDatabase();
      const answersRef = ref(db, "answers/" + videoId + "/questions");
      const AnswerQuery = query(answersRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(AnswerQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((previousAnswer) => {
            return [...previousAnswer, ...Object.values(snapshot.val())];
          });
        } else {
          //
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchAnswer();
  }, [videoId]);

  return {
    loading,
    error,
    answers,
  };
}
