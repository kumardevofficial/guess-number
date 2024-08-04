import "./App.css";
import MainCard from "./components/MainCard";
import ButtonContainer from "./components/ButtonContainer";
import ShuffleButton from "./components/ShuffleButton";
import GameChance from "./components/GameChance";
import GuessNumber from "./components/GuessNumber";
import GameStatus from "./components/GameStatus";

function App() {
  return (
    <>
      <GameStatus />
      <MainCard>
        <div className="myflex">
          <GameChance /> <GuessNumber />
        </div>
        <ButtonContainer></ButtonContainer>
        <ShuffleButton />
      </MainCard>
    </>
  );
}

export default App;
