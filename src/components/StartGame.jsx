import styled from 'styled-components'



function StartGame() {
  return (
    <Container>
        <img src="/images/dices.png" alt="" />
        <div className='content'>
            <h1>Dice Game</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width:1180px;
    display:flex;
    margin:0 auto;
    align-items:center;

    .content {
        border:1px solid red;
        h1 {
            font-size: 96px;
            white-space:nowrap;
        }
    }
    `;
const Button = styled.button`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 10px 18px;
    gap: 10px;
    width: 220px;
    height: 44px;
    background: black;
    color: white;
    border-radius:5px;
    cursor: pointer;
    border:1px solid transparent;
    transition:0.4s background ease-in;

    &:hover {
        border:1px solid black;
        background-color: white;
        color: black;
        transition:0.3s background ease-in;
    }
    `