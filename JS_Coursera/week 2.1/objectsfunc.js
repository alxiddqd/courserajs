var emptyObject = {}; // var = {} это объект

// пример объекта

var tweet = {
    createdAt: 'Sat Oct 01 12:01:08 +0000 2016',
    id: 1235436663456345,
    text: 'я сильно хотел пернуть но не смог',
    user: {
        id: 2342342342,
        name: 'пердежный угол',
        screenName: 'срачьник',
        followersCount: 324,

    },
    hashtags: ['пердеть']
};

emptyObject.propertyName = 'pusto';  // добавление в emptyObject нового свойства

delete emptyObject.propertyName;  // удаление свойства из объекта

console.log(tweet.id); // обращение к свойству объекта
console.log(tweet.user.screenName); // обращение к свойству объекта в объекте
console.log(tweet['te' + 'xt']); // получение ключа свойства объекта

var keys = Object.keys(tweet); // итерация клочей свойств объекта     (ключ: значение) = свойство,
console.log(keys);

console.log(tweet.hasOwnProperty("texxt")); // проверка есть ли в объекте данный ключ

function theFirst(){   
    return 9090;
}

console.log(theFirst());

function getAuthor() {
    return tweet.user.screenName;
}

function incrementFollowersCount(count){
    count++;        // 325
}
incrementFollowersCount(tweet.user.followersCount);  // 324

function incrementFollCount(user){
    user.followersCount++;    
}

incrementFollCount(tweet.user);
console.log(tweet.user.followersCount);

var newTweets = [
    { hashtags: ["пердеж"], likes: 16, text: "Пердеть это весело!"},
    { hashtags: ["пердеж"], likes: 32, text: "Напердел медведю в бер..."},
    { hashtags: ["пердеж", "громко"], likes: 11, text: "Пердел и оглох"},
    { hashtags: ["пердеж"], likes: 42, text: "Поперди подмышкой"},
    { hashtags: ["пердеж", "музыка"], likes: 44, text: "Пропердел Михаила Круга"},
    { hashtags: ["пердеж"], likes: 21, text: "Пернул на кухне"},
    { likes: 55, text: "Завел мопед поехал на..."},
    { hashtags: ["лес"], likes: 12, text: "Тру елку до утра"},
    { hashtags: ["базар"], likes: 23, text: "купил на базаре пингвина"},
    { likes: 32, text: "ахуеть и прихуеть"},
    { hashtags: ["сиськи"], like: 44, text: "у натахи сиськи как..."}
    ];

var result = [];

// отправка отфильтрованных твитов в result
newTweets.forEach(filterWithPerdezhHashtag);

function filterWithPerdezhHashtag(tweet, index){
    var hashtags = tweet.hashtags;
    if (Array.isArray(hashtags) && hashtags.indexOf("пердеж") !== -1){
        result.push(tweet);
    }
}

console.log(result);
