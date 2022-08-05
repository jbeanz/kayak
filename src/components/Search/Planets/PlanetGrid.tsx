import PlanetCard from "./PlanetCard";
import styled from "styled-components";
import mars from "../../../img/mars.webp";
import arrakis from "../../../img/arrakis.jpeg";
import moon from "../../../img/moon.jpeg";
import konoha from "../../../img/konoha.jpeg";
import aincrad from "../../../img/aincrad.jpeg";
import airTemple from "../../../img/eastern-air-temple.webp";
import gilese from "../../../img/Gilese-504B.jpeg";
import mr2076 from "../../../img/mr2076.jpeg";
import uranus from "../../../img/uranus.jpg";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
const PlanetGrid = (data: any) => {
  return (
    <Row>
      <PlanetCard src={konoha} name="Planet" price="$49K" />
      <PlanetCard src={gilese} name="Planet" price="$49K" />
      <PlanetCard src={aincrad} name="Planet" price="$49K" />
      <PlanetCard src={airTemple} name="Planet" price="$49K" />
      <PlanetCard src={moon} name="Planet" price="$49K" />
      <PlanetCard src={uranus} name="Planet" price="$49K" />
      <PlanetCard src={arrakis} name="Planet" price="$49K" />
      <PlanetCard src={mr2076} name="Planet" price="$49K" />
      <PlanetCard src={mars} name="Planet" price="$49K" />
    </Row>
  );
};
export default PlanetGrid;
