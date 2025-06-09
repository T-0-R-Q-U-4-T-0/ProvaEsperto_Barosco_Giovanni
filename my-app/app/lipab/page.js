import CardFeatured from "@/components/cardfeatured";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import Privacy from "@/components/privacy";
import Titolo from "@/components/titolo";
import Cardescursione from "@/components/cardescursione";
import Cardescursione2 from "@/components/cardescursione2";
import Card from "@/components/card";

export default function Home() {
  const professionalEmail = "REGIONE VENETO";
  const logoSrc =
    "https://www.cdrmonumento.com/ae2131/images/SFONDO%20BIANCO%20PICCOLO.jpg";

  const menuItems = [
    { name: "HOMEPAGE", href: "homepage" },
    { name: "SERVIZI", href: "servizi" },
    { name: "PERCHE' L'IPAB", href: "lipab" },
    { name: "I.P.A.B INFORMA", href: "#" },
    { name: "ACCESSI RISERVATI", href: "#" },
    { name: "EXTRANET", href: "#" },
    { name: "PRIVACY", href: "#" },
  ];

  return (
    <div>
      <Navbar
        professionalEmail={professionalEmail}
        logoSrc={logoSrc}
        menuItems={menuItems}
      />
      <Titolo
        sopratitolo="VISION E MISSION"
        sottotitolo1="LA NASCITA DELL’IPAB
La Casa di Riposo Monumento ai Caduti in Guerra è stata istituita nel 1925 ed eretta come Ente Morale con autonoma amministrazione sulla base del Regio Decreto del 29 Ottobre 1936.
L’ente è un I.P.A.B. (Istituzione Pubblica di Assistenza e Beneficienza) disciplinata dalla Legge Crispi del 1890 e dal D.Lgs 4/5/01 m. 207 ed ha quindi natura giuridica pubblica.
Tra i gestori dell’amministrazione Comunale del dopoguerra, si formò un comitato pro “Monumento ai Caduti in Guerra 1915-1918” per erigere un monumento dove poter piangere i propri morti, essendo loro stessi appartenuti ad un territorio coinvolto nel conflitto, e per i quali la realizzazione del monumento aveva profonda importanza.
A seguito della legge del 1917 che prevedeva e favoriva la nascita di organizzazioni con finalità di assistenza alle famiglie di caduti in guerra, nasce a San Donà “L’associazione tra le madri e vedove dei Caduti”, la quale contribuisce a divulgare la volontà della costruzione di un Monumento.
Solo però nel 1925, durante un consiglio di Giunta Comunale, venne proposta l’idea della casa di ricovero, nella quale riunire tutte quelle istituzioni come l’asilo, l’orfanotrofio, la casa di riposo, … ecc. L’idea venne votata all’unanimità decidendo così che il “Monumento ai Caduti” sarebbe stata una casa di ricovero.
San Donà divenne l’unico paese ad erigere un monumento dedicato ai caduti con insita un’opera residenziale per gli anziani e gli invalidi di guerra.
Il monumento verrà inaugurato nel 1930, ma l’operatività partirà a regime nel 1932 e verrà riconosciuta ufficialmente il 29 ottobre del 1936 con Regio Decreto emanato da Re Vittorio Emanuele e da Mussolini, inserito in Gazzetta Ufficiale il 7 dicembre 1936.
La casa di riposo che oggi è Ente Pubblico, si formò con fondi di beneficienza provenienti da privati ed, inizialmente, per il suo funzionamento venne gestita sempre con parte di fondi privati. Molti sono i soggetti che con il volontariato hanno portato avanti il funzionamento della struttura, testimonianza che il monumento è nato dalla volontà dei cittadini sandonatesi.

COS’E’ OGGI L’IPAB
L’IPAB di oggi è un Centro Servizi con obiettivo fondamentale quello del raggiungimento ed il mantenimento del miglior livello possibile della qualità di vita degli utenti, valorizzando ogni risorsa psico-fisica e ogni potenzialità residua, al fine di favorire l’autonomia, le relazioni familiari e sociali, per tramite anche della fattiva collaborazione delle associazioni di volontariato del nostro territorio."
      />
      <Footer
        immagine="https://www.cdrmonumento.com/ae2131/images/SFONDO%20BIANCO%20PICCOLO.jpg"
        luogo="Dove"
        gruppi="Contatti gruppi"
        individuali="Contatti individuali"
        follow="Follow us"
        footer1="San Donà di Piave S.r.l. - P.Iva: IT03515100273 - Rea VE - 315238 Privacy e Cookie policy"
        footer2="Design e Develop by Mediacy Web Agency Venezia"
        luogo1="Via Galileo Galilei"
        luogo2="Treporti - Venezia"
        tel1="Tel: +39 041 530 23 63"
        fax="Fax: +39 041 530 40 16"
        email1="E-Mail: info@monumentoaicaduti.it"
        tel2="Tel: +39 041 315 63 02"
        email2="E-Mail: api@casadiriposo.it"
      />
    </div>
  );
}
