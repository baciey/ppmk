import React from 'react';
import ScrollToTop from 'react-router-scroll-top'
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import './css/App.sass';
import './css/nav.sass';


import Home from './Home'
import Portfolio from './Portfolio'
import Onas from './Onas'
import Kontakt from './Kontakt'
import Cennik from './Cennik'

import Logo from './img/logo.png'
import contactBg from './img/contact.jpg'


// import bgcImg from './img/bgc-img-home.jpg'
// import bgcImg from './img/bgc.jpg'









const tel = '845 347 124'
const email = 'gocha@hmail.com'
const adress = 'Wrocław, ul Balzaka 32/6'
const info = [tel, email, adress]


const bg = 'https://i.postimg.cc/5by8T5ZG/120674372-372783977093864-3573197447115165707-n.jpg'

class App extends React.Component {
  state = {
    menuToggle: '',
    width: 0,
    height: 0,
    scroll: 0,
    logoHide: false,
    menuBgGoDark: false,
    opacity: true,
    url: bg,
    bgImage: bg,
  }
  handleScroll = () => {
    if (this.state.width >= 600) {
      this.setState({ scroll: window.scrollY })
      if (window.scrollY > 99) {
        this.setState({ logoHide: true })
      } else this.setState({ logoHide: false })

      if (window.scrollY >= 260) {
        this.setState({ menuBgGoDark: true })
      } else this.setState({ menuBgGoDark: false })
    } else {
      this.setState({ logoHide: false, menuBgGoDark: false })
    }
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
  handleMenuListClick = (path) => {
    this.setState({ url: path })
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

  getData = (value) => {
    // console.log(value.length);
    if (value.length > 5) {
      this.setState({ url: value })
    } else {
      this.setState({ opacity: value })
    }
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
            <div className={"nav " + classes}>
              {this.state.width >= 600 ? null :
                <div className="menu-icon" onClick={this.handleHamburgerClick} >
                  <div className={"line " + classes}></div>
                  <div className={"line " + classes}></div>
                  <div className={"line " + classes}></div>
                </div>
              }
              <NavLink
                className="logo"
                onClick={this.handleMenuListClick}
                to="/" exact
                style={this.state.width >= 600 && this.state.logoHide ? { opacity: "0", height: '100px' } : { opacity: "1", height: '190px' }} >
                <img src={Logo} alt="" />
              </NavLink>
              <div className={"slide-menu " + menuBg}
                style={this.state.logoHide && this.state.width >= 600 ? { marginTop: "0px" } : null} >
                <ul className={classes}>
                  <li><NavLink onClick={() => this.handleMenuListClick(bg)} activeClassName="active" to="/" exact>Home</NavLink></li>
                  <li><NavLink onClick={() => this.handleMenuListClick(bg)} activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
                  <li><NavLink onClick={() => this.handleMenuListClick(bg)} activeClassName="active" to="/o-nas">O mnie</NavLink></li>
                  <li><NavLink onClick={() => this.handleMenuListClick(contactBg)} activeClassName="active" to="/kontakt">Kontakt</NavLink></li>
                  <li><NavLink onClick={() => this.handleMenuListClick(bg)} activeClassName="active" to="/cennik">Cennik</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="content">
              <Switch>
                <Route path="/" exact ><Home width={this.state.width} data={(opacity) => this.getData(opacity)} /></Route>
                <Route path="/portfolio" ><Portfolio width={this.state.width} /></Route>
                <Route path="/o-nas"><Onas width={this.state.width} /></Route>
                <Route path="/kontakt"><Kontakt width={this.state.width} info={info} /></Route>
                <Route path="/cennik" exact><Cennik width={this.state.width} /></Route>
              </Switch>

            </div>
            <div className="footer">
              stopka
            </div>
          </>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;






