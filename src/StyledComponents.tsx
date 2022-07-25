import styled from "styled-components";
const Input = styled.input`
  border-radius: 0.2em;
  border: 0.5px solid #514f5d;
  outline: 0;
  background: transparent;
  font-size: 1em;
  width: 10em;
  padding: 0.5em 1em;
  ::placeholder {
    font-size: 0.8em;
  }
`;
const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 1em;
`;
const Header = styled.h1`
  margin: 0;
  padding: 1em;
  color: #0a061b;
`;
const FlexboxVertical = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FlexboxHorizontal = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const LineWithText = styled.h2`
  width: 20em;
  text-align: center;
  margin: 2em;
  color: #514f5d;
  span {
    background: #fff;
    padding: 0 10px;
  }
  font-size: 0.8em;
  border-bottom: 0.5px solid #514f5d;
  line-height: 0.1em;
`;

const Card = styled.div`
  display: flex;
  gap: 1.5em;
  padding: 1.5em;
  flex-direction: column;
  width: 25em;
  background-color: white;
  margin: 4em;
  border-radius: 0.1em;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 0.5rem;
  align-items: center;
`;

interface Props {
  background?: string;
  opacity?: number;
  backgroundColor?: string;
  flex?: number;
}
const Column = styled(Row)<Props>`
  flex-direction: column;
  background: ${(p) => (p ? p.background : "none")};
  opacity: ${(p) => (p && p.opacity ? p.opacity.toString() + "%" : "0%")}'
  background-color: ${(p) =>
    p && p.backgroundColor ? p.backgroundColor : "none"};
  flex: ${(p) => (p.flex ? p.flex.toString() : "0")}

`;

const Gradient = styled.div`
  background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
`;
export {
  Row,
  Gradient,
  Column,
  LineWithText,
  Input,
  FlexboxVertical,
  FlexboxHorizontal,
  Header,
  FlexboxContainer,
  Card,
};
