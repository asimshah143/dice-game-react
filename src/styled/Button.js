    import styled from "styled-components";

    export const Button = styled.button`
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
    export const OutlineButton = styled(Button)`
    border: 1px solid black;
    background-color: white;
    color: black;
    &:hover {
        border:1px solid black;
        background-color: black;
        color: white;
    
    `