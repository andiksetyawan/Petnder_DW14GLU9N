import React from "react";
import PropTypes from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

//import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlinedIcon";

class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, bind, data } = this.props;
    const { name, pics } = data[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card" style={{ position: "relative" }}>
            <Carousel heightMode="max">
              {pics.map((pic, index) => (
                <img
                  src={pic}
                  key={index}
                  style={{ height: "100%", minHeight: "100%" }}
                  alt="profilePicture"
                />
              ))}
            </Carousel>
            <div
              className="captionswiper"
              style={{ position: "absolute", top: 250 }}
            >
              <h2>{name}</h2>
              {/* <h5>{distance}</h5> */}
              <h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <PersonOutlineRoundedIcon fontSize="small" />
                  </div>
                  <div>Breeder : {name}</div>
                </div>
              </h5>
              <h5>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <LocationOnOutlinedIcon fontSize="small" />
                  </div>
                  <div>10 Km dari sini</div>
                </div>
              </h5>
              {/* <h5>{text}</h5> */}
            </div>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  distance: PropTypes.string,
  text: PropTypes.string,
  pics: PropTypes.array
};

export default Card;
