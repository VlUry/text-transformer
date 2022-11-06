const TranformedText = (props) => {
  return (
    <>
      <div className="text-input">{props.text}</div>
      <button className="transforming-button" onClick={props.buttonOnClick}>
        Copy
      </button>
    </>
  );
};

export default TranformedText;
