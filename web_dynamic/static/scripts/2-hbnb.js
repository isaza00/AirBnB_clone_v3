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
});
