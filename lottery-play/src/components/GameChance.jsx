import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import React from "react";
import { lotteryAction } from "../Store";

const GameChance = () => {
  const { selectthis } = useSelector((store) => store.lottery);
  const dispatch = useDispatch();
  const optionSelect = (event) => {
    dispatch(lotteryAction.gameChance(event.target.value));
  };

  return (
    <>
      <select
        className="form-select adjust-height"
        aria-label="Default select example"
        onChange={optionSelect}
        value={selectthis}
      >
        <option value="" disabled selected>
          Choose your chances
        </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </>
  );
};

export default GameChance;
