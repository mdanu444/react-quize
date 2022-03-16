import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
// import "./../firebase";

export default function useFetchQuize(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    async function fetchQuize() {
      //database realted works
      const db = getDatabase();
      const quizeRef = ref(db, "quiz/" + videoId + "/questions");
      const quizeQuery = query(quizeRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(quizeQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuizes((previousQuize) => {
            return [...previousQuize, ...Object.values(snapshot.val())];
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
    fetchQuize();
  }, [videoId]);

  return {
    loading,
    error,
    quizes,
  };
}
