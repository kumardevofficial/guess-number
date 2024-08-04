import { useSelector } from "react-redux";
import "../App.css";
const GameStatus = () => {
  const { winState } = useSelector((store) => store.lottery);
  return (
    <div
      style={
        winState == "YOU WIN"
          ? { backgroundColor: "lightgreen" }
          : { backgroundColor: "skyblue" }
      }
      className="gameStatus"
    >
      {winState}
    </div>
  );
};

export default GameStatus;
