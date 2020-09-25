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
});
