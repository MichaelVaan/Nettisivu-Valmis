InvestHub

Projektin kuvaus:
InvestHub on selaimella käytettävä, responsiivinen web-sovellus, joka tarjoaa käyttäjälleen erilaisia sijoittamiseen liittyviä työkaluja ja resursseja. Sivustolta löytyy mm. maailman kellonaikoja näyttävät kellot, kryptovaluuttojen reaaliaikainen hinta avoimesta rajapinnasta, valuuttamuunnin, laskin sekä mahdollisuus tallentaa omia sijoituskohteita localStorageen. Lisäksi sivustolla on useita sivuja, kuten Portfolio, Market News, Resources, Contact ja Sign In, sekä "Start Investing" -ohjesivu. Käyttäjä voi navigoida sivujen välillä ylävalikon avulla.

Ominaisuudet:
Monisivurakenne ja navigaatio:
Sivustolla on useita sivuja (Home, Portfolio, Market News, Resources, Contact, Sign In ja Start Investing), joilla käyttäjä voi liikkua ylävalikon kautta.

Responsiivisuus:
Toteutettu Bootstrapilla, joten sovellus skaalautuu eri näyttöille.

Ulkoasu:
Sijoitusaiheinen teema, tumma värimaailma, vihreä tehosteväri. Taustakuva ja animaatiot (WOW.js + Animate.css) tuovat sivustolle visuaalista näyttävyyttä.

JavaScript-toiminnallisuus:

Laskin
Kellot (UTC, New York, Lontoo, Tokio)
Kryptovaluuttaticker avoimesta CoinGecko API:sta
Valuutanmuunnin sampleRates-datan avulla
Portfolio-toiminto, joka tallentaa dataa localStorageen
WOW-efektit ja Animate.css-animaatiot tuovat interaktiivisuutta ja elävyyttä.
Avoimen datan käyttö:
CoinGecko API kryptovaluuttahinnoille.

Käyttöohjeet:
Kloonaa repositorio:
git clone <repositorio-osoite>

Projektin käynnistäminen:
Avaa index.html paikallisesti selaimessa (esim. kaksoisklikkaa tiedostoa tai käytä paikallista palvelinta.

API-avaimet:
CoinGecko API ei vaadi erillistä API-avainta.

LocalStorage:
Portfolio-sivulla tallennettavat sijoituskohteet säilyvät selaimesi localStoragessa. Tietojen poisto onnistuu painamalla "Remove"-painiketta valitun kohteen kohdalla, tai tyhjentämällä selaimen localStorage.