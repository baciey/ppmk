import React, { useEffect } from 'react'


const PolitykaPrywatnosci = (props) => {
  useEffect(() => {
    document.title = "PPMK - Polityka prywatności"
  })
  return (
    <div className="polityka-prywatnosci-container" >
      <div className="top-background"></div>
      <h1>  Polityka prywatności </h1>
      <div>
        <h3>  § 1 Zasady ogólne </h3>
Niniejsza Polityka Prywatności określa zasady gromadzenia, przetwarzania i wykorzystywania danych osobowych pozyskanych przez stronę internetową {props.contactInfo.web} (zwaną dalej: „Stroną Internetową”).
Korzystanie ze Strony Internetowej nie wymaga podania danych osobowych, chyba, że Użytkownik zamierza wysłać wiadomość przez formularz kontaktowy.
Podanie danych osobowych przez Użytkownika jest zawsze jego dobrowolną decyzją. Jednakże brak zgody na przetwarzanie danych osobowych może uniemożliwić świadczenie usług drogą elektroniczną.
Administratorem danych osobowych przekazanych przez Użytkowników jest {props.contactInfo.name}.
Administrator zabezpiecza dane osobowe przed ich udostępnieniem osobom nieuprawnionym, utratą, zmianą, uszkodzeniem lub zniszczeniem, a także przetwarza powierzone mu dane w oparciu o przepisy prawa. Podstawą przetwarzania danych osobowych jest artykuł 6 ust. 1 lit. b Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych (RODO).
Podczas korzystania ze Strony Internetowej mogą być pobierane dodatkowe informacje: rodzaj przeglądarki, szerokość okna przeglądarki, czas spędzony na stronie,  typ systemu operacyjnego.
</div>
      <div>

        <h3> § 2 Zasady przetwarzania danych osobowych</h3>
Dane osobowe przetwarzane są na podstawie zgody udzielanej przez Użytkownika strony w przypadku skorzystania z formularza kontaktowego na Stronie Internetowej.
Dane osobowe, o których mowa w § 2, to:
imię, adres poczty elektronicznej (e-mail) oraz wszystkie inne dane podane w treści formularza.
Dane osobowe, przekazane przez Użytkownika przetwarzane będą w zakresie realizacji usług świadczonych drogą elektroniczną za pośrednictwem Strony Internetowej oraz odpowiedzi na zapytanie w formularzu kontaktowym.
Użytkownikowi przysługuje prawo dostępu, kontroli i weryfikacji przetwarzanych danych, które go dotyczą oraz uzyskania informacji o celu, zakresie i sposobie przetwarzania danych zawartych w zbiorze i żądania uzupełnienia, uaktualnienia, sprostowania danych osobowych, czasowego lub stałego wstrzymania ich przetwarzania, usunięcia danych, żądania zaprzestania przetwarzania danych osobowych na podstawie art. 32 ust. 1 pkt 7 ustawy o ochronie danych osobowych, czy też wniesienia sprzeciwu zgodnie z art. 32 ust. 1 pkt 8 ustawy o ochronie danych osobowych.
Wszelkie żądania czy też prośby wynikające z uprawnień Użytkownika opisanych w § 2 ust. 5 należy kierować na adres {props.contactInfo.email}.
</div>
      <div>

        <h3> § 3 Podstawowe obowiązki Administratora danych</h3>
Administrator danych osobowych, dokłada szczególnej staranności w procesie przetwarzania danych, celem zapewnienia ochrony interesów Użytkowników.
Zapewnia aby dane osobowe były:
przetwarzane zgodnie z prawem,
zbierane jedynie dla oznaczonych celów, zgodnych z prawem,
niepoddawane dalszemu przetwarzaniu, które byłoby niezgodne z prawem,
adekwatne i wystarczające do celów przetwarzania,
przechowywane jedynie w niezbędnym okresie tj. do osiągnięcia celu przetwarzania,
przechowywane z zastosowaniem najwyższych standardów bezpieczeństwa,
przechowywane w postaci, która umożliwia identyfikację osób, których dotyczą.
Dane osobowe są przechowywane w zbiorze danych, który został zabezpieczony środkami technicznymi i organizacyjnymi, które zapewniają ochronę przetwarzania danych. Dostęp do zbioru danych osobowych mają jedynie osoby, posiadające upoważnienia nadane przez administratora danych osobowych.
</div>
      <div>

        <h3> § 4 Cookies </h3>

Strona Internetowa używa niewielkich plików zwanych “cookies” - tzw. ciasteczka. Zapisywane są one przez {props.contactInfo.name} za pośrednictwem Strony Internetowej na komputerze osoby odwiedzającej Stronę Internetową, jeżeli przeglądarka internetowa na to pozwala.
Mechanizm cookies jest bezpieczny dla komputerów Użytkowników Strony Internetowej. W szczególności tą drogą nie jest możliwe przedostanie się do komputerów Użytkowników wirusów lub innego niechcianego oprogramowania lub oprogramowania złośliwego. Niemniej w swoich przeglądarkach Użytkownicy mają możliwość ograniczenia lub wyłączenia dostępu plików cookies do komputerów.
    </div>
    </div>
  );
}

export default PolitykaPrywatnosci;