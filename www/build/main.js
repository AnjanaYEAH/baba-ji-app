webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteService = (function () {
    function QuoteService() {
        this.quotes = [{
                "gur": "ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥",
                "eng": "One Universal Creator God. The Name Is Truth. Creative Being Personified. No Fear. No Hatred. Image Of The Undying, Beyond Birth, Self-Existent. By Guru's Grace ~"
            }, {
                "gur": "ਆਦਿ ਸਚੁ, ਜੁਗਾਦਿ ਸਚੁ ॥",
                "eng": "True In The Primal Beginning. True Throughout The Ages."
            }, {
                "gur": "ਹੈ ਭੀ ਸਚੁ; ਨਾਨਕ, ਹੋਸੀ ਭੀ ਸਚੁ ॥੧॥",
                "eng": "True Here And Now. O Nanak, Forever And Ever True. ||1||"
            }, {
                "gur": "ਸੋਚੈ, ਸੋਚਿ ਨ ਹੋਵਈ; ਜੇ ਸੋਚੀ ਲਖ ਵਾਰ ॥",
                "eng": "By thinking, He cannot be reduced to thought, even by thinking hundreds of thousands of times."
            }, {
                "gur": "ਚੁਪੈ, ਚੁਪ ਨ ਹੋਵਈ; ਜੇ ਲਾਇ ਰਹਾ ਲਿਵ ਤਾਰ ॥",
                "eng": "By remaining silent, inner silence is not obtained, even by remaining lovingly absorbed deep within."
            }, {
                "gur": "ਭੁਖਿਆ, ਭੁਖ ਨ ਉਤਰੀ; ਜੇ ਬੰਨਾ ਪੁਰੀਆ ਭਾਰ ॥",
                "eng": "The hunger of the hungry is not appeased, even by piling up loads of worldly goods."
            }, {
                "gur": "ਸਹਸ ਸਿਆਣਪਾ ਲਖ ਹੋਹਿ; ਤ ਇਕ ਨ ਚਲੈ ਨਾਲਿ ॥",
                "eng": "Hundreds of thousands of clever tricks, but not even one of them will go along with you in the end."
            }, {
                "gur": "ਹੁਕਮਿ ਰਜਾਈ ਚਲਣਾ; ਨਾਨਕ, ਲਿਖਿਆ ਨਾਲਿ ॥੧॥",
                "eng": "O Nanak, it is written that you shall obey the Hukam of His Command, and walk in the Way of His Will. ||1||"
            }, {
                "gur": "ਹੁਕਮੀ ਹੋਵਨਿ ਆਕਾਰ; ਹੁਕਮੁ ਨ ਕਹਿਆ ਜਾਈ ॥",
                "eng": "By His Command, bodies are created; His Command cannot be described."
            }, {
                "gur": "ਹੁਕਮੀ ਹੋਵਨਿ ਜੀਅ; ਹੁਕਮਿ ਮਿਲੈ ਵਡਿਆਈ ॥",
                "eng": "By His Command, souls come into being; by His Command, glory and greatness are obtained."
            }, {
                "gur": "ਹੁਕਮੀ ਉਤਮੁ ਨੀਚੁ; ਹੁਕਮਿ ਲਿਖਿ, ਦੁਖ ਸੁਖ ਪਾਈਅਹਿ ॥",
                "eng": "By His Command, some are high and some are low; by His Written Command, pain and pleasure are obtained."
            }, {
                "gur": "ਇਕਨਾ ਹੁਕਮੀ ਬਖਸੀਸ; ਇਕਿ ਹੁਕਮੀ ਸਦਾ ਭਵਾਈਅਹਿ ॥",
                "eng": "Some, by His Command, are blessed and forgiven; others, by His Command, wander aimlessly forever."
            }, {
                "gur": "ਹੁਕਮੈ ਅੰਦਰਿ ਸਭੁ ਕੋ; ਬਾਹਰਿ ਹੁਕਮ ਨ ਕੋਇ ॥",
                "eng": "Everyone is subject to His Command; no one is beyond His Command."
            }, {
                "gur": "ਨਾਨਕ, ਹੁਕਮੈ ਜੇ ਬੁਝੈ; ਤ ਹਉਮੈ ਕਹੈ ਨ ਕੋਇ ॥੨॥",
                "eng": "O Nanak, one who understands His Command, does not speak in ego. ||2||"
            }, {
                "gur": "ਨਾਮ ਰਤਨੁ ਗੁਣਾ ਹਰਿ ਬਣਜੇ; ਲਾਦਿ ਵਖਰੁ ਲੈ ਚਾਲਿਓ ॥੧॥",
                "eng": "I have purchased the jewel of the Naam and the Glorious Praises of the Lord; loading this merchandise, I have set out on my journey. ||1||"
            }, {
                "gur": "ਸੇਵਕ ਕੀ, ਓੜਕਿ ਨਿਬਹੀ ਪ੍ਰੀਤਿ ॥",
                "eng": "The love which the Lord's servant feels for the Lord lasts forever."
            }, {
                "gur": "ਜੀਵਤ ਸਾਹਿਬੁ ਸੇਵਿਓ ਅਪਨਾ; ਚਲਤੇ ਰਾਖਿਓ ਚੀਤਿ ॥੧॥ ਰਹਾਉ ॥",
                "eng": "In my life, I served my Lord and Master, and as I depart, I keep Him enshrined in my consciousness. ||1||Pause||"
            }, {
                "gur": "ਜੈਸੀ ਆਗਿਆ ਕੀਨੀ ਠਾਕੁਰਿ; ਤਿਸ ਤੇ ਮੁਖੁ ਨਹੀ ਮੋਰਿਓ ॥",
                "eng": "I have not turned my face away from my Lord and Master's Command."
            }, {
                "gur": "ਸਹਜੁ ਅਨੰਦੁ; ਰਖਿਓ ਗ੍ਰਿਹ ਭੀਤਰਿ; ਉਠਿ ਉਆਹੂ ਕਉ ਦਉਰਿਓ ॥੨॥",
                "eng": "He fills my household with celestial peace and bliss; if He asks me to leave, I leave at once. ||2||"
            }, {
                "gur": "ਆਗਿਆ ਮਹਿ ਭੂਖ, ਸੋਈ ਕਰਿ ਸੂਖਾ; ਸੋਗ ਹਰਖ ਨਹੀ ਜਾਨਿਓ ॥",
                "eng": "When I am under the Lord's Command, I find even hunger pleasurable; I know no difference between sorrow and joy."
            }, {
                "gur": "ਜੋ ਜੋ ਹੁਕਮੁ ਭਇਓ ਸਾਹਿਬ ਕਾ; ਸੋ ਮਾਥੈ ਲੇ ਮਾਨਿਓ ॥੩॥",
                "eng": "Whatever the Command of my Lord and Master is, I bow my forehead and accept it. ||3||"
            }, {
                "gur": "ਭਇਓ ਕ੍ਰਿਪਾਲੁ ਠਾਕੁਰੁ ਸੇਵਕ ਕਉ; ਸਵਰੇ ਹਲਤ ਪਲਾਤਾ ॥",
                "eng": "The Lord and Master has become merciful to His servant; He has embellished both this world and the next."
            }, {
                "gur": "ਧੰਨੁ ਸੇਵਕੁ, ਸਫਲੁ ਓਹੁ ਆਇਆ; ਜਿਨਿ ਨਾਨਕ ਖਸਮੁ ਪਛਾਤਾ ॥੪॥੫॥",
                "eng": "Blessed is that servant, and fruitful is his birth; O Nanak, he realizes his Lord and Master. ||4||5||"
            }, {
                "gur": "ਖੁਲਿਆ ਕਰਮੁ, ਕ੍ਰਿਪਾ ਭਈ ਠਾਕੁਰ; ਕੀਰਤਨੁ ਹਰਿ ਹਰਿ ਗਾਈ ॥",
                "eng": "Good karma has dawned for me - my Lord and Master has become merciful. I sing the Kirtan of the Praises of the Lord, Har, Har."
            }, {
                "gur": "ਸ੍ਰਮੁ ਥਾਕਾ, ਪਾਏ ਬਿਸ੍ਰਾਮਾ; ਮਿਟਿ ਗਈ ਸਗਲੀ ਧਾਈ ॥੧॥",
                "eng": "My struggle is ended; I have found peace and tranquility. All my wanderings have ceased. ||1||"
            }, {
                "gur": "ਚੀਤਿ ਆਇਓ ਮਨਿ, ਪੁਰਖੁ ਬਿਧਾਤਾ; ਸੰਤਨ ਕੀ ਸਰਣਾਈ ॥੧॥ ਰਹਾਉ ॥",
                "eng": "The Primal Lord, the Architect of Destiny, has come into my conscious mind; I seek the Sanctuary of the Saints. ||1||Pause||"
            }, {
                "gur": "ਕਾਮੁ ਕ੍ਰੋਧੁ ਲੋਭੁ ਮੋਹੁ ਨਿਵਾਰੇ; ਨਿਵਰੇ ਸਗਲ ਬੈਰਾਈ ॥",
                "eng": "Sexual desire, anger, greed and emotional attachment are eradicated; all my enemies are eliminated."
            }, {
                "gur": "ਸਦ ਹਜੂਰਿ, ਹਾਜਰੁ ਹੈ ਨਾਜਰੁ; ਕਤਹਿ ਨ ਭਇਓ ਦੂਰਾਈ ॥੨॥",
                "eng": "He is always ever-present, here and now, watching over me; He is never far away. ||2||"
            }, {
                "gur": "ਸੁਖ ਸੀਤਲ ਸਰਧਾ ਸਭ ਪੂਰੀ; ਹੋਏ ਸੰਤ ਸਹਾਈ ॥",
                "eng": "In peace and cool tranquility, my faith has been totally fulfilled; the Saints are my Helpers and Support."
            }, {
                "gur": "ਪਾਵਨ ਪਤਿਤ ਕੀਏ ਖਿਨ ਭੀਤਰਿ; ਮਹਿਮਾ ਕਥਨੁ ਨ ਜਾਈ ॥੩॥",
                "eng": "He has purified the sinners in an instant; I cannot express His Glorious Praises. ||3||"
            }, {
                "gur": "ਨਿਰਭਉ ਭਏ ਸਗਲ ਭੈ ਖੋਏ; ਗੋਬਿਦ ਚਰਣ ਓਟਾਈ ॥",
                "eng": "I have become fearless; all fear has departed. The feet of the Lord of the Universe are my only Shelter."
            }, {
                "gur": "ਨਾਨਕੁ ਜਸੁ ਗਾਵੈ ਠਾਕੁਰ ਕਾ; ਰੈਣਿ ਦਿਨਸੁ ਲਿਵ ਲਾਈ ॥੪॥੬॥",
                "eng": "Nanak sings the Praises of his Lord and Master; night and day, he is lovingly focused on Him. ||4||6||"
            }, {
                "gur": "ਜੋ ਸਮਰਥੁ ਸਰਬ ਗੁਣ ਨਾਇਕੁ; ਤਿਸ ਕਉ ਕਬਹੁ ਨ ਗਾਵਸਿ ਰੇ ॥",
                "eng": "He is all-powerful, the Master of all virtues, but you never sing of Him!"
            }, {
                "gur": "ਛੋਡਿ ਜਾਇ ਖਿਨ ਭੀਤਰਿ ਤਾ ਕਉ; ਉਆ ਕਉ ਫਿਰਿ ਫਿਰਿ ਧਾਵਸਿ ਰੇ ॥੧॥",
                "eng": "You shall have to leave all this in an instant, but again and again, you chase after it. ||1||"
            }, {
                "gur": "ਅਪੁਨੇ ਪ੍ਰਭ ਕਉ, ਕਿਉ ਨ ਸਮਾਰਸਿ ਰੇ? ॥",
                "eng": "Why do you not contemplate your God?"
            }, {
                "gur": "ਬੈਰੀ ਸੰਗਿ, ਰੰਗ ਰਸਿ ਰਚਿਆ; ਤਿਸੁ ਸਿਉ ਜੀਅਰਾ ਜਾਰਸਿ ਰੇ ॥੧॥ ਰਹਾਉ ॥",
                "eng": "You are entangled in association with your enemies, and the enjoyment of pleasures; your soul is burning up with them! ||1||Pause||"
            }, {
                "gur": "ਜਾ ਕੈ ਨਾਮਿ ਸੁਨਿਐ, ਜਮੁ ਛੋਡੈ; ਤਾ ਕੀ ਸਰਣਿ ਨ ਪਾਵਸਿ ਰੇ ॥",
                "eng": "Hearing His Name, the Messenger of Death will release you, and yet, you do not enter His Sanctuary!"
            }, {
                "gur": "ਕਾਢਿ ਦੇਇ ਸਿਆਲ ਬਪੁਰੇ ਕਉ; ਤਾ ਕੀ ਓਟ ਟਿਕਾਵਸਿ ਰੇ ॥੨॥",
                "eng": "Turn out this wretched jackal, and seek the Shelter of that God. ||2||"
            }, {
                "gur": "ਜਿਸ ਕਾ ਜਾਸੁ ਸੁਨਤ ਭਵ ਤਰੀਐ; ਤਾ ਸਿਉ ਰੰਗੁ ਨ ਲਾਵਸਿ ਰੇ ॥",
                "eng": "Praising Him, you shall cross over the terrifying world-ocean, and yet, you have not fallen in love with Him!"
            }, {
                "gur": "ਥੋਰੀ ਬਾਤ ਅਲਪ ਸੁਪਨੇ ਕੀ; ਬਹੁਰਿ ਬਹੁਰਿ ਅਟਕਾਵਸਿ ਰੇ ॥੩॥",
                "eng": "This meager, short-lived dream, this thing - you are engrossed in it, over and over again. ||3||"
            }, {
                "gur": "ਭਇਓ ਪ੍ਰਸਾਦੁ ਕ੍ਰਿਪਾ ਨਿਧਿ ਠਾਕੁਰ; ਸੰਤਸੰਗਿ ਪਤਿ ਪਾਈ ॥",
                "eng": "When our Lord and Master, the ocean of mercy, grants His Grace, one finds honor in the Society of the Saints."
            }, {
                "gur": "ਕਹੁ ਨਾਨਕ, ਤ੍ਰੈ ਗੁਣ ਭ੍ਰਮੁ ਛੂਟਾ; ਜਉ ਪ੍ਰਭ ਭਏ ਸਹਾਈ ॥੪॥੭॥",
                "eng": "Says Nanak, I am rid of the illusion of the three-phased Maya, when God becomes my help and support. ||4||7||"
            }, {
                "gur": "ਅੰਤਰਜਾਮੀ ਸਭ ਬਿਧਿ ਜਾਨੈ; ਤਿਸ ਤੇ ਕਹਾ ਦੁਲਾਰਿਓ ॥",
                "eng": "The Inner-knower, the Searcher of hearts, knows everything; what can anyone hide from Him?"
            }, {
                "gur": "ਹਸਤ ਪਾਵ ਝਰੇ ਖਿਨ ਭੀਤਰਿ; ਅਗਨਿ ਸੰਗਿ ਲੈ ਜਾਰਿਓ ॥੧॥",
                "eng": "Your hands and feet will fall off in an instant, when you are burnt in the fire. ||1||"
            }, {
                "gur": "ਗੁਰ ਸੇਵਾ ਮਹਲੁ ਪਾਈਐ; ਜਗੁ ਦੁਤਰੁ ਤਰੀਐ ॥੨॥",
                "eng": "Serving the Guru, the Mansion of the Lord's Presence is obtained, and the impassable world-ocean is crossed over. ||2||"
            }, {
                "gur": "ਦ੍ਰਿਸਟਿ ਤੇਰੀ ਸੁਖੁ ਪਾਈਐ; ਮਨ ਮਾਹਿ ਨਿਧਾਨਾ ॥",
                "eng": "By Your Glance of Grace, peace is obtained, and the treasure fills the mind."
            }, {
                "gur": "ਜਾ ਕਉ ਤੁਮ ਕਿਰਪਾਲ ਭਏ; ਸੇਵਕ ਸੇ ਪਰਵਾਨਾ ॥੩॥",
                "eng": "That servant, unto whom You bestow Your Mercy, is approved and accepted. ||3||"
            }, {
                "gur": "ਅੰਮ੍ਰਿਤ ਰਸੁ ਹਰਿ ਕੀਰਤਨੋ; ਕੋ ਵਿਰਲਾ ਪੀਵੈ ॥",
                "eng": "How rare is that person who drinks in the Ambrosial Essence of the Lord's Kirtan."
            }, {
                "gur": "ਵਜਹੁ ਨਾਨਕ ਮਿਲੈ ਏਕੁ ਨਾਮੁ; ਰਿਦ ਜਪਿ ਜਪਿ ਜੀਵੈ ॥੪॥੧੪॥੧੧੬॥",
                "eng": "Nanak has obtained the commodity of the One Name; he lives by chanting and meditating on it within his heart. ||4||14||116||"
            }, {
                "gur": "ਜਾ ਪ੍ਰਭ ਕੀ ਹਉ ਚੇਰੁਲੀ; ਸੋ ਸਭ ਤੇ ਊਚਾ ॥",
                "eng": "I am God's maid-servant; He is the highest of all."
            }, {
                "gur": "ਸਭੁ ਕਿਛੁ ਤਾ ਕਾ ਕਾਂਢੀਐ; ਥੋਰਾ ਅਰੁ ਮੂਚਾ ॥੧॥",
                "eng": "All things, big and small, are said to belong to Him. ||1||"
            }, {
                "gur": "ਜੀਅ ਪ੍ਰਾਨ ਮੇਰਾ ਧਨੋ; ਸਾਹਿਬ ਕੀ ਮਨੀਆ ॥",
                "eng": "I surrender my soul, my breath of life, and my wealth, to my Lord Master."
            }, {
                "gur": "ਨਾਮਿ ਜਿਸੈ ਕੈ ਊਜਲੀ; ਤਿਸੁ ਦਾਸੀ ਗਨੀਆ ॥੧॥ ਰਹਾਉ ॥",
                "eng": "Through His Name, I become radiant; I am known as His slave. ||1||Pause||"
            }, {
                "gur": "ਵੇਪਰਵਾਹੁ ਅਨੰਦ ਮੈ; ਨਾਉ ਮਾਣਕ ਹੀਰਾ ॥",
                "eng": "You are Carefree, the Embodiment of Bliss. Your Name is a gem, a jewel."
            }, {
                "gur": "ਰਜੀ ਧਾਈ ਸਦਾ ਸੁਖੁ; ਜਾ ਕਾ ਤੂੰ ਮੀਰਾ ॥੨॥",
                "eng": "One who has You as her Master, is satisfied, satiated and happy forever. ||2||"
            }, {
                "gur": "ਸਖੀ ਸਹੇਰੀ ਸੰਗ ਕੀ; ਸੁਮਤਿ ਦ੍ਰਿੜਾਵਉ ॥",
                "eng": "O my companions and fellow maidens, please implant that balanced understanding within me."
            }, {
                "gur": "ਸੇਵਹੁ ਸਾਧੂ ਭਾਉ ਕਰਿ; ਤਉ ਨਿਧਿ ਹਰਿ ਪਾਵਉ ॥੩॥",
                "eng": "Serve the Holy Saints lovingly, and find the treasure of the Lord. ||3||"
            }, {
                "gur": "ਸਗਲੀ ਦਾਸੀ ਠਾਕੁਰੈ; ਸਭ ਕਹਤੀ ਮੇਰਾ ॥",
                "eng": "All are servants of the Lord Master, and all call Him their own."
            }, {
                "gur": "ਜਿਸਹਿ ਸੀਗਾਰੇ ਨਾਨਕਾ; ਤਿਸੁ ਸੁਖਹਿ ਬਸੇਰਾ ॥੪॥੧੫॥੧੧੭॥",
                "eng": "She alone dwells in peace, O Nanak, whom the Lord adorns. ||4||15||117||"
            }, {
                "gur": "ਸੰਤਾ ਕੀ ਹੋਇ ਦਾਸਰੀ; ਏਹੁ ਅਚਾਰਾ ਸਿਖੁ ਰੀ ॥",
                "eng": "Become the servant of the Saints, and learn this way of life."
            }, {
                "gur": "ਸਗਲ ਗੁਣਾ ਗੁਣ ਊਤਮੋ; ਭਰਤਾ ਦੂਰਿ ਨ ਪਿਖੁ ਰੀ ॥੧॥",
                "eng": "Of all virtues, the most sublime virtue is to see your Husband Lord near at hand. ||1||"
            }, {
                "gur": "ਇਹੁ ਮਨੁ ਸੁੰਦਰਿ ਆਪਣਾ; ਹਰਿ ਨਾਮਿ ਮਜੀਠੈ ਰੰਗਿ ਰੀ ॥",
                "eng": "So, dye this mind of yours with the color of the Lord's Love."
            }, {
                "gur": "ਤਿਆਗਿ ਸਿਆਣਪ ਚਾਤੁਰੀ; ਤੂੰ ਜਾਣੁ ਗੁਪਾਲਹਿ ਸੰਗਿ ਰੀ ॥੧॥ ਰਹਾਉ ॥",
                "eng": "Renounce cleverness and cunning, and know that the Sustainer of the world is with you. ||1||Pause||"
            }, {
                "gur": "ਭਰਤਾ ਕਹੈ ਸੁ ਮਾਨੀਐ; ਏਹੁ ਸੀਗਾਰੁ ਬਣਾਇ ਰੀ ॥",
                "eng": "Whatever your Husband Lord says, accept that, and make it your decoration."
            }, {
                "gur": "ਦੂਜਾ ਭਾਉ ਵਿਸਾਰੀਐ; ਏਹੁ ਤੰਬੋਲਾ ਖਾਇ ਰੀ ॥੨॥",
                "eng": "Forget the love of duality, and chew upon this betel leaf. ||2||"
            }, {
                "gur": "ਗੁਰ ਕਾ ਸਬਦੁ ਕਰਿ ਦੀਪਕੋ; ਇਹ ਸਤ ਕੀ ਸੇਜ ਬਿਛਾਇ ਰੀ ॥",
                "eng": "Make the Word of the Guru's Shabad your lamp, and let your bed be Truth."
            }, {
                "gur": "ਆਠ ਪਹਰ ਕਰ ਜੋੜਿ ਰਹੁ; ਤਉ ਭੇਟੈ ਹਰਿ ਰਾਇ ਰੀ ॥੩॥",
                "eng": "Twenty-four hours a day, stand with your palms pressed together, and the Lord, your King, shall meet you. ||3||"
            }, {
                "gur": "ਤਿਸ ਹੀ ਚਜੁ ਸੀਗਾਰੁ ਸਭੁ; ਸਾਈ ਰੂਪਿ ਅਪਾਰਿ ਰੀ ॥",
                "eng": "She alone is cultured and embellished, and she alone is of incomparable beauty."
            }, {
                "gur": "ਸਾਈ ਸੋੁਹਾਗਣਿ ਨਾਨਕਾ; ਜੋ ਭਾਣੀ ਕਰਤਾਰਿ ਰੀ ॥੪॥੧੬॥੧੧੮॥",
                "eng": "She alone is the happy soul-bride, O Nanak, who is pleasing to the Creator Lord. ||4||16||118||"
            }, {
                "gur": "ਡੀਗਨ ਡੋਲਾ ਤਊ ਲਉ; ਜਉ ਮਨ ਕੇ ਭਰਮਾ ॥",
                "eng": "As long as there are doubts in the mind, the mortal staggers and falls."
            }, {
                "gur": "ਭ੍ਰਮ ਕਾਟੇ ਗੁਰਿ ਆਪਣੈ; ਪਾਏ ਬਿਸਰਾਮਾ ॥੧॥",
                "eng": "The Guru removed my doubts, and I have obtained my place of rest. ||1||"
            }, {
                "gur": "ਓਇ ਬਿਖਾਦੀ ਦੋਖੀਆ; ਤੇ ਗੁਰ ਤੇ ਹੂਟੇ ॥",
                "eng": "Those quarrelsome enemies have been overcome, through the Guru."
            }, {
                "gur": "ਹਮ ਛੂਟੇ ਅਬ ਉਨ੍ਹ੍ਹਾ ਤੇ; ਓਇ ਹਮ ਤੇ ਛੂਟੇ ॥੧॥ ਰਹਾਉ ॥",
                "eng": "I have now escaped from them, and they have run away from me. ||1||Pause||"
            }, {
                "gur": "ਮੇਰਾ ਤੇਰਾ ਜਾਨਤਾ; ਤਬ ਹੀ ਤੇ ਬੰਧਾ ॥",
                "eng": "He is concerned with 'mine and yours', and so he is held in bondage."
            }, {
                "gur": "ਗੁਰਿ ਕਾਟੀ ਅਗਿਆਨਤਾ; ਤਬ ਛੁਟਕੇ ਫੰਧਾ ॥੨॥",
                "eng": "When the Guru dispelled my ignorance, then the noose of death was cut away from my neck. ||2||"
            }, {
                "gur": "ਜਬ ਲਗੁ ਹੁਕਮੁ ਨ ਬੂਝਤਾ; ਤਬ ਹੀ ਲਉ ਦੁਖੀਆ ॥",
                "eng": "As long as he does not understand the Command of God's Will, he remains miserable."
            }, {
                "gur": "ਗੁਰ ਮਿਲਿ ਹੁਕਮੁ ਪਛਾਣਿਆ; ਤਬ ਹੀ ਤੇ ਸੁਖੀਆ ॥੩॥",
                "eng": "Meeting with the Guru, he comes to recognize God's Will, and then, he becomes happy. ||3||"
            }, {
                "gur": "ਨਾ ਕੋ ਦੁਸਮਨੁ ਦੋਖੀਆ; ਨਾਹੀ ਕੋ ਮੰਦਾ ॥",
                "eng": "I have no enemies and no adversaries; no one is wicked to me."
            }, {
                "gur": "ਗੁਰ ਕੀ ਸੇਵਾ ਸੇਵਕੋ; ਨਾਨਕ ਖਸਮੈ ਬੰਦਾ ॥੪॥੧੭॥੧੧੯॥",
                "eng": "That servant, who performs the Lord's service, O Nanak, is the slave of the Lord Master. ||4||17||119||"
            }, {
                "gur": "ਸੂਖ ਸਹਜ ਆਨਦੁ ਘਣਾ; ਹਰਿ ਕੀਰਤਨੁ ਗਾਉ ॥",
                "eng": "Peace, celestial poise and absolute bliss are obtained, singing the Kirtan of the Lord's Praises."
            }, {
                "gur": "ਗਰਹ ਨਿਵਾਰੇ ਸਤਿਗੁਰੂ; ਦੇ ਅਪਣਾ ਨਾਉ ॥੧॥",
                "eng": "Bestowing His Name, the True Guru removes the evil omens. ||1||"
            }, {
                "gur": "ਬਲਿਹਾਰੀ ਗੁਰ ਆਪਣੇ; ਸਦ ਸਦ ਬਲਿ ਜਾਉ ॥",
                "eng": "I am a sacrifice to my Guru; forever and ever, I am a sacrifice to Him."
            }, {
                "gur": "ਰੇਨੁ ਸੰਤਨ ਕੀ, ਮੇਰੈ ਮੁਖਿ ਲਾਗੀ ॥",
                "eng": "I applied the dust of the feet of the Saints to my face."
            }, {
                "gur": "ਦੁਰਮਤਿ ਬਿਨਸੀ, ਕੁਬੁਧਿ ਅਭਾਗੀ ॥",
                "eng": "My evil-mindedness disappeared, along with my misfortune and false-mindedness."
            }, {
                "gur": "ਸਚ ਘਰਿ ਬੈਸਿ ਰਹੇ ਗੁਣ ਗਾਏ; ਨਾਨਕ, ਬਿਨਸੇ ਕੂਰਾ ਜੀਉ ॥੪॥੧੧॥੧੮॥",
                "eng": "I sit in the true home of my self; I sing His Glorious Praises. O Nanak, my falsehood has vanished! ||4||11||18||"
            }, {
                "gur": "ਵਿਸਰੁ ਨਾਹੀ, ਏਵਡ ਦਾਤੇ ॥",
                "eng": "I shall never forget You-You are such a Great Giver!"
            }, {
                "gur": "ਕਰਿ ਕਿਰਪਾ, ਭਗਤਨ ਸੰਗਿ ਰਾਤੇ ॥",
                "eng": "Please grant Your Grace, and imbue me with the love of devotional worship."
            }, {
                "gur": "ਦਿਨਸੁ ਰੈਣਿ ਜਿਉ ਤੁਧੁ ਧਿਆਈ; ਏਹੁ ਦਾਨੁ ਮੋਹਿ ਕਰਣਾ ਜੀਉ ॥੧॥",
                "eng": "If it pleases You, let me meditate on You day and night; please, grant me this gift! ||1||"
            }, {
                "gur": "ਸਭ ਕਿਛੁ ਦੀਆ, ਭਲੀਆ ਜਾਈ ॥",
                "eng": "Everything, everywhere which You have given is good."
            }, {
                "gur": "ਅਨਦ ਬਿਨੋਦ ਚੋਜ ਤਮਾਸੇ; ਤੁਧੁ ਭਾਵੈ ਸੋ ਹੋਣਾ ਜੀਉ ॥੨॥",
                "eng": "Bliss, joyful celebrations, wondrous plays and entertainment-whatever pleases You, comes to pass. ||2||"
            }, {
                "gur": "ਸਾ ਬੁਧਿ ਦੀਜੈ, ਜਿਤੁ ਵਿਸਰਹਿ ਨਾਹੀ ॥",
                "eng": "Give me that state of mind, by which I may not forget You."
            }, {
                "gur": "ਸਾ ਮਤਿ ਦੀਜੈ, ਜਿਤੁ ਤੁਧੁ ਧਿਆਈ ॥",
                "eng": "Give me that understanding, by which I may meditate on You."
            }, {
                "gur": "ਸਾਸ ਸਾਸ ਤੇਰੇ ਗੁਣ ਗਾਵਾ; ਓਟ ਨਾਨਕ, ਗੁਰ ਚਰਣਾ ਜੀਉ ॥੪॥੧੨॥੧੯॥",
                "eng": "I sing Your Glorious Praises with each and every breath. Nanak takes the Support of the Guru's Feet. ||4||12||19||"
            }, {
                "gur": "ਸਿਫਤਿ ਸਾਲਾਹਣੁ, ਤੇਰਾ ਹੁਕਮੁ ਰਜਾਈ ॥",
                "eng": "To praise You is to follow Your Command and Your Will."
            }, {
                "gur": "ਸੋ ਗਿਆਨੁ ਧਿਆਨੁ, ਜੋ ਤੁਧੁ ਭਾਈ ॥",
                "eng": "That which pleases You is spiritual wisdom and meditation."
            }, {
                "gur": "ਸੋਈ ਜਪੁ, ਜੋ ਪ੍ਰਭ ਜੀਉ ਭਾਵੈ; ਭਾਣੈ ਪੂਰ ਗਿਆਨਾ ਜੀਉ ॥੧॥",
                "eng": "That which pleases God is chanting and meditation; to be in harmony with His Will is perfect spiritual wisdom. ||1||"
            }, {
                "gur": "ਅੰਮ੍ਰਿਤੁ ਨਾਮੁ ਤੇਰਾ, ਸੋਈ ਗਾਵੈ ॥",
                "eng": "He alone sings Your Ambrosial Naam,"
            }, {
                "gur": "ਜੋ ਸਾਹਿਬ! ਤੇਰੈ ਮਨਿ ਭਾਵੈ ॥",
                "eng": "who is pleasing to Your Mind, O my Lord and Master."
            }, {
                "gur": "ਤੂੰ ਸੰਤਨ ਕਾ, ਸੰਤ ਤੁਮਾਰੇ; ਸੰਤ ਸਾਹਿਬ ਮਨੁ ਮਾਨਾ ਜੀਉ ॥੨॥",
                "eng": "You belong to the Saints, and the Saints belong to You. The minds of the Saints are attuned to You, O my Lord and Master. ||2||"
            }, {
                "gur": "ਤੂੰ ਸੰਤਨ ਕੀ, ਕਰਹਿ ਪ੍ਰਤਿਪਾਲਾ ॥",
                "eng": "You cherish and nurture the Saints."
            }, {
                "gur": "ਸੰਤ ਖੇਲਹਿ, ਤੁਮ ਸੰਗਿ ਗੋਪਾਲਾ ॥",
                "eng": "The Saints play with You, O Sustainer of the World."
            }, {
                "gur": "ਅਪੁਨੇ ਸੰਤ, ਤੁਧੁ ਖਰੇ ਪਿਆਰੇ; ਤੂ ਸੰਤਨ ਕੇ ਪ੍ਰਾਨਾ ਜੀਉ ॥੩॥",
                "eng": "Your Saints are very dear to You. You are the breath of life of the Saints. ||3||"
            }, {
                "gur": "ਤਿਨ ਕੈ ਸੰਗਿ, ਸਦਾ ਸੁਖੁ ਪਾਇਆ; ਹਰਿ ਰਸ ਨਾਨਕ ਤ੍ਰਿਪਤਿ ਅਘਾਨਾ ਜੀਉ ॥੪॥੧੩॥੨੦॥",
                "eng": "In their company I have found a lasting peace. Nanak is satisfied and fulfilled with the Sublime Essence of the Lord. ||4||13||20||"
            }, {
                "gur": "ਤੂੰ ਜਲਨਿਧਿ, ਹਮ ਮੀਨ ਤੁਮਾਰੇ ॥",
                "eng": ": You are the Ocean of Water, and I am Your fish."
            }, {
                "gur": "ਤੇਰਾ ਨਾਮੁ ਬੂੰਦ, ਹਮ ਚਾਤ੍ਰਿਕ ਤਿਖਹਾਰੇ ॥",
                "eng": "Your Name is the drop of water, and I am a thirsty rain-bird."
            }, {
                "gur": "ਤੁਮਰੀ ਆਸ, ਪਿਆਸਾ ਤੁਮਰੀ; ਤੁਮ ਹੀ ਸੰਗਿ ਮਨੁ ਲੀਨਾ ਜੀਉ ॥੧॥",
                "eng": "You are my hope, and You are my thirst. My mind is absorbed in You. ||1||"
            }, {
                "gur": "ਜਿਉ ਬਾਰਿਕੁ, ਪੀ ਖੀਰੁ ਅਘਾਵੈ ॥",
                "eng": "Just as the baby is satisfied by drinking milk,"
            }, {
                "gur": "ਜਿਉ ਨਿਰਧਨੁ, ਧਨੁ ਦੇਖਿ ਸੁਖੁ ਪਾਵੈ ॥",
                "eng": "and the poor person is pleased by seeing wealth,"
            }, {
                "gur": "ਤ੍ਰਿਖਾਵੰਤ, ਜਲੁ ਪੀਵਤ ਠੰਢਾ; ਤਿਉ ਹਰਿ ਸੰਗਿ ਇਹੁ ਮਨੁ ਭੀਨਾ ਜੀਉ ॥੨॥",
                "eng": "and the thirsty person is refreshed by drinking cool water, so is this mind drenched with delight in the Lord. ||2||"
            }, {
                "gur": "ਜਿਉ ਅੰਧਿਆਰੈ, ਦੀਪਕੁ ਪਰਗਾਸਾ ॥",
                "eng": "Just as the darkness is lit up by the lamp,"
            }, {
                "gur": "ਭਰਤਾ ਚਿਤਵਤ, ਪੂਰਨ ਆਸਾ ॥",
                "eng": "and the hopes of the wife are fulfilled by thinking about her husband,"
            }, {
                "gur": "ਮਿਲਿ ਪ੍ਰੀਤਮ, ਜਿਉ ਹੋਤ ਅਨੰਦਾ; ਤਿਉ ਹਰਿ ਰੰਗਿ ਮਨੁ ਰੰਗੀਨਾ ਜੀਉ ॥੩॥",
                "eng": "and people are filled with bliss upon meeting their beloved, so is my mind imbued with the Lord's Love. ||3||"
            }, {
                "gur": "ਸੰਤਨ ਮੋ ਕਉ, ਹਰਿ ਮਾਰਗਿ ਪਾਇਆ ॥",
                "eng": "The Saints have set me upon the Lord's Path."
            }, {
                "gur": "ਸਾਧ ਕ੍ਰਿਪਾਲਿ, ਹਰਿ ਸੰਗਿ ਗਿਝਾਇਆ ॥",
                "eng": "By the Grace of the Holy Saint, I have been attuned to the Lord."
            }, {
                "gur": "ਹਰਿ ਹਮਰਾ, ਹਮ ਹਰਿ ਕੇ ਦਾਸੇ; ਨਾਨਕ, ਸਬਦੁ ਗੁਰੂ ਸਚੁ ਦੀਨਾ ਜੀਉ ॥੪॥੧੪॥੨੧॥",
                "eng": "The Lord is mine, and I am the slave of the Lord. O Nanak, the Guru has blessed me with the True Word of the Shabad. ||4||14||21||"
            }, {
                "gur": "ਅੰਮ੍ਰਿਤ ਨਾਮੁ, ਸਦਾ ਨਿਰਮਲੀਆ ॥",
                "eng": "The Ambrosial Naam, the Name of the Lord, is eternally pure."
            }, {
                "gur": "ਸੁਖਦਾਈ, ਦੂਖ ਬਿਡਾਰਨ ਹਰੀਆ ॥",
                "eng": "The Lord is the Giver of Peace and the Dispeller of sorrow."
            }, {
                "gur": "ਅਵਰਿ ਸਾਦ ਚਖਿ ਸਗਲੇ ਦੇਖੇ; ਮਨ! ਹਰਿ ਰਸੁ ਸਭ ਤੇ ਮੀਠਾ ਜੀਉ ॥੧॥",
                "eng": "I have seen and tasted all other flavors, but to my mind, the Subtle Essence of the Lord is the sweetest of all. ||1||"
            }, {
                "gur": "ਏਹੁ ਜਗੁ ਜਲਤਾ ਦੇਖਿ ਕੈ; ਭਜਿ ਪਏ ਸਤਿਗੁਰ ਸਰਣਾ ॥",
                "eng": "Seeing this world on fire, I rushed to the Sanctuary of the True Guru."
            }, {
                "gur": "ਸਤਿਗੁਰਿ ਸਚੁ ਦਿੜਾਇਆ; ਸਦਾ ਸਚਿ ਸੰਜਮਿ ਰਹਣਾ ॥",
                "eng": "The True Guru has implanted the Truth within me; I dwell steadfastly in Truth and self-restraint."
            }, {
                "gur": "ਸਤਿਗੁਰ ਸਚਾ ਹੈ ਬੋਹਿਥਾ; ਸਬਦੇ ਭਵਜਲੁ ਤਰਣਾ ॥੬॥",
                "eng": "The True Guru is the Boat of Truth; in the Word of the Shabad, we cross over the terrifying world-ocean. ||6||"
            }, {
                "gur": "ਲਖ ਚਉਰਾਸੀਹ ਫਿਰਦੇ ਰਹੇ; ਬਿਨੁ ਸਤਿਗੁਰ ਮੁਕਤਿ ਨ ਹੋਈ ॥",
                "eng": "People continue wandering through the cycle of 8.4 million incarnations; without the True Guru, liberation is not obtained."
            }, {
                "gur": "ਪੜਿ ਪੜਿ ਪੰਡਿਤ ਮੋਨੀ ਥਕੇ; ਦੂਜੈ ਭਾਇ ਪਤਿ ਖੋਈ ॥",
                "eng": "Reading and studying, the Pandits and the silent sages have grown weary, but attached to the love of duality, they have lost their honor."
            }, {
                "gur": "ਸਤਿਗੁਰਿ ਸਬਦੁ ਸੁਣਾਇਆ; ਬਿਨੁ ਸਚੇ ਅਵਰੁ ਨ ਕੋਈ ॥੭॥",
                "eng": "The True Guru teaches the Word of the Shabad; without the True One, there is no other at all. ||7||"
            }, {
                "gur": "ਜੋ ਸਚੈ ਲਾਏ, ਸੇ ਸਚਿ ਲਗੇ; ਨਿਤ ਸਚੀ ਕਾਰ ਕਰੰਨਿ ॥",
                "eng": "Those who are linked by the True One are linked to Truth. They always act in Truth."
            }, {
                "gur": "ਤਿਨਾ ਨਿਜ ਘਰਿ ਵਾਸਾ ਪਾਇਆ; ਸਚੈ ਮਹਲਿ ਰਹੰਨਿ ॥",
                "eng": "They attain their dwelling in the home of their own inner being, and they abide in the Mansion of Truth."
            }, {
                "gur": "ਨਾਨਕ, ਭਗਤ ਸੁਖੀਏ ਸਦਾ; ਸਚੈ ਨਾਮਿ ਰਚੰਨਿ ॥੮॥੧੭॥੮॥੨੫॥",
                "eng": "O Nanak, the devotees are happy and peaceful forever. They are absorbed in the True Name. ||8||17||8||25||"
            }, {
                "gur": "ਜਾ ਕਉ ਮੁਸਕਲੁ ਅਤਿ ਬਣੈ; ਢੋਈ ਕੋਇ ਨ ਦੇਇ ॥",
                "eng": "When you are confronted with terrible hardships, and no one offers you any support,"
            }, {
                "gur": "ਲਾਗੂ ਹੋਏ ਦੁਸਮਨਾ; ਸਾਕ ਭਿ ਭਜਿ ਖਲੇ ॥",
                "eng": "when your friends turn into enemies, and even your relatives have deserted you,"
            }, {
                "gur": "ਸਭੋ ਭਜੈ ਆਸਰਾ; ਚੁਕੈ ਸਭੁ ਅਸਰਾਉ ॥",
                "eng": "and when all support has given way, and all hope has been lost -"
            }, {
                "gur": "ਚਿਤਿ ਆਵੈ ਓਸੁ ਪਾਰਬ੍ਰਹਮੁ; ਲਗੈ ਨ ਤਤੀ ਵਾਉ ॥੧॥",
                "eng": "if you then come to remember the Supreme Lord God, even the hot wind shall not touch you. ||1||"
            }, {
                "gur": "ਸਾਹਿਬੁ, ਨਿਤਾਣਿਆ ਕਾ ਤਾਣੁ ॥",
                "eng": "Our Lord and Master is the Power of the powerless."
            }, {
                "gur": "ਆਇ ਨ ਜਾਈ, ਥਿਰੁ ਸਦਾ; ਗੁਰ ਸਬਦੀ ਸਚੁ ਜਾਣੁ ॥੧॥ ਰਹਾਉ ॥",
                "eng": "He does not come or go; He is Eternal and Permanent. Through the Word of the Guru's Shabad, He is known as True. ||1||Pause||"
            }, {
                "gur": "ਚਿਤਿ ਆਵੈ ਓਸੁ ਪਾਰਬ੍ਰਹਮੁ; ਤਾ ਨਿਹਚਲੁ ਹੋਵੈ ਰਾਜੁ ॥੨॥",
                "eng": "if you then come to remember the Supreme Lord God, you shall obtain the eternal kingdom. ||2||"
            }, {
                "gur": "ਚਿਤਿ ਆਵੈ ਓਸੁ ਪਾਰਬ੍ਰਹਮੁ; ਤਨੁ ਮਨੁ ਸੀਤਲੁ ਹੋਇ ॥੩॥",
                "eng": "if you come to remember the Supreme Lord God, then your body and mind shall be cooled and soothed. ||3||"
            }];
    }
    QuoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuoteService);
    return QuoteService;
}());

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotes__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(qService, screen, shareservice) {
        this.qService = qService;
        this.screen = screen;
        this.shareservice = shareservice;
        this.screen = screen;
        this.shareservice = shareservice;
        this.mode = true;
        this.qService = qService;
        this.quotes = qService.quotes;
        var localQuotes = window.localStorage.getItem('quotes');
        if (localQuotes) {
            this.quotes = JSON.parse(localQuotes);
        }
        this.next();
    }
    HomePage.prototype.share = function () {
        var sservice = this.shareservice;
        this.screen.URI(60).then(function (a) {
            sservice.share("Download App - https://goo.gl/caEjFB", "Download App - https://goo.gl/caEjFB", a.URI);
            console.log(a);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.next = function () {
        var index = Math.floor(Math.random() * this.quotes.length);
        this.quote = this.quotes[index];
    };
    /*Quotes processor for http://www.srigranth.org/servlet/gurbani.gurbani?Action=Page&g=2&h=0&r=0&t=1&p=0&k=0&Param=70*/
    HomePage.prototype.processQuotes = function () {
        var aa = [];
        var eles = document.querySelectorAll('body > center:nth-child(10) > table > tbody > tr > td > table > tbody > tr');
        for (var i in eles) {
            var e = eles[i];
            if (e.querySelectorAll) {
                var fontse = e.querySelectorAll('font');
                aa.push({ "gur": fontse[0].innerText, "eng": fontse[1].innerText });
            }
        }
        return aa;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/apuravchauhan/git/baba-ji-app/src/pages/home/home.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button menuToggle ion-button icon-only [ngClass]="\'day\'+mode">\n        <ion-icon name="ios-menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title [ngClass]="\'day\'+mode">BABA JI</ion-title>\n    <ion-buttons end>\n      <ion-toggle [(ngModel)]="mode" checked="{{mode}}"></ion-toggle>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="\'dayback\'+mode">\n  <div class="pollution-back">\n    <img id="babaji" src="assets/imgs/babaji3.png">\n    <div class="loader loader1"></div>\n    <div class="loader loader2"></div>\n  </div>\n  <div class="aqi-status">\n    <div class="aqi-readable" *ngIf="quote">\n\n      <div class="gurmukhi" [ngClass]="\'day\'+mode" padding>{{quote.gur}}</div>\n      <div class="english" style="padding:0 16px 16px 16px">{{quote.eng}}</div>\n      <div>\n      <button class="quote-next" ion-button round (click)="next()">\n        <span style="margin-right: 20px;\n    letter-spacing: 3px;\n    font-size: 12px;">NEXT</span>\n        <ion-icon name="ios-arrow-round-forward"></ion-icon>\n      </button>\n      <button class="quote-next" ion-button round (click)="share()" style="width:30px;padding:0 2.2rem">\n        <ion-icon name="md-share"></ion-icon>\n      </button>\n    </div>\n  </div>\n\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"/Users/apuravchauhan/git/baba-ji-app/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__quotes__["a" /* QuoteService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__quotes__["a" /* QuoteService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screenshot__["a" /* Screenshot */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { mode: 'ios' }, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_quotes__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(qService, platform, statusBar, splashScreen, loader, http) {
        this.qService = qService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loader = loader;
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.http = http;
        this.qService = qService;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.sync = function () {
        var _this = this;
        var url = "https://gist.githubusercontent.com/apuravchauhan/2cc6cf8e222d638fa3be954cbfb13cba/raw/261efcebd69961fd064453935e70a4605e3b3922/gurbani-quotes.json";
        this.http.get(url)
            .toPromise()
            .then(function (response) {
            var newQuotes = response.json();
            var quotes = newQuotes.concat(_this.qService.quotes);
            window.localStorage.setItem('quotes', JSON.stringify(quotes));
        })
            .catch(function (error) {
            console.log(error.json());
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/apuravchauhan/git/baba-ji-app/src/app/app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item  (click)="sync()">\n        Download More\n      </button>\n    </ion-list>\n  </ion-content>\n  <ion-footer class="aqi-footer">\n    <ion-toolbar>\n      <ion-title class="aqi-left" padding><a href="https://twitter.com/apuravchauhan">@apuravchauhan</a></ion-title>\n      <ion-buttons end>\n        <a ion-button icon-only target="_blank" href="https://twitter.com/apuravchauhan">\n          <ion-icon name="logo-twitter"></ion-icon>\n        </a>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/Users/apuravchauhan/git/baba-ji-app/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__pages_home_quotes__["a" /* QuoteService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__pages_home_quotes__["a" /* QuoteService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map