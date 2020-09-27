const $ = window.$;
$(function () {
  const lili = {};
  function check () {
    $('div.amenities li input').map(function () {
      if ($(this).is(':checked')) {
        lili[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete lili[($(this).attr('data-id'))];
      }
      $('div.amenities h4').html(Object.values(lili).join(', ') || ' ');
    });
  }
  check();
  $('div.amenities li input').change(function () {
    check();
  });
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
  $.ajax({
    type: 'POST',
    data: '{}',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    success: function (response) {
      console.log(response);
      for (const place of response) {
        $('section.places').append(`
          <article>
            <div class="title_box">
              <h2>` + place.name + `</h2>
            <div class="price_by_night">` + place.price_by_night + `</div>
            </div>
            <div class="information">
              <div class="max_guest">` + place.max_guest + `Guests </div>
                <div class="number_rooms">` + place.number_rooms + `</div>
                <div class="number_bathrooms">` + place.number_bathrooms + `</div>
            </div>
            <div class="user">
              <b>Owner:</b> first name last name
            </div>
            <div class="description">` + place.description + `</div>
            </article>
        `);
      }
    }
  });
});
