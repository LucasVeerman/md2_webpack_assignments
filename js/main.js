/**

* Uitleg van deze opdrachten:
* Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
* Je mag me bij elke opdracht om hulp vragen
* Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt


 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


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
var school = "Mediacollege";    //string 1
var city = "Amsterdam";         //string 2
var country = "Netherlands";    //string 3
var adress = "Contactweg";      //string 4
var street_nr = 36;             //number 1
var category = "MBO";           //string 5
var nr_students = 2500;         //number 2
var nr_educations = 15;         //number 3
var nr_employees = 55;          //number 4
var year_of_founding = 1918;    //number 5
var MBO = true;                 //boolean 1
var Mediadevelopment = true;    //boolean 2
var Gamedevelopment = true;     //boolean 3
var Utrecht = false;            //boolean 4
var Highschool = false;         //boolean 5
/**
* Opdracht 2: Arrays
* Bedenk 3 arrays en vul ze met primitives
* console.log de lengte van de arrays
*
* Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
*/
var educations = [Mediadevelopment, Gamedevelopment];
var teathers = ["Berend", "Hugo", "Ingrid", "Hjalmar", "Theo", "Ed"];
var locations = ["Contactweg", "Dintelstraat", "Factory"];
/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */


console.log ("De array Locations heeft " + locations.length + " objecten");
/**
* Opdracht 3: Arrays push
* Maak een lege array aan
* push er een string in
*/
var array = [];
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
var phone = {brand:"Samsung", color:"black"};
var bus = {brand:"Scania", color:"grey, red"};
var laptop = {brand:"Acer", color:"black"};
var headphone = {brand:"Pioneer", color:"black"};
var mixer = {brand:"Pioneer", type:"DJM 800", color:"black"};
var cdj = {brand:"Pioneer", type:"CDJ 1000mk3", color:"black"};
var usb_stick = {brand:"Kingston", memory:"64GB", color:"grey"};

/**
* Opdracht 6: Functions
* Bedenk 4 functies die handig zouden kunnen zijn
* Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
* console.log( value * multiplier)
*/

/**
* Opdracht 7: Function & objects
* Maak een functie die een firstName en lastName verwacht als parameter
* vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
* roep deze functie aan en console.log() de waarde


 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */


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
* Opdracht 10: Arrays & for loops
* Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
* Schrijf een for loop om alle namen in de Array te laten zien


 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
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

console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
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
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */