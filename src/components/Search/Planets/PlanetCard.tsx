import styled from "styled-components";

interface Props {
  src: string;
  name: string;
  price: string;
}

const PlanetCard = ({ src, name, price }: Props) => {
  return (
    <div id="curve" className="card" style={{ width: "15vw" }}>
      <img className="planet-card-img" src={src} alt={name} />
      <div className="footer">
        {/* <div className="connections">
            <div className="connection facebook">
              <div className="icon"></div>
            </div>
            <div className="connection twitter">
              <div className="icon"></div>
            </div>
            <div className="connection behance">
              <div className="icon"></div>
            </div>
          </div> */}
        <svg id="curve">
          <path
            id="p"
            d="M0,200 Q80,100 400,200 V150 H0 V50"
            transform="translate(0 300)"
          />
          <rect
            id="dummyRect"
            x="0"
            y="0"
            height="450"
            width="400"
            fill="transparent"
          />
          {/* < />!-- slide up--> */}
          <animate
            xlinkHref="#p"
            attributeName="d"
            to="M0,50 Q80,100 400,50 V150 H0 V50"
            fill="freeze"
            begin="dummyRect.mouseover"
            end="dummyRect.mouseout"
            dur="0.1s"
            id="bounce1"
          />
          {/* < />!-- slide up and curve in --> */}
          <animate
            xlinkHref="#p"
            attributeName="d"
            to="M0,50 Q80,0 400,50 V150 H0 V50"
            fill="freeze"
            begin="bounce1.end"
            end="dummyRect.mouseout"
            dur="0.15s"
            id="bounce2"
          />
          {/* < />!-- slide down and curve in --> */}
          <animate
            xlinkHref="#p"
            attributeName="d"
            to="M0,50 Q80,80 400,50 V150 H0 V50"
            fill="freeze"
            begin="bounce2.end"
            end="dummyRect.mouseout"
            dur="0.15s"
            id="bounce3"
          />
          {/* < />!-- slide down and curve out --> */}
          <animate
            xlinkHref="#p"
            attributeName="d"
            to="M0,50 Q80,45 400,50 V150 H0 V50"
            fill="freeze"
            begin="bounce3.end"
            end="dummyRect.mouseout"
            dur="0.1s"
            id="bounce4"
          />
          {/* < />!-- curve in --> */}
          <animate
            xlinkHref="#p"
            attributeName="d"
            to="M0,50 Q80,50 400,50 V150 H0 V50"
            fill="freeze"
            begin="bounce4.end"
            end="dummyRect.mouseout"
            dur="0.05s"
            id="bounce5"
          />
          <animate
            xlinkHref="#p"
            attributeName="d"
            to="M0,200 Q80,100 400,200 V150 H0 V50"
            fill="freeze"
            begin="dummyRect.mouseout"
            dur="0.15s"
            id="bounceOut"
          />
        </svg>
        <div className="info">
          <div className="planet-name">{name}</div>
          <div className="job">Roundtrip from {price}</div>
        </div>
      </div>
      <div className="card-blur"></div>
    </div>
  );
};
export default PlanetCard;
