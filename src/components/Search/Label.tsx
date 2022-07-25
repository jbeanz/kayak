import { firstLetterUppercase } from "./util";
import { Row, Column } from "../../StyledComponents";
import styled from "styled-components";

interface Props {
  label: string;
}

const Label = ({ label }: Props) => {
  const display = firstLetterUppercase(label);
  return (
    <Row className="label-container">
      <div className="label">{display}</div>
      <div className="arrow">
        <svg
          role="img"
          style={{ width: "1rem" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <path d="M100 132.5c-3.873 0 .136 2.376-64.801-51.738l9.603-11.523L100 115.237l55.199-45.999l9.603 11.523C99.806 134.924 103.855 132.5 100 132.5z"></path>
        </svg>
      </div>
    </Row>
  );
};

export default Label;
