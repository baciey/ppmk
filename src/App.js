import React from 'react';
import ScrollToTop from 'react-router-scroll-top'
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import './css/App.sass';

import Home from './Home'
import Portfolio from './Portfolio'
import Onas from './Onas'
import Kontakt from './Kontakt'
import Cennik from './Cennik'

import Logo from './img/logo.png'
import bgcImg from './img/bgc-img-home.jpg'








const tel = '845 347 124'
const email = 'gocha@hmail.com'
const adress = 'Wrocław, ul Balzaka 32/6'
const info = [tel, email, adress]




class App extends React.Component {
  state = {
    menuToggle: '',
    width: 0,
    height: 0,
    scroll: 0,
    logoHide: false,
    menuBgGoDark: false,
  }
  handleScroll = () => {
    this.setState({ scroll: window.scrollY })
    if (window.scrollY > 99) {
      this.setState({ logoHide: true })
    } else this.setState({ logoHide: false })

    if (window.scrollY >= 260) {
      this.setState({ menuBgGoDark: true })
    } else this.setState({ menuBgGoDark: false })
  };
  handleHamburgerClick = () => {
    if (this.state.menuToggle === '') {
      this.setState({ menuToggle: true })
    } else if (this.state.menuToggle === true) {
      this.setState({ menuToggle: false })
    } else if (this.state.menuToggle === false) {
      this.setState({ menuToggle: true })
    }
  }
  handleMenuListClick = () => {
    if (window.innerWidth < 600) {
      if (this.state.menuToggle) {
        this.setState({ menuToggle: !this.state.menuToggle })
      }
    }
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth >= 600) this.setState({ menuToggle: true })
    if (window.innerWidth < 600) this.setState({ menuToggle: false })
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener('scroll', this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    let classes;
    let menuBg;
    if (this.state.menuToggle === true) classes = 'active';
    if (this.state.menuToggle === '') classes = '';
    if (this.state.menuToggle === false) classes = 'inactive';
    if (this.state.menuBgGoDark) menuBg = "dark"
    else menuBg = "transparent"

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <>
            <div className="background-img">
              <img src={bgcImg} alt="" />
            </div>
            <div className={"nav " + classes}>
              <div className={"top-bar " + menuBg}>
                {this.state.width >= 600 ? null : <div onClick={this.handleHamburgerClick} className="menu-icon">
                  <div className={"line " + classes}></div>
                  <div className={"line " + classes}></div>
                  <div className={"line " + classes}></div>
                </div>}
                <NavLink className="menu-home" style={!this.state.logoHide ? { opacity: "1", zIndex: "0" } : { opacity: "0", zIndex: "-1" }}
                  onClick={this.handleMenuListClick}
                  to="/" exact >
                  <img src={Logo} alt="" />
                </NavLink>
              </div>
              <div className={"slide-menu " + menuBg}
                style={this.state.logoHide && this.state.width >= 600 ?
                  { marginTop: "-70px" } : { marginTop: "0px" }

                } >
                <ul className={classes}>
                  <li><NavLink onClick={this.handleMenuListClick} to="/" exact>Home</NavLink></li>
                  <li><NavLink onClick={this.handleMenuListClick} to="/portfolio">Portfolio</NavLink></li>
                  <li><NavLink onClick={this.handleMenuListClick} to="/o-nas">O nas</NavLink></li>
                  <li><NavLink onClick={this.handleMenuListClick} to="/kontakt">Kontakt</NavLink></li>
                  <li><NavLink onClick={this.handleMenuListClick} to="/cennik">Cennik</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="container">
              container {this.state.scroll}
              <Switch>
                <Route path="/" exact ><Home /></Route>
                <Route path="/portfolio" ><Portfolio /></Route>
                <Route path="/o-nas"><Onas /></Route>
                <Route path="/kontakt"><Kontakt info={info} /></Route>
                <Route path="/cennik" exact><Cennik /></Route>
              </Switch>
              <div className="footer">
                stopka
            </div>
            </div>

          </>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;






