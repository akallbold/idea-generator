import { useState } from "react";
import OpenAI from "openai";

const ideaGeneratorBackend = process.env.REACT_APP_IDEA_GENERATOR_BACKEND;

const useAssistantApi = () => {
  const [data, setData] =
    useState<OpenAI.Beta.Threads.Messages.ThreadMessagesPage | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);

  const submitObjects = async (object1: string, object2: string) => {
    setLoading(true);
    if (ideaGeneratorBackend) {
      try {
        const response = await fetch(ideaGeneratorBackend, {
          method: "POST",
          body: JSON.stringify({ object1, object2 }),
        });
        const data = await response.json();
        console.log("IN HOOK", data);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return { data, loading, error, submitObjects };
};

export default useAssistantApi;
