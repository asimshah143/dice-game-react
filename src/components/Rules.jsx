import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div>
        <p>Select any number.</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then  2 point will be deducted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
  padding: 16px;
  background-color: #f3bcbcff;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-top: 16px;
  h2 {
    margin-bottom: 12px;
  }
`;
