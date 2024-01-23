import { useState } from "react";
import OpenAI from "openai";

const ideaGeneratorBackend = process.env.REACT_APP_IDEA_GENERATOR_BACKEND;

const useAssistantApi = () => {
  const [data, setData] = useState<String | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown | Error>(null);

  const submitObjects = async (object1: string, object2: string) => {
    setLoading(true);
    if (ideaGeneratorBackend) {
      try {
        const response = await fetch(ideaGeneratorBackend, {
          method: "POST",
          body: JSON.stringify({ object1, object2 }),
        });
        const res = await response.json();
        if (res.errorType) {
          setError(res);
        } else {
          setData(res.message);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  };


  return { data, setData, loading, error, setError, submitObjects };
};

export default useAssistantApi;
