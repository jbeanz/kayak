import React, { useState } from "react";
import styled from "styled-components";
import { Row, Column } from "../../StyledComponents";
const FilterRow = styled(Row)`
  width: 20rem;
  justify-content: space-between;
  z-index: 10;
`;

interface Props {
  label: string;
}
const Filter = ({ label }: Props) => {
  const [count, setCount] = useState<number>(0);
  const handleSubtract = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <FilterRow>
      <div className="label">{label}</div>
      <Row>
        {" "}
        <button onClick={handleSubtract} className="subtract">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            role="img"
            height="10"
          >
            <path d="M30 92.5h140v15H30z"></path>
          </svg>
        </button>
        <div className="count">{count}</div>
        <button onClick={handleAdd} className="add">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            role="img"
            height="10"
          >
            <path d="M107.5 92.5V30h-15v62.5H30v15h62.5V170h15v-62.5H170v-15z"></path>
          </svg>
        </button>
      </Row>
    </FilterRow>
  );
};
export default Filter;
