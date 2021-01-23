function formatDate (dateString, time = false) {
  var optionsLocale = { year: 'numeric', month: 'long', day: 'numeric' };
  var optionsLocaleTime = { hour: '2-digit', minute: '2-digit' };
  var newDate = new Date(dateString);
  var result = '-';
  if(time) {
    result = newDate.toLocaleTimeString('es-MX', optionsLocaleTime);
  } else {
    result = newDate.toLocaleDateString('es-MX', optionsLocale);
  }
  return result
}

$(document).ready(function () {
  $.getJSON("mockRoutes.json", function (obj) {
    var newHTML = ''
    obj.routes.forEach(function (route) {
      newHTML += `<li class="list__item blue" id="route_${route.id}">
          <div class="ul__item">
            <div class="item__element c1">
              <p class= "element__title">Ruta</p>
              <p class= "element__text">RG0${route.id}</p>
            </div>
            <div class="item__element c4">
              <p class= "element__title">Conductor</p>
              <p class= "element__text">${route.driver_name}</p>
            </div>
            <div class="item__element c3">
              <p class= "element__title">Creada</p>
              <p class= "element__text">${formatDate(route.created_at)}</p>
            </div>
            <div class="item__element c1">
              <p class= "element__title">Inició</p>
              <p class= "element__text">${formatDate(route.created_at, true)}</p>
            </div>
            <div class="item__element c2">
              <p class= "element__title">Terminó</p>
              <p class= "element__text" id="endTime_${route.id}">-</p>
            </div>
            <div class="item__element c1">
              <p class= "element__title">Entregas</p>
              <p class= "element__text" id="deliveries_${route.id}">${route.deliveries}</p>
            </div>
            <div class="item__element c3">
              <button class="element__button left" id="status_${route.id}">En Ruta</button>
            </div>
          </div>
        </li>`
    })

    $("ul.container__list-item").html(newHTML);
  });

  websocket = new WebSocket("ws://localhost:8080");
  websocket.onmessage = function (evt) { onMessage(evt) };

});

function onMessage(evt) {
  var data = JSON.parse(evt.data);
  if (data.route_id) {
    if (data.status != 'onroute'){
      $(`#status_${data.route_id}`).addClass('btn-green').html('Completada');
      $(`#route_${data.route_id}`).addClass('green');
    } 
    $(`#deliveries_${data.route_id}`).html(data.deliveries);
    $(`#endTime_${data.route_id}`).html(formatDate(data.completed_at, true));
  }
}