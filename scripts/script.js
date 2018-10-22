/*
$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".




array.map(function) for each eement le palica la funcion pasando el valor como parametro

array.filter(function(val){
reurn val !== "tu puta   regresa un arreglo con todos los valores que no sean tu puta
})




*/
// main

var coleurs = ["#000000","#ff00ff","#ff0000","#ffffff"];
var day = false;
$('document').ready(function () {
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Grenoble,fr&appid=7e604a1c1607d5b516348ed932971d94&lang=fr', true);
 request.send();
  request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
          $('#weather').text("Le climat à Grenoble est actuellement: '"+data.weather[0].description+"'");
          console.log(data);
        } else {
          console.log('error');
        }
    }
}
      // Create a request variable and assign a new XMLHttpRequest object to it.
);

function chngStyle(){
  if(day){
    $('#bonjour').text("Bonjour");
    chngColor(day,0);
   $("#cssStyle").prop("href","./css/style.css")
    console.log(""+coleurs[0]);
}
  else{
    $('#bonjour').text("bonsoir");
    chngColor(day,coleurs.length-1);
   $("#cssStyle").prop("href","./css/darkStyle.css")
    console.log(""+coleurs[coleurs.length-1]);
  }
  day = !day;
};
function chngColor (bol,num){
//console.log(coleurs[num],num);
if (!bol){
  if (num>=0) {
  $('body').css('background', coleurs[num]);
    window.setTimeout(function(){chngColor(bol,num-1);},1000/coleurs.length);
  }
}
  else{
    if(num<coleurs.length){
      $('body').css('background', coleurs[num]);
        window.setTimeout(function(){chngColor(bol,num+1);},1000/coleurs.length);
    }
  }

}

/*
var objeto ={
  firstName : "nombre",
  lastName : "apellido",
  edad :32,
  papas : [{papa :"nombre papa"},{mama :"nombre mama"}]
};

console.log($(".title").text());
*/
