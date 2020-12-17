import React, { useEffect } from 'react'
import FancyButton from './FancyButton'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ArrowDown from './ArrowDown'



// const bg = 'https://i.postimg.cc/5by8T5ZG/120674372-372783977093864-3573197447115165707-n.jpg'

const Home = (props) => {
  const { width } = props


  // const [url, setUrl] = useState(bg);
  // const [change, changeUrl] = useState('url');
  // const [opacity, changeOpacity] = useState(true);
  useEffect(() => {
    document.title = "PPMK - Home"
  })




  return (
    <>
      <div className="background-img">
        {/* <img src={url} alt="" style={opacity ? { filter: "brightness(0.5)" } : { filter: "brightness(1)" }} /> */}
        {/* <img src={props.bg[0]} alt=""/> */}
        {<img src={width < 1024 ? props.bg[8] : props.bg[0]} alt="" />}
        <div className="text-on-image">
          <p>Z pasji do projektowania..</p>
        </div>
      </div>
      <div className="home-container" >
        {width < 600 ? null : <ArrowDown />}
        <h1 >Pracownia Projektowa Małgorzata Baczyńska</h1>
        <div className="info-text" > Home
        Witamy w Houselab Projektowanie Wnętrz Wrocław, pracowni projektowej działającej we Wrocławiu i Warszawie, kreującej unikalne wnętrza. Przewiń w dół, aby uzyskać dostęp do treści strony, lub wybierz interesującą Cię pozycję z górnego menu.
      </div>
        <div className="large-text" >
          „DO PROJEKTOWANIA PODCHODZIMY POWAŻNIE I Z PASJĄ, JEDNOCZEŚNIE CHCĄC SIĘ NIM BAWIĆ.”
      </div>
        <div className="long-text">
          <h3>Houselab – Projektowanie Wnętrz Warszawa / Wrocław</h3>
Houselab to młoda i ambitna pracownia zajmująca się projektowaniem wnętrz. Tworzymy projekty, które cieszą swoim wyglądem i funkcjonalnością. Wiemy, że dobrze zaprojektowane wnętrze poprawia jakość życia i wyzwala dużo kreatywności dzięki obcowaniu z dobrym designem. Obszar naszego działania to Warszawa i Wrocław. Istnieje również możliwość podjęcia zdalnej współpracy na obszarze całej Polski.
      </div>
        <div className="long-text">
          <h3>HOUSELAB I DOM</h3>Jesteśmy po to, aby pomagać w spełnianiu marzeń. Wyposażanie mieszkania czy domu jest zawsze ekscytujące, jednak bez projektu ostateczny efekt pozostaje niewiadomą do końca, a ekipa remontowa działa po omacku, nie mając dokładnych wytycznych. Współpraca z biurem projektowym pomaga Ci zaoszczędzić nerwów, wątpliwości i pieniędzy na poprawki. Otrzymujesz pomoc w wykreowaniu projektu, wizualizacje dzięki którym dokładnie ocenisz efekt końcowy jeszcze przed rozpoczęciem prac i pełną dokumentację, dzięki której ekipa wie co ma robić, a Ty masz możliwość rozliczenia jej z wykonanych prac. Prowadzimy też nadzór na budowie i organizujemy całą logistykę zakupów i montażu wyposażenia. Zapraszamy do kontaktu – Houselab Projektowanie Wnętrz Wrocław</div>
        <div className="long-text">
          <h3>HOUSELAB I BIZNES</h3>Branding jest w biznesie jedną z najważniejszych kwestii. Dobrze zaprojektowany logotyp, strona www, siedziba czy punkty sprzedaży – to rzeczy. które potrafią mocno podnieść prestiż i przychody. Houselab Projektowanie Wnętrz Wrocław może Ci w tym pomóc, tworząc efektowne i funkcjonalne wnętrza w Twojej firmie. Projektujemy każdy rodzaj wnętrz, specjalizując się w powierzchniach office i retail.</div>
        <div className="long-text">
          <h3>POZA WNĘTRZAMI – KREATOR CV BE-RISING</h3>Poza projektowaniem wnętrz pomagamy również w rozwoju osobistym prowadząc Kreator CV Be-Rising, który pozwala na szybkie stworzenie efektownie wyglądającego CV przy pomocy jednego z kilku starannie zaprojektowanych szablonów.</div>
        <div className="large-text">
          „PROJEKT POWINIEN BYĆ PROSTY, A ZARAZEM WYRAŻAĆ DUCHA EKSPRESJI.”
      </div>
        <div className="items-in-row">
          <div className="item">
            <p>Funkcjonalność</p>
            <span>To najważniesza rzecz w projektowaniu. Zawsze jako pierwszy opracowujemy projekt funkcjonalny dopracowany do najmniejszego szczegółu tak, aby wszystko było na swoim miejscu.</span>
          </div>
          <div className="item">
            <p>Inwencja</p>
            <span>Doświadczenie sprawia, że trudności stają się zadaniem do rozwiązania, nie problemem. Podejmujemy się najtrudniejszych wyzwań, nie boimy się żadnych zleceń. Nie istnieje dla nas słowo „czy”, jest tylko „jak”.</span>
          </div>
          <div className="item">
            <p>Przejrzysty cennik</p>
            <span>Masz pewność, że nie zaskoczy Cię rachunek. Przygotowaliśmy do wyboru 4 podstawowe plany, o ewentualnych, dodatkowych kosztach informujemy w jasny sposób.</span>
          </div>
        </div>
        <div className="portfolio" >
          <h3>Portfolio</h3>
        Kliknij, aby przejść do portfolio.
        <FancyButton
            path={'./portfolio'}
            content={"Wejdź"}>
          </FancyButton>
        </div>
      </div>
    </>
  );
}

export default Home;