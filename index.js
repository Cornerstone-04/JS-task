function go() {
  var str=document.getElementById("t1").value;
  document.getElementById("p0").innerHTML="The Numbers of characters " + str.length;
  document.getElementById("p1").innerHTML="The Numbers of Vowels " + countVowels(str);
  document.getElementById("p2").innerHTML="The Numbers of Consonants " + countConsonants(str);
}
function countVowels(str) {
    var vowel="aeiouAEIOU";
    var vowelCount=0;
    for(var x=0;x<str.length;x++){
        for(var y=0;y<vowel.length;y++){
            if(str[x]==vowel[y])
            {
                vowelCount++;
            }
        }
    }
    return vowelCount
}
function countConsonants(str) {
    var consonant="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    var consonantCount=0;
    for(var x=0;x<consonant.length;x++){
        for(var z=0;z<consonant.length;z++){
            if(str[x]==consonant[z])
            {
                consonantCount++;
            }
        }
    }
    return consonantCount
}
