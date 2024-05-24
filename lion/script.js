var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#9ACD32", "#CDC673", "#CDCDC1", "#00C78C", "#D02090"];
var quotes = [
    ["De todos os bares de gim em todas as cidades de todo o mundo, ela entra no meu.", "Casablanca"],
    ["Vou fazer uma oferta que ele não poderá recusar.", "O Poderoso Chefão"],
    ["Não apenas fique parado e finja, comande e conquiste.", "Saif Ali"],
    ["Inspire. Não motive.", "Saif Ali"],
    ["Nunca subestime seu inimigo.", "Sun Tzu"],
    ["É melhor manter a boca fechada e dar a impressão de que você é estúpido do que abri-la e remover todas as dúvidas.", "Rami Belson"],
    ["A maioria das pessoas é tão feliz quanto decide ser.", "Abraham Lincoln"],
    ["Nunca interrompa seu inimigo quando ele está cometendo um erro.", "Napoleão Bonaparte"],
    ["Você consegue mais do que quer com uma palavra gentil e uma arma do que apenas com uma palavra gentil.", "Al Capone"],
    ["Escolha um trabalho que você goste e nunca terá que trabalhar um dia na sua vida.", "Confúcio"],
    ["Todos os trabalhos pagos absorvem e degradam a mente.", "Aristóteles"],
    ["A felicidade entra sorrateiramente por uma porta que você não sabia que deixou aberta.", "John Barrymore"],
    ["A vida é muito curta para estar solteiro.", "Saif Ali"],
    ["A resiliência tem seu tempo.", "Saif Ali"],
    ["A guerra só parece legal, mas tem gosto de sangue.", "Saif Ali"],
    ["Trabalhe duro até que seus ídolos se tornem seus rivais.", "Anônimo"],
    ["Fracasso é uma palavra desconhecida para mim.", "Jinnah"],
    ["Não deixe o hoje passar ou o amanhã chegar, a menos que e até que você tenha alcançado as metas de hoje e definido as metas de amanhã.", "Saif Ali"],
    ["Seu brilho é sua absorção.", "Saif Ali"],
    ["Não deixe uma marca, deixe uma impressão.", "Saif Ali"],
    ["O maior erro da humanidade - A Internet.", "Saif Ali"],
    ["Talvez haja cem razões para não te amar, mas há mil razões para não te odiar.", "Saif Ali"],
    ["Às vezes precisamos de palavras para explicar algo, usamos citações, mas quando precisamos de fatos citamos o Alcorão Sagrado.", "Saif Ali"],
    ["Grama - Morre em um dia, decompõe-se em uma semana, renasce em um mês.", "Saif Ali"],
    ["Não lamente. Tudo que você perde volta em outra forma.", "Rumi"],
    ["A ferida é o lugar onde a Luz entra em você.", "Rumi"],
    ["Os amantes não se encontram finalmente em algum lugar. Eles estão um no outro o tempo todo.", "Rumi"],
    ["Sua tarefa não é procurar pelo amor, mas apenas buscar e encontrar todas as barreiras dentro de você que você construiu contra ele.", "Rumi"],
    ["Quando você faz coisas com sua alma, você sente um rio se movendo em você, uma alegria.", "Rumi"],
    ["Por que você fica na prisão quando a porta está tão aberta?", "Rumi"],
    ["Isso é amor: voar em direção a um céu secreto, fazer cair cem véus a cada momento. Primeiro deixar a vida. Finalmente, dar um passo sem pés.", "Rumi"],
    ["Venda sua sagacidade e compre perplexidade.", "Rumi"],
    ["Todo mundo foi feito para algum trabalho específico, e o desejo por esse trabalho foi colocado em cada coração.", "Rumi"],
    ["Deixe o amante ser desprezível, louco, distraído. Alguém sóbrio se preocupará com os eventos que dão errado. Deixe o amante ser.", "Rumi"]

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