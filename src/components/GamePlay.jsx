import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
      if(!selectedNumber) {
        setError("You have not selected any number");
        return;
      }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);


    if (selectedNumber === randomNumber) {
      setScore((prev) => randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore  score={score} />
        <NumberSelector
          setError={setError}
            error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btn">
          <OutlineButton onClick={() => setScore(0)}> Reset </OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
        </div>
       {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 40px;
  }
 .btn {
    display: flex;
    // border: 1px solid red;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    }
`;
