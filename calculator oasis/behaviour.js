let string=" ";
let temp=" ";
  var text;
  document.getElementById("b0").addEventListener("click", displayb);
  function displayb(){
    document.getElementById('demo').innerHTML+='0';
    let c='0';
    string=string+c;

  }
  document.getElementById("clear").addEventListener("click", displayclear);
  function displayclear(){
    document.getElementById('demo').innerText="";
    string=" ";
  }
  document.getElementById("b+").addEventListener("click", displayplus);
  function displayplus(){
    document.getElementById('demo').innerHTML+='+';
    let c='+';
    string=string+c;

  }
  document.getElementById("b1").addEventListener("click", displayb1);
  function displayb1(){
    document.getElementById('demo').innerHTML+='1';
    let c='1';
    string=string+c;

  }
  document.getElementById("b2").addEventListener("click", displayb2);
  function displayb2(){
    document.getElementById('demo').innerHTML+='2';
    let c='2';
    string=string+c;

  }
  document.getElementById("b3").addEventListener("click", displayb3);
  function displayb3(){
    document.getElementById('demo').innerHTML+='3';
    let c='3';
    string=string+c;
  }
  document.getElementById("b-").addEventListener("click", displayminus);
  function displayminus(){
    document.getElementById('demo').innerHTML+='-';
    let c='-';
    string=string+c;
  }
  document.getElementById("b4").addEventListener("click", displayb4);
  function displayb4(){
    document.getElementById('demo').innerHTML+='4';
    let c='4';
    string=string+c;
  }
  document.getElementById("b5").addEventListener("click", displayb5);
  function displayb5(){
    document.getElementById('demo').innerHTML+='5';
    let c='5';
    string=string+c;
  }
  document.getElementById("b6").addEventListener("click", displayb6);
  function displayb6(){
    document.getElementById('demo').innerHTML+='6';
    let c='6';
    string=string+c;
  }
  document.getElementById("bx").addEventListener("click", displaybx);
  function displaybx(){
    document.getElementById('demo').innerHTML+='*';
    let c='*';
    string=string+c;
  }
  document.getElementById("b7").addEventListener("click", displayb7);
  function displayb7(){
    document.getElementById('demo').innerHTML+='7';
    let c='7';
    string=string+c;
  }
  document.getElementById("b8").addEventListener("click", displayb8);
  function displayb8(){
    document.getElementById('demo').innerHTML+='8';
    let c='8';
    string=string+c;
  }
  document.getElementById("b9").addEventListener("click", displayb9);
  function displayb9(){
    document.getElementById('demo').innerHTML+='9';
    let c='9';
    string=string+c;
  }
  document.getElementById("b/").addEventListener("click", displaydivide);
  function displaydivide(){
    document.getElementById('demo').innerHTML+='/';
    let c='/';
    string=string+c;
  }


document.getElementById("b").addEventListener("click",displayresult);
function displayresult()
{
  let result=eval(string);
  document.getElementById('demo').innerHTML=result;
}
