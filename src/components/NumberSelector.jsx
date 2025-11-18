import styled from "styled-components";

function NumberSelector({ setError, error, selectedNumber, setSelectedNumber }) {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

    const NumberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumbers.map((value, i) => (
          <Box
            isSelected={selectedNumber === value}
            key={i}
            onClick={() => NumberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 12px;
  }
  p {
    font-size: 24px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
