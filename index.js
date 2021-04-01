function myFunction() {
  var str = "Cornerstone";
  var n = str.length;
  document.getElementById("name").innerHTML = 'Numbers of Characters = ' + n;

  
}

function go() {

  var str=document.getElementById("t1").value;
  var vowel="aeiouAEIOU";
  var consonant="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  var ctr=0;
  var con=0;
 

  for(var x=0;x<str.length;x++){
      for(var y=0;y<vowel.length;y++){
          if(str[x]==vowel[y])
          {
              ctr++;
          }
      }
  }
  for(var x=0;x<consonant.length;x++){
      for(var z=0;z<consonant.length;z++){
          if(str[x]==consonant[z])
          {
              con++;
          }
      }
  }
  document.getElementById("p1").innerHTML="The Numbers of Vowels " + ctr;
  document.getElementById("p2").innerHTML="The Numbers of Consonants " + con;
}
