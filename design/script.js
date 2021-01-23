$(document).ready(function () {
  $.getJSON("mockRoutes.json", function (obj) {
    var newHTML = ''
    obj.routes.forEach(function (route) {
      var datedAt = new Date(route.created_at)
      var optionsLocale = { year: 'numeric', month: 'long', day: 'numeric' }
      var optionsLocaleTime = { hour: '2-digit', minute: '2-digit' }
      var dateStrinig = datedAt.toLocaleDateString('es-MX', optionsLocale)
      var dateTimeStrinig = datedAt.toLocaleTimeString('es-MX', optionsLocaleTime)
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
              <p class= "element__text">${dateStrinig}</p>
            </div>
            <div class="item__element c1">
              <p class= "element__title">Inició</p>
              <p class= "element__text">${dateTimeStrinig}</p>
            </div>
            <div class="item__element c2">
              <p class= "element__title">Terminó</p>
              <p class= "element__text" id="endTime_${route.id}">-</p>
            </div>
            <div class="item__element c1">
              <p class= "element__title">Entregas</p>
              <p class= "element__text">${route.deliveries}</p>
            </div>
            <div class="item__element c3">
              <button class="element__button left" id="status_${route.id}">En Ruta</button>
            </div>
          </div>
        </li>`
    })

    $("ul.container__list-item").html(newHTML)
  });
});