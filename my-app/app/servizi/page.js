import CardFeatured from "@/components/cardfeatured";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import Titolo from "@/components/titolo";


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
        sopratitolo="CENTRO DIURNO ANCHISE"
        sottotitolo1="Il centro diurno è un servizio territoriale di tipo semi-residenziale rivolto prevalentemente ad anziani con vario grado di non autosufficienza, con prevalente disturbo cognitivo.
Gli obiettivi del servizio sono:
Sostegno e sollievo ai familiari e alla rete sociale di supporto
Contrastare fenomeni di isolamento e solitudine
Potenziale mantenere e compensare abilità e competenze relative alla sfera dell autonomia, dell’identità e dell’orientamento spazio-temporale, delle relazioni interpersonali e della socializzazione
Potenziale la rete di servizi per le persone anziane, proponendo interventi personalizzati, con progetti specifici rispondenti ai bisogni dei singoli.
Le attività del servizio sono:
Assistenza tutelare diurna
Igiene e cura della persona, con stimolazione delle capacità residue
Somministrazione di colazione, pranzo e merenda con aiuto nell’alimentazione
Attività ricreative, culturali, occupazionali, per il mantenimento delle capacità espressive e relazionali, compatibilmente con le condizioni psico-fisiche
Attività terapeutico riabilitativa-fisioterapica
Supporto psicologico e sociale sia agli utenti che ai familiari
Assistenza sanitaria
Le figure professionali:
Coordinatore responsabile
Infermiere professionale
Operatore socio-sanitario
Assistente sociale
Educatore professionale
Fisioterapista
Psicologo"
       titolo="CENTRO ANZIANI COLORA IL TUO TEMPO"
       Testo="Il centro anziani è un luogo di incontro rivolto alla popolazione anziana autosufficiente del territorio sandonatese che ha come scopo il contrasto di fenomeni di isolamento e solitudine, portando momenti di stimolo, di benessere e serenità per una maggiore integrazione sociale.
              Il servizio viene svolto grazie da una collaborazione con le associazioni di volontariato presenti nel territorio e con l’Amministrazione Comunale che mette a disposizione gli spazi siti in Viale Libertà n. 10."
              titolo1="SERVIZIO DI ASSISTENZA DOMICILIARE S.A.D."
              Testo1="Il servizio di Assistenza Domiciliare è un servizio sociale territoriale rivolto ai singoli o a nuclei familiari in difficoltà che, per specifiche esigenze di ordine socio-assistenziali permanenti o temporanee, hanno necessità di aiuto a domicilio, sostegno e collaborazione per attività relative alla cura della persona, al governo della casa, alla vita di relazione e al superamento di difficoltà organizzative familiari.
Obiettivi:
Mantenimento, inserimento e reinserimento delle persone in stato di bisogno nell’ambiente familiare e sociale di appartenenza
Promozione e recupero delle capacità di autonomia delle persone attraverso le risorse personali, familiari, amicali e di vicinato presenti nel territorio
Contrasto dei processi di emarginazione sociale, isolamento e solitudine
Attraverso il SAD, inoltre, si intende:
Favorire la creazione di legami significativi e relazioni sociali e supportare la rete sociale esistente attraverso la programmazione di un insieme di servizi e prestazioni a tutela della persona fragile
Promuovere una comunità sempre più responsabile verso le persone e le situazioni familiari più fragili
Sviluppare servizi e interventi avviati in tema di promozione della domiciliarità e del lavoro di comunità
L’IPAB collabora con il servizio sociale dell’Amministrazione Comunale nell’erogazione di questo servizio per il mantenere il più a lungo possibile l’anziano nel suo “mondo” di appartenenza, evitandone l’istituzionalizzazione prima del tempo necessario."
              titolo2="SPORTELLO ASSISTENTI FAMILIARI"
              Testo2="In un contesto storico caratterizzato da un generale miglioramento delle condizioni di vita e da una maggiore disponibilità di risorse medico-sanitarie, si è registrato un aumento costante della fascia di popolazione over 65. L’innalzamento dell’aspettativa di vita però non corrisponde sempre ad un miglioramento anche della sua qualità, infatti sono sempre più frequenti i casi in cui l’insorgenza di malattie dementigene e di condizioni degenerative ostacolino l’autonomia dell’anziano. Emerge pertanto, come le necessità assistenziali verso gli over 65 siano più consistenti rispetto al passato e che quindi vi sia un’evoluzione dell’offerta dei servizi socio-sanitari e di supporto alle famiglie, evitando il più possibile l’istituzionalizzazione dell’anziano.
Nasce così l’esigenza di offrire nuovi servizi alla popolazione, e le politiche sociali presentano buoni margini di implementazione.
Lo sportello, attraverso la figura dell’assistente sociale, consente una visione d’insieme di tutti i percorsi di sostegno alla fragilità, nonché una forte capacità di connessione con gli altri servizi del territorio; infatti lo Sportello è in grado di fornire con competenza, tutte le informazioni necessarie per accedere alla rete dei servizi a favore delle persone non autosufficienti, mirando al superamento della gestione informale del mercato dell’assistenza familiare finora governato per lo più da associazione di matrice religiosa o da altri soggetti. Lo sportello si configura anche come punto di riferimento per la cultura della legalità del lavoro domestico, a tutela sia del lavoratore che della persona non autosufficiente.
Il progetto ha avuto avvio a seguito di un incarico da parte della Conferenza dei Sindaci al Comune di San Donà di Piave quale ente proponente capofila per la continuazione fino al 31.12.2024 con la collaborazione di IPAB."
              titolo3="PUNTO PRELIEVI PASSARELLA SERVIZIO INFERMIERISTICO"
              Testo3="A seguito dell’esigenza di dislocare un “Punto Prelievi” nella Frazione di Passarella (lontana da tutti i servizi) permettendo alla popolazione fragile e anziana residente di accedere ad un servizio sanitario comune, in collaborazione con l’Amministrazione Comunale e con le associazioni di volontariato del territorio, IPAB fornisce una figura professionale di Infermiere per l’espletamento della pratica sanitaria del servizio."
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
