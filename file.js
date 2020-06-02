// PARTE I (continuación de ejs en clase)

// 08
/**
 * Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). 
 * Preguntar luego cuántas bananas come cada mono. 
 * Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:
 * Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
 * Cuántas bananas come un mono?: 2
 * ¡Oh no!¡No hay suficientes bananas para los monos! 😭
 */

let monkeyBananaString = prompt(`Ingresá emojis de 🐵monos y 🍌bananas, porfa`);

const monkeyBananaArray = [...monkeyBananaString];
console.log = monkeyBananaArray;

let bananasPerMonkey = prompt(`¿Cuántas bananas come cada mono?`);
bananasPerMonkey = Number(bananasPerMonkey);
let monkey = 0;
let bananas = 0;

for (let i = 0; i < monkeyBananaArray.length; i++) {
    if (monkeyBananaArray[i] == `🐵`) {
        monkey++;
    }
    else if (monkeyBananaArray[i] == `🍌`) {
        bananas++;
    }
}

if ((bananas / monkey) >= bananasPerMonkey) {
    alert(`¡Genial! Hay bananas para todos los monos!`);
}
else {
    alert(`¡Oh no! ¡No hay suficientes bananas para los monos! 😭`)
}

// ------------------------------------------------

// 09
/**
 * Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:
 * Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
 * Resultado: 🐶🐶🐶🐶🐱🐱🐱
 */

let catDogString = prompt(`Ingresá 🐱 y 🐶, porfa`);

const catDogArray = [...catDogString];

const dogArray = [];
const catArray = [];

for (let i = 0; i < catDogArray.length; i++) {
    if (catDogArray[i] == `🐶`) {
        dogArray.push(`🐶`);
    }
    else if (catDogArray[i] == `🐱` ) {
        catArray.push(`🐱`);
    }
}

let dogString = dogArray.join("");
let catString = catArray.join("");

alert(`Resultado: ${dogString}${catString}`);

// ------------------------------------------------

// 10
/**
 * Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:
 * 
 * Para una usuaria, debe mostrar: nombre usuaria + está conectada
 *
 * Para dos usuarias, debe mostrar: nombre usuaria 1 + y + nombre usuaria 2 + están conectadas
 *
 * Para más de dos usuarias, debe mostrar: nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas
 *
 * Ejemplo:
 *
 * Ingrese nombres de usuarias: Ada
 * Ada está conectada
 *
 * Ingrese nombres de usuarias: Ada Grace
 * Ada y Grace están conectadas
 *
 * Ingrese nombres de usuarias: Ada Grace Marie
 * Ada, Grace y 1 persona(s) más están conectadas
 */

let nameList = prompt("Hola! Ingresá los nombres de tus amigas separados por un espacio, porfa");

const nameArray = nameList.split(" ");

if (nameArray.length == 1) {
    alert(`${nameArray[0]} está conectada`);
}
else if (nameArray.length == 2) {
    alert(`${nameArray[0]} y ${nameArray[1]} están conectadas`);
}
else if (nameArray.length > 2) {
    alert(`${nameArray[0]}, ${nameArray[1]} y ${nameArray.length - 2} persona(s) están conectadas`);
}

// ------------------------------------------------

// 11
/**
 * Crear un programa que permita ingresar una lista de flores y plantines (🌱). 
 * La lista debe comenzar con una flor, si no lo hace debe mostrar un mensaje de error. 
 * El programa debe convertir los plantines en flores, tomando como referencia la primera flor que encuentre a su izquierda. 
 * Ejemplo:
 * Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
 * ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸
 */

let flowerString = prompt(`Ingresá flores 🌷🌻🌼🌺🌸 y/o plantines 🌱`);

const flowerArray = [...flowerString];

if (flowerArray[0] == `🌷` ||
    flowerArray[0] == `🌻` ||
    flowerArray[0] == `🌼` ||
    flowerArray[0] == `🌺` ||
    flowerArray[0] == `🌸` ) {
        for (let i = 1; i < flowerArray.length; i++) {
            if (flowerArray[i] == `🌱` && flowerArray[i-1] == `🌷`) {
                flowerArray[i] = `🌷`;
            }
            else if (flowerArray[i] == `🌱` && flowerArray[i-1] == `🌻`) {
                flowerArray[i] = `🌻`;
            }
            else if (flowerArray[i] == `🌱` && flowerArray[i-1] == `🌼`) {
                flowerArray[i] = `🌼`;
            }
            else if (flowerArray[i] == `🌱` && flowerArray[i-1] == `🌺`) {
                flowerArray[i] = `🌺`;
            }
            else if (flowerArray[i] == `🌱` && flowerArray[i-1] == `🌸`) {
                flowerArray[i] = `🌸`;
            }
        }
        flowerString = flowerArray.join("");
        alert(`Las flores han germinado ${flowerString}`)
    }
else {
    alert(`El valor ingresado no es correcto. La secuencia debe empezar con flores. ¡Besis!`)
}

// ------------------------------------------------

// 12
/**
* Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. 
La oruga se come todas las plantas que hay a su derecha, hasta que se encuentra con el veneno. 
El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga y a la derecha del veneno. 
Ejemplo:
* Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱🌶️🌷
* Plantas sobrevivientes: 🌱🌻🌱🌷
*/

let plantString = prompt(`Ingrese plantas, orugas y pimientos 🌱🌻🐛🌸🦋🌷`);

const plantArray = [...plantString];

let wormIndex = plantArray.indexOf(`🐛`);
let butterflyIndex = plantArray.indexOf(`🦋`);

if (butterflyIndex > wormIndex) {
    plantArray.splice(wormIndex, (butterflyIndex - wormIndex + 1))
}

let newPlantString = plantArray.join("");

alert(`La oruga almorzó y se convirtió en mariposa. Quedaron estas plantas: ${newPlantString}`);

// ------------------------------------------------

// 13
/**
 * Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. 
 * Si lo son, mostrar un mensaje indicando que se ha ganado. 
 * Si se ingresan más de 5 sólo deben evaluarse los primeros 5. Ejemplo:
 * Ingrese símbolos: ⭐️⭐️⭐️💫✨
 * ¡Has perdido! Inténtalo nuevamente
 *
 * Ingrese símbolos: 💫💫💫💫💫
 * ¡Felicitaciones! Has ganado
 */

let emojiString = prompt(`Hola! Ingresá 5 emojis, porfa`);

const emojiArray = [...emojiString];
console.log = emojiArray;

let allEmojisEqual = 0;

for (let i = 0; i < 5; i++) {
    if (emojiArray[i] == emojiArray[0]) {
        allEmojisEqual++;
    } 
}

if (allEmojisEqual == 5) {
    alert(`¡Felicitaciones! Has ganado`);
}
else {
    alert(`¡Has perdido! Inténtalo nuevamente`);
}

// ------------------------------------------------

// 14
/**
* Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso. 
Ejemplo:
* Ingrese números: 5 7 99 34 54 2 12
*
* El array invertido es: [12, 2, 54, 34, 99, 7, 5]
*/
let numberString = prompt("Hola! Ingresá números enteros separados por un espacio, porfa");

const numberArray = (numberString.split(" "));

numberArray.reverse();

alert(`El orden invertido es: ${numberArray}`);

// ------------------------------------------------
// ////////////////////////////////////////////////////////////
// EJERCICIOS PARTE II

// 01
/**
 * Crear un documento con el nombre arr_006.js
 * Declarar un array con el nombre discoNevermind y asignar los siguientes valores:
 * Smells Like Teen Spirit
 * In Bloom
 * Come As You Are
 * Immodium
 * Lithium
 * Polly
 * Territorial Pissings
 * Drain You
 * Lounge Act
 * Pay To Play
 * On a Plain
 * Endless, Nameless
 * Reemplazar Immodium por Breed
 * Reemplazar Pay To Play por Stay Away
 * Reemplazar Endless, Nameless por Something in the Way
 * Mostrar en consola la lista de canciones modificada
 * El resultado debería ser:
 **/
/*[
    "Smells Like Teen Spirit",
    "In Bloom",
    "Come As You Are",
    "Breed",
    "Lithium",
    "Polly",
    "Territorial Pissings",
    "Drain You",
    "Lounge Act",
    "Stay Away",
    "On a Plain",
    "Something in the Way"
]*/

const discoNevermind = ["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Immodium", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Pay To Play", "On a Plain", "Endless, Nameless"]
console.log(discoNevermind);

discoNevermind[3] = "Breed";
discoNevermind[9] = "Stay Away";
discoNevermind[11] = "Something in the Way";

console.log(discoNevermind);

// ------------------------------------------------

// 02
/**
 * Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
 * Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
 * Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
 * Mostrar en consola la cantidad de etiquetas guardadas en el array
 */

const etiquetasHTML = ["head", "body", "title", "header", "main", "footer", "section", "article", "aside"];

let toUpperCaseString = etiquetasHTML[1].toUpperCase();
console.log(toUpperCaseString);
console.log(etiquetasHTML[4]);
console.log(etiquetasHTML.length);

// ------------------------------------------------

 // 03
 // Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando shift y unshift.

let frutas = ['Manzana', 'Banana'];

frutas.shift();
frutas.unshift('Frambuesa');
console.log(frutas);

// ------------------------------------------------

// 04
/**
 * Declarar una variable llamada concreteAndGold y asignarle un array vacio []
 * Agregar al array las siguientes canciones:
 * T-Shirt
 * Run
 * Make It Right
 * The Sky Is a Neighborhood
 * La Dee Da
 * Dirty Water
 * Arrows
 * Happy Ever After (Zero Hour)
 * Sunday Rain
 * The Line
 * Concrete and Gold
 * 
 * No se puede utilizar índices numéricos
 * Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
 * Los elementos tienen que guardarse en el mismo orden que se van ingresando
 * Mostrar en consola la primera y última canción
 * Mostrar en consola el contenido del array
 * Resultado esperado:
 */
"T-Shirt"
"Concrete and Gold"
[
    "T-Shirt",
    "Run",
    "Make It Right",
    "The Sky Is a Neighborhood",
    "La Dee Da",
    "Dirty Water",
    "Arrows",
    "Happy Ever After (Zero Hour)",
    "Sunday Rain",
    "The Line",
    "Concrete and Gold"
]

const concreteAndGold = [];
concreteAndGold.push("T-Shirt");
concreteAndGold.push("Run");
concreteAndGold.push("Make It Right");
concreteAndGold.push("The Sky Is a Neighborhood");
concreteAndGold.push("La Dee Da");
concreteAndGold.push("Dirty Water");
concreteAndGold.push("Arrows");
concreteAndGold.push("Happy Ever After (Zero Hour)");
concreteAndGold.push("Sunday Rain");
concreteAndGold.push("The Line");
concreteAndGold.push("Concrete and Gold");

console.log(concreteAndGold[0]);
console.log(concreteAndGold[concreteAndGold.length - 1]);
console.log(concreteAndGold);

// ------------------------------------------------

// 05
/**
 * Crear un documento con el nombre arr_014.js
 * Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
 * Eliminar el primer elemento, y agregarlo al final del array.
 * Mostrar el resultado final.
 * Resultado esperado
 */
[1, 2, 3, 4, 5, 6]

const numberArray = [1, 2, 3, 4, 5, 6];

let firstNumber = numberArray.shift();

numberArray.push(firstNumber);

console.log(numberArray);

// ------------------------------------------------

//06

// Ordernar el siguiente array de menor a mayor *google*
/*[3,2,5,7,4,1,6]*/

const numberArray = [3,2,5,7,4,1,6];
numberArray.sort();
console.log(numberArray);

// ------------------------------------------------