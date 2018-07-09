var emptyArray = []; // .length = 0

var numbersArray = [1, 2, 3, 4]; // .length = 4

var tweets = [
    'кабан срет на ель #кабан',
    'ёжик топчет рыхлую когягу #ёжик',
    'лиса бежит колесо крутить #лиса',
    'сова летает жопой вперед #сова',
    'лесоруб обосрался рубить ольху #лесоруб',
    'ольха заебалась это терпеть #сова',
    'медведь жопу почесал и заугрюмничал #медведь',
    'гомосек егерь жопу сильно продул #егерь'
    ]

var zeroArray = [];

zeroArray.push('pipisa');
zeroArray.push('poposa');
zeroArray.push('popec');
zeroArray.pop();

var concArray = numbersArray.concat(zeroArray);  // объединение массива

var result = [];

for (var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];

    if (tweet.indexOf('#сова') !== -1){
        result.push(tweet);
    }
}

var tweetsPerPage = tweets.slice(0, 3); // образание массива по индексу  (начало, конец)

var tweetsSplice = tweets.slice(); // копия массива

tweetsSplice.splice(1, 0, "ЛЫСЫЙ ВЫСТУПАЕТ ЗАВТРА!"); /* добавление нового элемента в массив в определенный индекс 
                                                        (начальный индекс, сколько ячеек удалить после начального индекса, элемент) */



console.log(tweetsSplice);
