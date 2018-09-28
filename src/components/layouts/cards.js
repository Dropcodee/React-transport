import React, { Component } from "react";
import avatar from "../../img/avatar.png";
class Cards extends Component {
  styles = {
    imgMax: {
      width: "300px",
      height: "300px"
    }
  };
  render() {
    return (
      <div className="drivers__section green">
        <div className="container">
          <div className="card__container">
            <div class="card horizontal z-depth-2 card__rounded">
              <div className="card-img">
                <img
                  src={avatar}
                  alt=""
                  className="responsive-img circle"
                  style={this.styles.imgMax}
                />
              </div>
              <div class="card-stacked">
                <div className="card-content">
                  <h4 className="grey-text">Mr Bode Thomos</h4>
                  <div className="divider" />
                  <ul>
                    <li>
                      {" "}
                      <h5>Color: Red</h5>
                    </li>
                    <li className="grey-text">
                      {" "}
                      <h5>Brand: Toyota</h5>
                    </li>
                    <li className="grey-text">
                      {" "}
                      <h5>Capacity: 5 Sitters</h5>
                    </li>
                    <li className="grey-text">
                      {" "}
                      <h5>Model: Corolla 2016</h5>
                    </li>
                  </ul>
                  <div className="ratings">
                    <i className="material-icons black-text">star_border</i>
                    <i className="material-icons black-text">star_border</i>
                    <i className="material-icons black-text">star_border</i>
                    <i className="material-icons black-text">star_border</i>
                  </div>
                  <a href="" className="btn black waves-effect waves-light">
                    {" "}
                    Book Now !
                  </a>
                </div>
              </div>
            </div>{" "}
            {/*  end of card*/}
            <div class="card horizontal z-depth-2 card__rounded">
              <div className="card-img">
                <img
                  src={avatar}
                  alt=""
                  className="responsive-img circle"
                  style={this.styles.imgMax}
                />
              </div>
              <div class="card-stacked">
                <div className="card-content">
                  <h4 className="grey-text">Mr Bode Thomos</h4>
                  <div className="divider" />
                  <ul>
                    <li>
                      {" "}
                      <h5>Color: Red</h5>
                    </li>
                    <li className="grey-text">
                      {" "}
                      <h5>Brand: Toyota</h5>
                    </li>
                    <li className="grey-text">
                      {" "}
                      <h5>Capacity: 5 Sitters</h5>
                    </li>
                    <li className="grey-text">
                      {" "}
                      <h5>Model: Corolla 2016</h5>
                    </li>
                  </ul>
                  <div className="ratings">
                    <i className="material-icons black-text">star_border</i>
                    <i className="material-icons black-text">star_border</i>
                    <i className="material-icons black-text">star_border</i>
                    <i className="material-icons black-text">star_border</i>
                  </div>
                  <a href="" className="btn black waves-effect waves-light">
                    {" "}
                    Book Now !
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
