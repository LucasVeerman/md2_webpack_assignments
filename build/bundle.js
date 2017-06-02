/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

        /**

         * Opdracht 1: primitives
         * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
         *
         * 5 variabelen met daarin een string
         * 5 variabelen met daarin een number
         * 5 variabelen met daarin een boolean
         *
         * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
         * van Media Development producten (apps, sites, etc.)
         * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
         */
        const school = "Mediacollege";    //string 1
        const city = "Amsterdam";         //string 2
        const country = "Netherlands";    //string 3
        const adress = "Contactweg";      //string 4
        const street_nr = 36;             //number 1
        const category = "MBO";           //string 5
        let nr_students = 2500;         //number 2
        let nr_educations = 15;         //number 3
        let nr_employees = 55;          //number 4
        const year_of_founding = 1918;    //number 5
        const MBO = true;                 //boolean 1
        let Mediadevelopment = true;    //boolean 2
        let Gamedevelopment = true;     //boolean 3
        let Utrecht = false;            //boolean 4
        let Highschool = false;         //boolean 5
        /**
         * Opdracht 2: Arrays
         * Bedenk 3 arrays en vul ze met primitives
         * console.log de lengte van de arrays
         *
         * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
         */
        let educations = [Mediadevelopment, Gamedevelopment];
        let teathers = ["Berend", "Hugo", "Ingrid", "Hjalmar", "Theo", "Ed"];
        let locations = ["Contactweg", "Dintelstraat", "Factory"];


        console.log ("De array Locations heeft " + locations.length + " objecten");
        /**
         * Opdracht 3: Arrays push
         * Maak een lege array aan
         * push er een string in
         */
        let array = [];
        array.push("Henk");

        /**
         * Opdracht 4: Array splice
         * Maak een array aan en vul hem met namen
         * Gooi de naam op de 1e plek weg
         * Gooi de naam op de 3e plek weg
         */

        array.push("Joost");
        array.push("Tom");
        array.push("Sjaak");
        array.push("Sylvana");
        array.push("Geert");
        console.log(array);
        delete array[0];
        delete array[2];
        console.log(array);

        /**
         * Opdracht 5: Objects
         * Maak van 10 objecten uit je dagelijkse leven een object
         *
         * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
         */
        let phone = {brand:"Samsung", color:"black"};
        let bus = {brand:"Scania", color:"grey, red"};
        let laptop = {brand:"Acer", color:"black"};
        let headphone = {brand:"Pioneer", color:"black"};
        let mixer = {brand:"Pioneer", type:"DJM 800", color:"black"};
        let cdj = {brand:"Pioneer", type:"CDJ 1000mk3", color:"black"};
        let usb_stick = {brand:"Kingston", memory:"64GB", color:"grey"};
        /**
         * Opdracht 6: Functions
         * Bedenk 4 functies die handig zouden kunnen zijn
         * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
         * console.log( value * multiplier)
         */
        function changeStudents()
        {
            nr_students = 2600;
            console.log(nr_students);
        }
        changeStudents();
        function changeUsb()
		{
			usb_stick = {brand: "Nightmusic", memory: "64GB", color: "blue"};
			console.log(usb_stick);
		}
		changeUsb();
        /**
         * Opdracht 7: Function & objects
         * Maak een functie die een firstName en lastName verwacht als parameter
         * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
         * roep deze functie aan en console.log() de waarde


         /**
         * Opdracht 8: Functions, objects
         * Maak een object genaamd 'student'
         * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
         */

        /**

         * Opdracht 9: Functions, objects
         * Maak een object genaamd 'student'
         * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
         */


        /**
         * Opdracht 10: Strings samenvoegen
         * Maak een variabele met de naam firstName, sla je voornaam hierin op
         * Maak een variabele met de naam lastName, sla je achternaam hierin op
         * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
         * 'lastName' hier samen in worden opgeslagen
         */

        /**
         * Opdracht 11: Random cijfers
         * console.log() een willekeurige cijfer tussen 0 en 5
         * console.log() een willekeurige cijfer tussen 1 en 10
         * console.log() een willekeurige cijfer tussen 30 en 40
         * console.log() een willekeurige cijfer tussen -100 en 100
         */

        /**
         * Opdracht 12: Primitive, Array of object?
         * Geef in de console.log antwoord op de vraag door een boolean op true of
         * false te zetten
         */
        console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });


        console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : false });

        console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : false, object : false, primitive : false });

        console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : false });

        console.log(
            'Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
            { array : false, object : false, primitive : false });

        /**
         * Opdracht 13: Keywords
         * Maak 4 variabelen aan met de let keyword
         * Maak 4 variabelen aan met de const keyword
         */

        /**
         * Opdracht 14: Keywords
         * Geef antwoord op de volgende vragen:
         */
        console.log('Wanneer gebruik je de let keyword?', 'jouw antwoord');
        console.log('Wanneer gebruik je de const keyword', 'jouw antwoord');

        /**
         * Opdracht 15: Objects en array
         * Maak een object voor jezelf (naam, leeftijd, lengte)
         * Maak in je object een array aan genaamd 'family' en vul deze array met namen
         * uit je familie
         * (objecten en arrays kunnen in elkaar opgeslagen worden)
         */

        /**
         * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
         * Aan deze code hoef je niets te veranderen
         */

        Array.prototype.random = function() {
            let randomIndex = Math.floor(Math.random() * this.length);
            return this[ randomIndex ];
        };

        String.prototype.replaceAll = function(search, replacement) {
            return this.replace(new RegExp(search, 'g'), replacement);
        };

        /**
         * Opdracht 16: Custom prototype method gebruiken
         * Maak een array met meerdere namen
         * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
         * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
         * splice().
         * console.log() de naam die deze functie returned
         */

        /**
         * Opdracht 17: Custom prototype method gebruiken
         * Maak een variabele waarin je een lange tekst opslaat
         * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
         * op alle plekken te vervangen voor een ander woord
         * console.log() deze gewijzigde tekst
         */

        /**
         * Opdracht 18: Prototype based language
         * Geef antwoord op onderstaande vraag
         */
        console.log('Waarom heet JavaScript een prototype based language?',
            'jouw antwoord');


        /**
         * Opdracht 19: Zelf een custom prototype method maken
         * Soms wil je een array leeg kunnen gooien. Het zou dus wel handig zijn als
         * je bij elke array een empty() functie kunt aanroepen.
         * Zorg ervoor dat deze functie er is en laat met 3 arrays zien dat hij werkt
         */

        /**
         * Opdracht 20: Monkey patching (?)
         * Je begint nu in te zien hoe JS werkt. Probeer nu de splice() en push()
         * functies van Arrays te overschrijven met een eigen functie.
         * Maak 2 arrays aan en laat zien dat je code werkt
         */

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
