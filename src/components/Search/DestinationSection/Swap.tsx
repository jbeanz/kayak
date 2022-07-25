import { useState } from "react";
import styled from "styled-components";

interface Props {
  handleSwap: () => void;
}

const SwapButton = styled.button`
  border-radius: 0.5rem;
  border: none;
  outline: 0;
  font-size: 1rem;
  align-items: center;
  svg {
    height: 2rem;
  }
  background: linear-gradient(to top, #80e1f5 0%, #99e7f7 100%);
  box-shadow: -5px -5px 20px #43b6ce inset;
`;
const Swap = ({ handleSwap }: Props) => {
  //rotate arrows on click
  const [rotate, setRotate] = useState<boolean>(false);
  let swapRotate: string = rotate ? "rotate(180deg)" : "none";
  const handleClick = (e: any) => {
    setRotate(!rotate);
    handleSwap();
  };
  return (
    <div className="swap">
      <SwapButton onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          role="img"
          style={{ transform: swapRotate, transition: "transform 200ms ease" }}
        >
          <path d="M56.238 154.801c-25.271-30.326-30.335-33.201-25-39.603l25-30l11.523 9.603L53.013 112.5H120v15H53.013l14.749 17.699l-11.524 9.602zm86.524-40l-11.523-9.603L145.987 87.5H80v-15h65.987l-14.749-17.699l11.523-9.603l25 30c5.335 6.403.272 9.278-24.999 39.603z"></path>
        </svg>
      </SwapButton>
    </div>
  );
};

export default Swap;
