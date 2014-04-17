function LetterChanges(str) {
var alf = "abcdefghijklmnopqrstuvwxyza  112233445566778899!!@@##$$%%^^&&**(())__--++==~~//::[[]]{{}}||\\";
var i = 0;
var str1 = str.toLowerCase();
var arr = [];
  while(i < str1.length) {
    arr.push(alf.charAt(alf.indexOf(str1[i])+1));
    i++;
  }
  
var arr1 = arr.toString().split(",").join("");
var arr2 = arr1.replace(/[a]/g,"A");
var arr3 = arr2.replace(/[e]/g,"E");
var arr4 = arr3.replace(/[i]/g,"I");
var arr5 = arr4.replace(/[o]/g,"O");
var arr6 = arr5.replace(/[u]/g,"U");
    
    return arr6;
  };   
LetterChanges(readline());           
