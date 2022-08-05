import styled from "styled-components";

const Row = styled.div`
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  box-sizing: content-box;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 0 1rem;
  align-items: center;

  h1,
  h2 {
    color: black;
  }
  h1 {
    font-size: 1rem;
  }
  h2 {
    font-size: 0.8rem;
  }
`;

interface Props {
  title: string;
  subtitle: string;
}
const CardLink = ({ title, subtitle }: Props) => {
  return (
    <Row className="card-link">
      <div className="text">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
      <svg
        className="uitk-icon uitk-layout-flex-item uitk-icon-directional uitk-icon-medium"
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ width: "3rem" }}
      >
        <svg>
          <svg>
            <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
          </svg>
        </svg>
      </svg>
    </Row>
  );
};
export default CardLink;
