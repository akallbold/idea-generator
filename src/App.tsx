import { useState } from "react";
import "./App.css";
import useAssistantApi from "./hooks/useAssistant";

function App() {
  const { data, submitObjects, loading, error } = useAssistantApi();
  const [inputObject1, setInputObject1] = useState("");
  const [inputObject2, setInputObject2] = useState("");
  const [object1, setObject1] = useState("");
  const [object2, setObject2] = useState("");
  const renderResults = () => {
    if (data) {
      // console.log("the whole thing", data);
      console.log("data.data", data.data);
      // console.log("data.body", data.body);
      // console.log("data.options", data.options);
      // console.log("data.response", data.response);
    }
  };
  renderResults();
  return (
    <div className="app-bg h-screen bg-cover bg-center relative backdrop-blur-lg">
      <div className="card w-3/4 h-3/4 bg-white mx-auto relative top-1/2 transform -translate-y-1/2 shadow-lg">
        <div className="card-top h-1/2 bg-no-repeat bg-contain bg-center"></div>
        <div className="card-bottom h-1/2 flex-row" flex-row>
          <div className="w-1/2 flex-col">
            <div className="flex-row">
              <input
                type="text"
                placeholder="Object 1"
                className="card-input rounded-xl"
                value={inputObject1}
                onChange={(e) => setInputObject1(e.target.value)}
              />
              <input
                type="text"
                placeholder="Object 2"
                className="card-input rounded-xl"
                value={inputObject2}
                onChange={(e) => setInputObject2(e.target.value)}
              />
            </div>
            <div>
              <button
                className="btn card-button rounded-xl"
                onClick={() => {
                  setObject1(inputObject1);
                  setObject2(inputObject2);
                  submitObjects(object1, object2);
                  setInputObject1("");
                  setInputObject2("");
                }}
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
                <p>
                  {` Object 1 was: ${object1} \n
                  Object 2 was ${object2} `}
                </p>
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
