var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#9ACD32", "#CDC673", "#CDCDC1", "#00C78C", "#D02090"];
var quotes = [

["A resiliência não é apenas aceitar o novo, mas também adaptar-se a ele.", "Autor Desconhecid"],
["A adversidade revela o verdadeiro caráter de uma pessoa, e a resiliência molda o seu destino.", "Karen Kingsbury"],
["A resiliência é a capacidade de encontrar alegria nas adversidades.", "Karen Reivich"],
["Na estrada da vida, a resiliência é o combustível que nos mantém avançando.", "Autor Desconhecido"],
["A resiliência é a virtude que nos permite saltar de volta quando a vida nos derruba.", "Autor Desconhecido"],
["Quando enfrentamos desafios, nossa resiliência determina nossa capacidade de superá-los.", "Autor Desconhecido"],
["A resiliência é como um músculo: quanto mais a exercitamos, mais forte ela se torna.", "Autor Desconhecido"],
["A resiliência é a arte de manter o equilíbrio emocional em meio ao caos.", "Autor Desconhecid"],
["Nos momentos mais difíceis, a resiliência nos lembra que somos mais fortes do que imaginamos.", "Autor Desconhecido"],
["A resiliência não é apenas sobre sobreviver; é sobre florescer diante da adversidade.", "Karen Louise"]


];

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function openURL(url) {
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

$("document").ready(function() {

  var color = Math.floor(Math.random() * colors.length);
  var quote = Math.floor(Math.random() * quotes.length);
  var newquote = quotes[quote].slice(0, 1);
  var newauthor = quotes[quote][1];

  $("html body").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $("html body").css("background-color", colors[color]);
      $(".button").css("background-color", colors[colors]);
    });

  $(".quote-text").animate({
      opacity: 0
    }, 500,
    function() {
      $(this).animate({
        opacity: 1
      }, 500);
      $('#text').text(newquote);
      $('#author-text').text(newauthor);
    });

  $('#tweet-quote').on('click', function() {
    if (!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + newquote + '" - ' + newauthor + '\n' + 'App made by @SaifAliKhan24'));
    }
  });

  $("#new-quote").click(function() {
    color = Math.floor(Math.random() * colors.length);
    quote = Math.floor(Math.random() * quotes.length);
    newquote = quotes[quote].slice(0, 1);
    newauthor = quotes[quote][1];

    $("html body").animate({
        opacity: 0
      }, 500,
      function() {
        $(this).animate({
          opacity: 1
        }, 500);
        $("html body").css("background-color", colors[color]);
        $(".button").css("background-color", colors[color]);
      });

    $(".quote-text").animate({
        opacity: 0
      }, 500,
      function() {
        $(this).animate({
          opacity: 1
        }, 500);
        $('#text').text(newquote);
        $('#author-text').text(newauthor);
      });
  });
});