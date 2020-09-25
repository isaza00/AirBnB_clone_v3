const $ = window.$;
$(function () {
  function checkers () {
    $('div.amenities li input:checked').map(function () {
      $('div.amenities h4').text($(this).attr('data-name'));
      console.log($(this).attr('data-name'));
    });
  }
  checkers();
  $('div.amenities li input').change(function () {
    checkers();
  });
});
