import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";
import { lotteryAction } from "../Store";

const ButtonContainer = () => {
  const { lottArry } = useSelector((store) => store.lottery);
  const dispatch = useDispatch();
  // lottArry.map((item) => console.log(item));
  const heyButton = (item, index) => {
    // console.log(`${item.value} and the hide properyt ${item.hide}`);
    dispatch(lotteryAction.hidebutton(index));
  };
  return (
    <>
      {lottArry.map((item, index) => (
        <Box
          key={index}
          hide={item.hide}
          onClick={() => heyButton(item, index)}
        >
          {item.hide ? <p>{item.value}</p> : <p></p>}
        </Box>
      ))}
    </>
  );
};

export default ButtonContainer;
