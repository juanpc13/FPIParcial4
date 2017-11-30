var ipDomain = "http://192.168.0.28:5000/";
document.getElementById("login").onsubmit = function(e){
  e.preventDefault(e);
  var pas = document.getElementById("contraSucursal").value;
  var user = document.getElementById("userSucursal").value;
  var data = {"contrasenaSucursal":pas, "userSucursal":user};
  $.ajax({
    url        : ipDomain+'login',
    dataType   : 'json',
    contentType: 'application/json; charset=UTF-8', // This is the money shot
    data       : JSON.stringify(data),
    type       : 'POST',
    }).done(function(response) {
        if (response != null) {
          var date = new Date();
          date.setTime(date.getTime() + (180 * 1000));
		  var expires = "; expires="+date.toGMTString();
		  document.cookie = "sucursal="+response.idSucursal+expires;
          location.href = "index";
          console.log("Ha Iniciado: "+response.nombreSucursal);
        }else {
          //poner modal aqui despues jejeje, ya vengo ah

          console.log("Ha ocurrido un error jeje");
        }
      });
}
