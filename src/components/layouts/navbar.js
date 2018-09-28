import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper green">
            <a href="#" class="brand-logo center">
              Luber
            </a>
            <a href="#!" className="sidenav-trigger" data-target="mobile-demo">
              <i className="material-icons"> menu</i>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
