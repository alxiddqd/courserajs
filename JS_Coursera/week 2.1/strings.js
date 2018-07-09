var emptyString = ''; // пустая строка

// emptyString.length - длинна строки (0)

var rusString = 'жопа кротика пердит';

// rusString.length; - пробелы считаюся за символы

var hiddenSymbol = 'a\'b'; // a'b. length = 3

var moreHiddenSymbols = 'a\n\tb'; // \n = <br>, \t = TAB. length = 4

var cat = 'кот'; // cat[2] = индекс строки (т)

var longString = "жопа жопа жопа жопа жопа жопа жопа жопа жопа жопа жопа бориса"; // 61
var shortString = longString;

if (longString.length > 10){
    shortString = longString.slice(0, 9) + '...';
}

console.log(shortString);


var tweet = 'жопа бориса весьма громко выражает недовольство' + 'жопа аркадия вообще не ерепенится' + '#zhopa'; // tweet.indexOf('#zhopa') - поиск индекса #zhopa по строке

var thisIsText = '100';
var textIntoNum = Number(thisIsText);
// var textInt = parseInt(thisIsText, 10);

console.log();
