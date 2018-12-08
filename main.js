const rules = [
['aa','ا'],
['h2','ح'],
['h1','ه'],
['sh','ش'],
['kh','خ'],
['zh','ژ'],
['ch','چ'],
['gh','ق'],
["g'h",'غ'],
['s2','ث'],
['s3','ص'],
['z2','ذ'],
['z3','ض'],
['z4','ظ'],
['t2','ط'],
["'",'ع'],
['a',''],
['b','ب'],
['c',''],
['d','د'],
['e',''],
['f','ف'],
['g','گ'],
['h','ه'],
['i','ی'],
['j','ج'],
['k','ک'],
['l','ل'],
['m','م'],
['n','ن'],
['o',''],
['p','پ'],
['q',''],
['r','ر'],
['s','س'],
['t','ت'],
['u',''],
['v','و'],
['w',''],
['x','خ'],
['y','ی'],
['z','ز'],
];

const words = require('./words');

const f = function (word){
    if (words[word]) return words[word];
    rules.forEach(rule=>{
        word = word.replace(new RegExp(rule[0],'g'),rule[1]);    
    });
    return word;
}

f.jomle = x=> x.split(' ').map(f).join(' ');
module.exports = f;


