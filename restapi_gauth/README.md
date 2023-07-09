# Tehtävä 7. Google-autentikaatio eli "sosiaalinen login"

Kerro lyhyesti miten toteuttaisit sosiaalisen Google-loginin full-stack -sovellukseen, niin että kirjautuminen tapahtuu Angular-sovelluksesta ja tietyt REST API -reitit ja Angular-sovelluksen SPA-näkymät on suojattu. Tätä toiminnallisuutta ei tarvitse tässä tehtävässä toteuttaa käytännössä, mutta olisi hyvä jos osaisit kertoa kuinka lähtisit toteuttamaan sitä. Voit katsoa mallia kurssin esimerkeistä.

Aluksi kehittäjä rekisteröityy palveluntarjoajan pilvialustalle tai kehittäjäsivulle (esim. google tai facebook) ja luo sinne
tiedot sovellukselta, jossa sosiaalista loginia käytetään. Kun frontend sovelluksella kirjaudutaan sisään, lähettää sovelluksessa login tapahtuman määrittelevä komponentti login tiedot palveluntarjoajan applikaatioon, joka puolestaan lähettää frontendille käyttäjätiedot ja id tokenin, jos kirjautuminen onnistui. Frontend sovellus lähettää id tokenin backendiin ja backend tunnistaa käyttäjän palveluntarjoajan kautta, josta käyttäjä lisätään backendiin. Backendissa käyttäjätiedoista luodaan jwt-token, joka lähetetään frontendin selaimen session storageen. Tokenia käytetään pääsyyn SPA-käyttöliittymään.
