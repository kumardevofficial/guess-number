import { useDispatch } from "react-redux";
import { lotteryAction } from "../Store";

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const suffleMe = () => {
    dispatch(lotteryAction.reShuffle());
  };
  return (
    <>
      <button
        onClick={suffleMe}
        type="button"
        style={{ width: "100%" }}
        className="btn btn-success mywidht"
      >
        Shuffle
      </button>
    </>
  );
};

export default ShuffleButton;
