# fingilish
convert fingilish to farsi  
example:
```javascript
const fn = require('fingilish');
// common words are in dictionary
fn('salam'); // => سلام
// an example of incorrect usage
fn('soraya'); // => سری
fn('sorayaa'); // => سریا
// correct your dictation errors using numbers
fn('s2orayaa'); // => ثریا
// use strict method that does not use dictionary
fn('$salam'); // => سلم
// and finally , all in a sentence
fn.jomle('h2amidrez3aa $salaam , miaay berim biroon ba ham baazi konim ?')
// => حمیدرضا سلام ، میای بریم بیرون با هم بازی کنیم ؟
```
