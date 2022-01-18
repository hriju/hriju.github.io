var flag=0;
function biggerText(){
    if (flag == 0){
        document.getElementById("textval").style.fontSize = "24pt";
         flag=1;
    }
    else{
        document.getElementById("textval").style.fontSize = "";
         flag=0;
    }
}
const checkbox = document.getElementById('checkbox')
function changecolor()
{
  if (document.getElementById('checkbox').checked) 
  {
      document.getElementById("textval").style.fontWeight="bold";
      document.getElementById("textval").style.color="green";
      document.getElementById("textval").style.textDecoration="underline";
  } else {
      document.getElementById("textval").style.color="black";
      document.getElementById("textval").style.textDecoration="";
      document.getElementById("textval").style.fontWeight="";
      
  }
}

function replaceWithMalkovitch(){
    var textarea=document.getElementById("textval");
    if(textarea.value.length >= 5){
        textarea.value="Malkovich";
    }
}