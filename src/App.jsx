import { useState } from "react";
import "./App.css";
import TextArea from "./components/TextArea";
import TransformText from "./script/Transform";

function App() {
  const [textTransformed, setTextTransformed] = useState(false);
  const [text, setText] = useState("");

  const handleTransformButtonClick = () => {
    if (!text) {
      return;
    }
    const textTransformator = new TransformText(text);
    setText(textTransformator.textTransforming());
    setTextTransformed(true);
  };

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(text);
    setText("");
    setTextTransformed(false);
  };

  return (
    <div className="App">
      <div className="container">
        {!textTransformed ? (
          <TextArea
            areaOnChange={(e) => setText(e.target.value)}
            buttonOnClick={handleTransformButtonClick}
          />
        ) : (
          <>
            <div className="text-input">{text}</div>
            <button
              className="transforming-button"
              onClick={handleCopyButtonClick}
            >
              Copy
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
