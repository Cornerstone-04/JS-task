function myFunction() {
  var str = "Cornerstone";
  var n = str.length;
 
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
  document.getElementById("p0").innerHTML="Numbers of characters \= " + str.length;
  document.getElementById("p1").innerHTML="Numbers of vowels \= " + ctr;
  document.getElementById("p2").innerHTML="Numbers of consonants \= " + con;
}
