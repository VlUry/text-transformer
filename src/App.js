import { useState } from "react";
import "./App.css";
import TextArea from "./components/TextArea";
import TransformText from "./script/Formate";

function App() {
  const [textTransformed, setTextTransformed] = useState(false);
  const [text, setText] = useState("");

  const transformButtonClick = () => {
    const textTransformator = new TransformText(text);
    setText(textTransformator.textTransforming());
    setTextTransformed(true);
  };

  const copyButtonClick = () => {
    setText("");
    setTextTransformed(false);
  };

  return (
    <div className="App">
      <div className="container">
        {!textTransformed ? (
          <TextArea
            areaOnChange={(e) => setText(e.target.value)}
            buttonOnClick={() => transformButtonClick()}
          />
        ) : (
          <>
            <div className="text-input">{text}</div>
            <button
              className="transforming-button"
              onClick={() => copyButtonClick()}
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
