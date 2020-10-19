import React from 'react';
import './css/Kontakt.sass';

import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import bg1280 from './img/kontakt-1280px.jpg'
import bg1280 from './img/kontakt-1280px1.jpg'
import bg480 from './img/kontakt-480px.jpg'

import ArrowDown from './ArrowDown'
import hb from './img/hb1.png'
import fb from './img/fb2.png'



const fbURL = "https://www.facebook.com/Pracownia-Projektowa-Ma%C5%82gorzata-Kowalkowska-407837736472631/"
const hbURL = 'https://www.homebook.pl/profil/1162158/ppmk'

class Kontakt extends React.Component {
  state = {
    user_name: '',
    user_nameStyle: { display: 'none' },
    user_nameError: " ",
    email: '',
    emailStyle: { display: 'none' },
    emailError: " ",
    msg: '',
    msgStyle: { display: 'none' },
    msgError: " ",
    nameIsOkay: null,
    emailIsOkay: null,
    msgIsOkay: null,
    sendMsg: false,
    msgSuccessful: false,
    errorInfo: ' ',
    LoaderON: false,

  }


  sendEmail = (e) => {
    e.preventDefault();
    this.throwError();
    this.setState({ msgSuccessful: false })
    if (!this.state.sendMsg) return

    this.setState({ LoaderON: true })

    emailjs.sendForm("dietacud.pl@gmail.com", "template_nppa8wj", e.target, 'user_iQFi1eTP3SxSGEewhhpe4')
      .then((result) => {
        console.log(result.text);
        this.setState({ errorInfo: 'Wiadomość wysłana.', msgSuccessful: true, LoaderON: false })
        this.resetForm();
      }, (error) => {
        console.log(error.text);
        this.setState({ errorInfo: 'Błąd. Nie udało się wysłać wiadomości.', LoaderON: false })
      });
    // e.target.reset();

  }
  resetForm = () => {
    this.setState({
      user_name: '',
      email: '',
      msg: '',
      user_nameStyle: { display: 'none' },
      emailStyle: { display: 'none' },
      msgStyle: { display: 'none' },
      nameIsOkay: null,
      emailIsOkay: null,
      msgIsOkay: null,
      sendMsg: false,
    })
  }
  threeTimesYes = () => {
    const { nameIsOkay, emailIsOkay, msgIsOkay } = this.state
    if (nameIsOkay && msgIsOkay && emailIsOkay) {
      console.log('3x yes');
      this.setState({ sendMsg: true })
    }
    else {
      console.log('no');
      this.setState({ sendMsg: false })
    }
  }

  throwError = () => {
    const { nameIsOkay, emailIsOkay, msgIsOkay } = this.state

    if (!nameIsOkay) return this.setState({ user_nameError: "Podaj proszę imię (min. 3 znaki)" })
    if (!emailIsOkay) return this.setState({ emailError: "Podaj proszę adres email" })
    if (!msgIsOkay) return this.setState({ msgError: "Wpisz proszę wiadomość (min. 5 znaków)" })

  }

  checkInputs = (fieldName) => {
    const { user_name, email, msg } = this.state;
    const fn = this.threeTimesYes;
    const green = { color: 'lightgreen' };
    const red = { color: '#f23333' }

    this.setState({ msgSuccessful: false, errorInfo: ' ' })


    if (fieldName === 'user_name') {
      if (user_name.trim().length > 2) this.setState({ nameIsOkay: true, user_nameStyle: green, user_nameError: ' ' }, fn)
      else { this.setState({ nameIsOkay: false, user_nameStyle: red }, fn) }
    }

    if (fieldName === 'email') {
      if (email.trim().length > 2) this.setState({ emailIsOkay: true, emailStyle: green, emailError: " " }, fn)
      else { this.setState({ emailIsOkay: false, emailStyle: red }, fn) }
    }
    if (fieldName === 'msg') {
      if (msg.trim().length > 4) this.setState({ msgIsOkay: true, msgStyle: green, msgError: " " }, fn)
      else { this.setState({ msgIsOkay: false, msgStyle: red }, fn) }
    }
  }



  handleChange = (fieldName, value) => {
    this.setState({ [fieldName]: value }, () => this.checkInputs(fieldName))
  }




  render() {
    const { user_name, email, msg, user_nameStyle, emailStyle, msgStyle,
      nameIsOkay, emailIsOkay, msgIsOkay, user_nameError, emailError, msgError, msgSuccessful, errorInfo, LoaderON } = this.state
    const width = this.props.width;
    let error;
    if (user_nameError.length > 2) error = user_nameError
    else {
      if (emailError.length > 2) error = emailError
      else {
        if (msgError.length > 2)
          error = msgError
        else error = errorInfo
      }
    }



    return (
      <div className="kontakt-container">
        {width < 400 ? null : <ArrowDown />}
        <div className="background-img">
          {width < 400 ? null : <img src={width < 1024 ? bg480 : bg1280} alt="" />}
          <div className="text-on-image">
            <p>Skontaktuj się z nami</p>
          </div>
        </div>
        <form className="contact-form flexItem" onSubmit={this.sendEmail}>
          {/* <label>Name</label> */}
          <h3>Formularz kontaktowy</h3>
          <div className='row'>
            <input type="text" name="user_name"
              placeholder="Imię"
              value={user_name}
              onChange={(e) => this.handleChange("user_name", e.target.value)} />
            <div className="isOK " style={user_nameStyle}>
              {nameIsOkay ? <FontAwesomeIcon icon={faCheck} size="2x" /> :
                <FontAwesomeIcon icon={faTimes} size="2x" />}
            </div>
          </div>
          {/* <label>Email</label> */}
          <div className='row'>
            <input type="text" name="user_email"
              placeholder="Email"
              value={email}
              onChange={(e) => this.handleChange("email", e.target.value)} />
            <div className="isOK" style={emailStyle}>
              {emailIsOkay ? <FontAwesomeIcon icon={faCheck} size="2x" /> :
                <FontAwesomeIcon icon={faTimes} size="2x" />}
            </div>
          </div>
          {/* <label>Message</label> */}
          <div className='row' >
            <textarea name="message"
              rows="6"
              placeholder="Wiadomość"
              value={msg}
              onChange={(e) => this.handleChange("msg", e.target.value)} />
            <div className="isOK" style={msgStyle}>
              {msgIsOkay ? <FontAwesomeIcon icon={faCheck} size="2x" /> :
                <FontAwesomeIcon icon={faTimes} size="2x" />}
            </div>
          </div>
          <div className='row' >
            <input className="button" type="submit" value="Wyślij" />
            <div className="loader" style={!LoaderON ? { display: 'none' } : { display: 'block' }}></div>
          </div>
          <div className='row' >
            <p className="error" style={msgSuccessful ? { color: 'green' } : { color: '#f23333' }}>{error}</p>
          </div>
          <input type="hidden" value={width} name="width" />
        </form>
        <div className="contact-info flexItem">
          <div className="info">
            <h3>Dane kontaktowe</h3>
            <p><FontAwesomeIcon className="icon" icon={faMapMarkerAlt} /> Wrocław</p>
            <p><FontAwesomeIcon className="icon" icon={faPhone} /> +48 123 321 231</p>
            <p><FontAwesomeIcon className="icon" icon={faEnvelope} /> mb.arch@vp.pl</p>
          </div>
          <div className="social-media">
            <div className="fb" onClick={() => { window.open(fbURL, '_blank') }}>
              <img src={fb} alt="" />
            </div>
            <div className="hb" onClick={() => { window.open(hbURL, '_blank') }}>
              <img src={hb} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Kontakt;
