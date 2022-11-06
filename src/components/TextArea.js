const TextArea = (props) => {
  return (
    <>
      <textarea
        cols="30"
        rows="10"
        className="text-input"
        onChange={props.areaOnChange}
      />
      <button className="transforming-button" onClick={props.buttonOnClick}>
        Transform
      </button>
    </>
  );
};

export default TextArea;
