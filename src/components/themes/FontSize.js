const FontSize = (props) => {
  return (
    <div>
      <h3>Adjust Font Size</h3>
      <input
        type="range"
        name="temp"
        list="tickmarks"
        min="50"
        max="250"
        step='25'
        value={props.fontPercentage}
        onChange={(e) => props.updateFontPercentage(+e.target.value)}
        style={{ accentColor: props.accentColor }} />

      <datalist id="tickmarks">
        <option value="50" label="50%"></option>
        <option value="100" label="100%"></option>
        <option value="150" label="150%"></option>
        <option value="200" label="200%" ></option>
        <option value="250" label="250%" ></option>
      </datalist>

    </div>
  );
}

export default FontSize