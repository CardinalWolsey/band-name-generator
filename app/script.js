console.log('connected');

$(function() {

  //submit an adjective AJAX call and DOM update
  $('#submitAdj').on('submit', function(e) {
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

  //submit a noun AJAX call and DOM update
  $('#submitNoun').on('submit', function(e) {
    e.preventDefault();

    var noun = $('input[name=noun]').val();
    var nounPost;

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    }
  });

  //submit a verb AJAX call and Dom update
  $('#submitVerb').on('submit', function(e) {
    e.preventDefault();

    var verb = $('input[name=verb]').val();
    var verbPost;

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    }
  });

  //This is the band name generator button
  $('#bandName').click(function() {
    $.get('adjective', function (response) {
      $('#adjective').text(response.word);
    });

    $.get('noun', function (response) {
      $('#noun').text(response.word);
    });

    $.get('verb', function (response) {
      $('#verb').text(response.word);
    });
  });
});
