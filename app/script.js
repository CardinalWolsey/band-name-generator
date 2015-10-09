console.log('connected');

$(function() {

  $('#name').click(function() {
    $.get("adjective", function (response) {
      $('#adjective').text(response.word);
    });
  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();

    var adjective = $('input[name=adjective]').val();
    var adjPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post('adjective', adjPost, function(response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

  });

  // $('#person').click(function() {
  //   $.get('http://localhost:3000/person', function (response) {
  //     $('#personSpan').text(response);
  //   });
  // });

});
