import CardFeatured from "@/components/cardfeatured";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import Privacy from "@/components/privacy";


export default function Home() {
  const professionalEmail = "REGIONE VENETO";
  const logoSrc = "https://www.cdrmonumento.com/ae2131/images/SFONDO%20BIANCO%20PICCOLO.jpg";
    
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
      <Hero
        titolo="SUEGUI IL FEED"
        sottotitolo="TUTTI I CONTENUTI"
        immagine="https://www.veneziatoday.it/~media/horizontal-hi/4262029922438/schermata-2022-03-06-alle-10-10-15-2.jpg"
      />
      <Privacy
        titolo="PRESENTAZIONE"
        descrizione="Qualche breve cenno alla Storia dell’IPAB “MONUMENTO AI CADUTI IN GUERRA. Dopo l’annessione del Veneto all’Italia, l’Amministrazione comunale di San Donà ebbe un diverso assetto, rispetto a quello avuto sino ad ora: organo principe divenne il Consiglio comunale, il Sindaco era di nomina regia, ma scelto tra i consiglieri ed affiancato da una Giunta di Assessori eletti dal Consiglio comunale tra i propri membri. A livello nazionale nel 1882 si ammettono all’elettorato politico tutti i cittadini maggiorenni che superino l’esame del corso scolastico obbligatorio oppure paghino un censo di 19,80 lire. Subito dopo nel 1915 diviene elettore amministrativo di un comune chi è cittadino italiano, ha compiuto 21 anni, ha la residenza nel comune ovvero paga nel comune un censo, e contro il quale non siano insorte cause di esclusione per incapacità o indegnità."
        policy="CONTINUA A LEGGERE..."
        accettatutto="AMMINISTRAZIONE"
        accettanecessari="CONTATTI"
        preferenze="ALBO PRETORIO"
        cookie="PAGOPA"
        
      />
      <Footer 
      immagine = "https://www.cdrmonumento.com/ae2131/images/SFONDO%20BIANCO%20PICCOLO.jpg"
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


