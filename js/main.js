

(function() {

  const startScreen = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>';
  const winnerScreen = '<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';

  const player1 = document.querySelector('#player1');
  const player2 = document.querySelector('#player2');

  let winner = "";
  let moveCount = 0;

  let box = document.querySelectorAll('.box');
  let boxes = document.querySelectorAll('.boxes');

  $('body').append(startScreen);
  $('#start').hide();
  // start.style.display === 'none';
  $('#board').hide();
  $('body').append(winnerScreen);
  $('#finish').hide();


  function gameStart() {
      $('#start').show();
      $('.button').on('click', () => {
        $('#start, #finish').hide();
        $('#board').show();
        moveCount = 0;
        $(".box").each(function () {
          this.style.backgroundImage = "none";
          $(this).removeClass("box-filled-1");
          $(this).removeClass("box-filled-2");
        });
        $('li.players').removeClass('active');
        $(player1).addClass('active');
      });
    };

  gameStart();

})();