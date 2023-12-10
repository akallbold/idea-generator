import { useEffect, useState } from "react";
import "./App.css";
import useAssistantApi from "./hooks/useAssistant";

function App() {
  const { data, submitObjects, loading } = useAssistantApi();
  const [inputObject1, setInputObject1] = useState("");
  const [inputObject2, setInputObject2] = useState("");
  const [object1, setObject1] = useState("");
  const [object2, setObject2] = useState("");
  const renderResults = () => {
    if (data) {
      console.log("data.data", data.data);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleSubmit = () => {
    setObject1(inputObject1);
    setObject2(inputObject2);
    submitObjects(inputObject1, inputObject2);
    setInputObject1("");
    setInputObject2("");
  };

  renderResults();
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="app-bg absolute top-0 left-0 w-full h-full bg-cover bg-center blur scale-120"></div>
      <div className="card w-3/4 h-3/4 bg-white shadow-lg rounded-xl md:filter-none relative">
        <div className="card-top h-1/2 bg-no-repeat bg-contain bg-center"></div>

        <div className="card-bottom h-1/2 flex-row" flex-row>
          <div className="flex flex-col items-center w-1/2 mx-auto">
            <div className="flex flex-row w-full justify-between">
              <input
                type="text"
                placeholder="Object 1"
                className="card-input rounded-xl w-6/12 m-1"
                value={inputObject1}
                onChange={(e) => setInputObject1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Object 2"
                className="card-input rounded-xl w-6/12 m-1"
                value={inputObject2}
                onChange={(e) => setInputObject2(e.target.value)}
              />
            </div>
            <div className="w-full mt-2">
              <button
                className="btn card-button rounded-xl"
                onClick={handleSubmit}
              >
                Generate Idea
              </button>
            </div>
          </div>

          <div className="w-1/2 flex-col">
            <div className="flex-row">
              {loading && (
                <p>
                  {` By combining a ${object1} and a ${object2} ChatGPT is
                  thinking of something real good!`}
                </p>
              )}
              {object1 && object2 && (
                <div>
                  <span>{` Object 1 was: `}</span>
                  <span className="font-bold">{`${object1}`}</span>
                  <br />
                  <span>{` Object 2 was: `}</span>
                  <span className="font-bold">{`${object2}`}</span>
                </div>
              )}
              {data && <p> data... </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
