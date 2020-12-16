import React from 'react';
import ScrollToTop from 'react-router-scroll-top'
import { HashRouter as Router, Route, NavLink, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import './css/App.sass';


import Home from './Home'
import Portfolio from './Portfolio'
import Onas from './Onas'
import Kontakt from './Kontakt'
import Cennik from './Cennik'
import PolitykaPrywatnosci from './PolitykaPrywatnosci'


import Logo from './img/logo.png'
// import contactBg from './img/contact.jpg'


// import bgcImg from './img/bgc-img-home.jpg'

// const Home =  React.lazy(() => import('./Home'));
// const Portfolio =  React.lazy(() => import('./Portfolio'));
// const Onas =  React.lazy(() => import('./Onas'));
// const Kontakt =  React.lazy(() => import('./Kontakt'));
// const Cennik =  React.lazy(() => import('./Cennik'));

//home
import bgc from './img/bgc-img-home.jpg'
import bgc480 from './img/bgc-img-home480.jpg'
//portfolio
import portfolio1280 from './img/portfolio-1280px.jpg'
import portfolio480 from './img/portfolio-480px.jpg'
//onas
import omnie from './img/omnie-1280px.jpg'
import omnieSmall from './img/omnie-480px.jpg'
//kontakt
import bg1280 from './img/kontakt-1280px.jpg'
import bg480 from './img/kontakt-480px.jpg'
//cennik
import cennik from './img/cennik.jpg'


const bg = [bgc, portfolio1280, portfolio480, omnie, omnieSmall, bg1280, bg480, cennik, bgc480];


const contactInfo = {
  phone: '845 347 124',
  email: 'mb.arch@vp.pl',
  adress: 'Wrocław',
  name: 'Pracownia Projektowa Małgorzata Kowalkowska',
  web: 'wwww.ppmk.pl',
  fbURL: "https://www.facebook.com/Pracownia-Projektowa-Ma%C5%82gorzata-Kowalkowska-407837736472631/",
  hbURL: 'https://www.homebook.pl/profil/1162158/ppmk'
}


// const bg = 'https://i.postimg.cc/5by8T5ZG/120674372-372783977093864-3573197447115165707-n.jpg'






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
    post: {},
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


    for (let i = 0; i < bg.length; i++) {
      const img = new Image();
      img.src = bg[i];
    }

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
                  <li><NavLink onClick={() => this.handleMenuListClick()} activeClassName="active" to="/" exact>Home</NavLink></li>
                  <li><NavLink onClick={() => this.handleMenuListClick()} activeClassName="active" to="/portfolio">Portfolio</NavLink></li>
                  <li><NavLink onClick={() => this.handleMenuListClick()} activeClassName="active" post={this.state.post} to="/o-nas">O mnie</NavLink></li>
                  <li><NavLink onClick={() => this.handleMenuListClick()} activeClassName="active" to="/kontakt">Kontakt</NavLink></li>
                  <li><NavLink onClick={() => this.handleMenuListClick()} activeClassName="active" to="/cennik">Cennik</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="content">
              <Switch>
                {/* <Suspense fallback={ 
                <div style={{height: '100vh', backgroundColor: "blue", position: 'relative'}}>
                  <div className="loader centered"></div>
                  </div>}> */}
                <Route path="/" exact ><Home width={this.state.width} data={(opacity) => this.getData(opacity)} bg={bg} /></Route>
                <Route path="/portfolio" ><Portfolio width={this.state.width} bg={bg} /></Route>
                <Route path="/o-nas"><Onas width={this.state.width} bg={bg} /></Route>
                <Route path="/kontakt"><Kontakt width={this.state.width} contactInfo={contactInfo} bg={bg} /></Route>
                <Route path="/cennik" ><Cennik width={this.state.width} bg={bg} /></Route>
                <Route path="/polityka-prywatnosci" ><PolitykaPrywatnosci width={this.state.width} contactInfo={contactInfo} /></Route>

                {/* </Suspense> */}
              </Switch>

            </div>
            <footer>
              <div className="footer">
                <address>
                  <p><a href={"tel: " + contactInfo.phone} >{contactInfo.phone}</a> </p>
                  <p><a href={"mailto: " + contactInfo.email}>{contactInfo.email}</a></p>
                </address>
                <div className="fb" onClick={() => { window.open(contactInfo.fbURL, '_blank') }}>
                  <FontAwesomeIcon icon={faFacebookF} size="3x" />
                </div>
                <p> Wszelkie prawa zastrzeżone &copy; 2020</p>
                <Link onClick={() => this.handleMenuListClick()}
                  to="/polityka-prywatnosci">Polityka prywatności
                    </Link>
              </div>
            </footer>
          </>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;






