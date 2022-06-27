


Aplikacija rezervuoti bibliotekoje esančias knygas


Kuriant buvo panaudoti šie įrankiai ir technologijos:

* Windows kompiuteris su Windows 10 operacine sistema.
* Naršyklė Google Chrome.
* React@18.2.0
* Mongo DB virtuali duomenų bazė.
* Visual Studio Code su keletu priedų, kaip Better Comments, Prettier, Tabnine, Live-server, Monokai Pro ir įprasta Default Dark spalvų tema.




1. Registracijos/Prisijungimo puslapis

Įsijungus aplikaciją vartotojui duoti du pasirinkimai:
	a) Užregistruoti naują vartotoją;
	b) Prisijungti su jau turimu vartotoju.

Paspaudus kurį nors mygtuką vartotojas perkeliamas atitinkamą puslapį, kuriame gali atlikti tolimesnius veiksmus:

1.1. Registracija

Registracijos puslapyje asmuo gali užregistruoti vartotoją tolimesniam darbui, nurodant:
	Vartotojo vardą;
	Vartotojo elektroninį paštą;
	Vartotojo slaptažodį.

Registracija forma turi šias validacijas:
	Vartotojo vardas turi būti nuo 3 iki 40 simbolių ir negali turėti specialių simbolių;
	Vartotojo elektroninis paštas turi buti nuo 3 iki 40 simboliu ir turi būti tinkamo el. pašto formato;
	Vartotojo slaptažodis turi turėti nors vieną didžiąją raidę ir būti iki 40 simbolių.

*Slaptažodis gali būti matomas paspaudus akies ikoną.



1.2. Prisijungimas

Prisijungimo puslapyje vartotojas, norėdamas prisijungti turėtų įvesti galiojantį elektroninio pašto adresą ir slaptažodį.

*Norėdamas ateičiai išsaugoti įvestus duomenis vartotojas gali paspausti “Prisiminti mane” laukeli.

Vartotojui įvedus teisingus duomenis ir paspaudus mygtuką “Prisijungti”, jis yra perkeliamas į namų puslapį.

Neteisingai įvedus duomenis, vartotojui pranešimu nurodoma, jog duomenys buvo neteisingi. Pranešime paspaudęs mygtuką “Gerai”, vartotojas grąžinamas į prisijungimo formą, kur gali pakartotinai įvesti duomenis.

Vartotojui persigalvojus, galima paspausti mygtuką “Registruotis” kuriuo jis perkeliamas į registracijos puslapį.







# terminale pasirenkame susikurtą frontendo direktoriją:
cd ../biblioteka/front

# vykdome šias komandas sudiegti ir paleisti sudiegtiems ir sukurtiems elementams Visual Studio Code terminale:
npm install
npm start

# Programos puslapis turėtų atsidaryti nustatytos naršyklės (Chrome, Edge, Firefox) lange adresu:
http://localhost:3000

Linkime sklandaus ir patogaus naudojimosi!

Kūrėja:  Danguolė Boleišienė