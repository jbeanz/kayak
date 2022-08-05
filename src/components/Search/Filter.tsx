import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Column } from "../../StyledComponents";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 5;
`;

const Counter = styled(Row)`
  gap: 0.5rem;
`;
const Button = styled.button`
    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue",
      Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
  
  :hover,
  :focus {
    background-color: #fb8332;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;

  :hover {
    transform: translateY(-1px);

  :active {
    background-color: #c85000;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  
`;

interface Props {
  label: string;
  count: string | unknown;
  handleSubtract: () => void;
  handleAdd: () => void;
}

const Filter = ({ label, count, handleSubtract, handleAdd }: Props) => {
  // const useOutsideAlerter = (ref: any) => {
  //   useEffect(() => {
  //     const handleClickOutside = (event: any) => {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         alert("clicked outside!");
  //       }
  //     };
  //   }, [ref]);
  // };

  // const wrapperRef = useRef();
  // useOutsideAlerter(wrapperRef);
  return (
    <Row>
      <div className="label">{label}</div>
      <Counter className="label">
        <Button onClick={handleSubtract} className="subtract">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            role="img"
            height="10"
          >
            <path d="M30 92.5h140v15H30z"></path>
          </svg>
        </Button>
        <div className="count">0</div>
        <Button onClick={handleAdd} className="add">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            role="img"
            height="10"
          >
            <path d="M107.5 92.5V30h-15v62.5H30v15h62.5V170h15v-62.5H170v-15z"></path>
          </svg>
        </Button>{" "}
      </Counter>
    </Row>
  );
};
export default Filter;
