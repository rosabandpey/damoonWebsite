import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";




export default Navbar = props => {

  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);


  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }


  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault();
                      setdashboard(!dashboard);
                    }}
                    to="/dashboard"
                  >
                    <i className="bx bx-home-circle me-2"></i>
                    {props.t("Dashboard")} {props.menuOpen}
                    <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: dashboard })}
                  >
                    <Link to="/dashboard" className="dropdown-item">
                      {props.t("Default")}
                    </Link>
                    <Link to="/dashboard-saas" className="dropdown-item">
                      {props.t("Saas")}
                    </Link>
                    <Link to="/dashboard-crypto" className="dropdown-item">
                      {props.t("Crypto")}
                    </Link>
                    <Link to="/blog" className="dropdown-item">
                      {props.t("Blog")}
                    </Link>
                    <Link to="/dashboard-job" className="dropdown-item">
                      {props.t("Jobs")}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault();
                      setui(!ui);
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-tone me-2"></i>
                    {props.t("UI Elements")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                          <Link to="/ui-alerts" className="dropdown-item">
                            {props.t("Alerts")}
                          </Link>
                          <Link to="/ui-buttons" className="dropdown-item">
                            {props.t("Buttons")}
                          </Link>
                          <Link to="/ui-cards" className="dropdown-item">
                            {props.t("Cards")}
                          </Link>
                          <Link to="/ui-carousel" className="dropdown-item">
                            {props.t("Carousel")}
                          </Link>
                          <Link to="/ui-dropdowns" className="dropdown-item">
                            {props.t("Dropdowns")}
                          </Link>
                          <Link to="/ui-grid" className="dropdown-item">
                            {props.t("Grid")}
                          </Link>
                          <Link to="/ui-images" className="dropdown-item">
                            {props.t("Images")}
                          </Link>
                          <Link to="/ui-lightbox" className="dropdown-item">
                            {props.t("Lightbox")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="/ui-modals" className="dropdown-item">
                            {props.t("Modals")}
                          </Link>
                          <Link to="/ui-offcanvas" className="dropdown-item">
                            {props.t("Offcanvas")}
                          </Link>
                          <Link to="/ui-rangeslider" className="dropdown-item">
                            {props.t("Range Slider")}
                          </Link>
                          <Link
                            to="/ui-session-timeout"
                            className="dropdown-item"
                          >
                            {props.t("Session Timeout")}
                          </Link>
                          <Link to="/ui-progressbars" className="dropdown-item">
                            {props.t("Progress Bars")}
                          </Link>
                          <Link to="/ui-placeholders" className="dropdown-item">
                            {props.t("Placeholders")}
                          </Link>
                          {/* <Link to="/ui-sweet-alert" className="dropdown-item">
                              {props.t("Sweet-Alert")}
                            </Link> */}
                          <Link
                            to="/ui-tabs-accordions"
                            className="dropdown-item"
                          >
                            {props.t("Tabs & Accordions")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="/ui-typography" className="dropdown-item">
                            {props.t("Typography")}
                          </Link>
                          <Link to="/ui-toasts" className="dropdown-item">
                            {props.t("Toasts")}
                          </Link>
                          <Link to="/ui-video" className="dropdown-item">
                            {props.t("Video")}
                          </Link>
                          <Link to="/ui-general" className="dropdown-item">
                            {props.t("General")}
                          </Link>
                          <Link to="/ui-colors" className="dropdown-item">
                            {props.t("Colors")}
                          </Link>
                          <Link to="/ui-rating" className="dropdown-item">
                            {props.t("Rating")}
                          </Link>
                          <Link to="/ui-notifications" className="dropdown-item">
                            {props.t("Notifications")}
                          </Link>
                          <Link to="/ui-utilities" className="dropdown-item">
                            {props.t("Utilities")}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>

               

             

              
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};




