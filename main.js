/**********************************************/
/**********************************************/
/**** PROGETTO: ajax-quadratini - main.js *****/
/**********************************************/
/**********************************************/

$(document).ready(function () {
  for (var i = 0; i < 36; i++) {
    var clone = $('.quadratino.template').clone();
    clone.removeClass('template');
    var cloneHtml = clone.html();
    $('.quadratini').append(clone);
  }

  $('.quadratino').click(function () {

    var clickedSquare = $(this);

    if (!clickedSquare.hasClass('clicked')) {
      $.ajax({
        url: 'https://www.boolean.careers/api/random/int',
        method: 'GET',
        success: function (responseData) {
          var bgColor = (responseData.response <= 5) ? 'yellow' : 'green';
          clickedSquare.text(responseData.response).addClass(bgColor).addClass('clicked');
        },
        error: function (error) {
          alert(error);
        },
      });
    }

  });

});
