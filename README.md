# Passieproject: portfoliowebsite 3.0

## **Introductie**
Met Portfoliowebsite 3.0 heb ik als doel gesteld een website te maken waarmee ik mij richt op de internetbureaus waar ik terecht wil komen. In mijn onderzoek heb ik een stijlrichting en ontwerp gebaseerd op onderzoek. Hierin heb ik merkwaardes vastgesteld op basis van mijn kennis over de doelgroep. Dit heb vergaard door veel websites in de branche onder de loep te nemen en hier een observatie op te maken. 

De richting die hieruit gekomen is, laat zich duiden als modern webdesign met een flinke retro knipoog. Het neemt inspiratie uit popcultuur. De tone of voice van het design en de taal zijn geïnspireerd op de vrij stevig aangezette en hippe communicatie van de internetbureaus waar het zich op richt. 

In de bouw van mijn website zet die inspiratie zich verder. Ik heb op basis van mijn observaties veel gebruikgemaakt van microanimaties. Mijn focus lag op resultaat en verfijning. Om die reden heb ik gekozen voor Tailwind CSS en GSAP gekozen. Tailwind CSS is een efficiënnt, low-level framework dat past bij een uniek design.

GSAP is een krachtige, lichte animatie library die door grote partijen wordt gebruikt. Ik heb het gebruikt voor grote en kleine animaties.

In dit document probeer ik zo goed mogelijk inzicht te geven in de werking van 

## **PPMMaasDefinitief**
Hier tref je de definitieve versie van mijn project op moment van inleveren. 

INDEX
Voor de exacte waardes van de Tailwind classes, verwijs ik naar https://tailwindcss.com/docs . Met commentaar in het bestand heb ik de elementen gemarkeerd. 


STYLES
In dit document tref je alle CSS classes die ik zelf heb aangemaakt. De belangrijkste zijn:
* Large/small button: doormiddel van 3D CSS waardes en de transition functies, heb ik met een reeks DIVs de knoppen gemaakt voor de website
* Spotifybalon: een 'hidden' div die 'vissible' wordt bij hover. Dient als easter egg bij de draaiende LP
* kroon-IMG: door gebruik van het :after-element blijft de kroon boven KONING staan in de intro van de website
* animlijn/navlijn etc.: zorgen voor de geanimeerde lijnen onder knoppen en linkjes op de website
*meerLinkje: een fix voor de buttons: hierdoor krijgt de gebruiker de juiste cursor te zien op de knop
*button/socialButton etc.: een eerdere versie van de knoppen die gebruik maken van :before, :after, skew en transition om de ilusie van een 3D-knop te simmuleren.

IMGS
Alle afbeeldingen die gebruikt zijn voor de website.

FONTS
Ik heb een externe font geïmporteerd in Tailwind. Hier tref je de bestanden.

SCRIPT
Een script dat zorgt voor animatie naar de juiste positie via JS. 
*smoothScroll: vraagt door CSS waarde top, de windowpositie en de vertreken tijd de waardes op die nodig zijn voor animation
*animation: krijgt door de waardes uit Smoothscroll de juiste positie van de CSS-class
*over/portfoio etc.: roepen smoothscroll aan om naar het div met deze naam te gaan.
*toggleMenu: een fix om de box te checken die het hamburgermenu te openen.

ANIMATION
Voor meer info, verwijs ik naar de documentatie van GSAP: https://greensock.com/gsap/
De belangrijkste timelines/classes zijn:
*boxTL/masterTL: handelen samen de typeanimatie af
*scrollTrigger: bepaalt de acties van de scrolltriggers. Fix voor de bug waar objecten na animatie verdewenen
*spin: beweegt de LP
*aangenaam/slagzin: bewegen divs over de X-as
*boxJS/boxVK/boxFE: timelines die in combinatie met CSS-waarde overflow hidden voor de titelanimaties
*tlBalken: zorgen voor de balkenanimatie. het is een div die over de X-as van achter een ander div tevoorschijn komt. De progressie van de animatie wordt als waarde gebruikt om als percentage in de balk te dienen.
*window.onmousemove: laat de afbeelding uit Spotifylink(een CSS class die on hover een afbeelding toont) doet meebwegen met de cursor

## **PPMMaasPOC-tests**
Diende als testomegeving voor verschillende onderdelen van de website. Hetgeen dat uit deze fase is voortgekomen, leg ik uit in PPMMaasDefinitief. Ik omschrijf kort wat ik waarmee getest heb:
*hamburger/hamburger.js: twee manieren om een hamburgermenu te maken. 
*landingpagemaster: een voorbeeld van een Tailwind website waar ik inspiratie haalde uit de manier waarop het responsive is gemaakt.
*ButtonImp/vierkant: tests van knoppen. Een soortgelijke button tref je nog aan in de uiteindelijke versie, maar is buiten gebruik
*cubus: diende als test voor de uiteindelijke knop. Maakt gebruik van de CSS 3D-waardes
*GSAPtest: tests met GSAP
*progressiebars: tests voor de animaties van de balken die je treft onder 'De Specs' op de website
*TestHover: een test voor de easter egg die treft bij de draainde LP op de website


## **PPMMaasTestomgeving**
Voor implementatie in de website, teste ik in deze kopie van de website of het werkte in combinatie met het geheel.

## **PPMMaasTestomgeving**
Een P. O. C van een gefixeerde navigatiebalk. Is in andere opzichten identiek aan de website.

