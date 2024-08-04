import { useSelector } from "react-redux";
import "../App.css";
const GuessNumber = () => {
  const { randomNum } = useSelector((store) => store.lottery);
  return (
    <div className="randomBox">
      <span>Guess</span> <span>{randomNum}</span>
    </div>
  );
};

export default GuessNumber;
