import "../App.css";
const GameMode = () => {
  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        style={{ width: "160%" }}
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default GameMode;
