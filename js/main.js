/* Treehouse Techdegree - Full Stack Javascript
Cameron O'Brien
Project 04
Tic Tac Toe
*/

// IIFE used to run immediately and keep variables off global scope
(function() {

  const startScreen = '<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>';
  const winnerScreen = '<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>';

  const player1 = document.querySelector('#player1');
  const player2 = document.querySelector('#player2');

  let winner = "";
  let moveCount = 0;

  const box = document.querySelectorAll('.box');
  const boxes = document.querySelectorAll('.boxes');

  $('body').append(startScreen);
  $('#start').hide();
  $('#board').hide();
  $('body').append(winnerScreen);
  $('#finish').hide();
// When start button is clicked show / hide content and initiate game
  const gameStart = function() {
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
        playGame();
      });
    };
// Function runs every turn for a player and checks wins
  const playerAction = function() {
    moveCount ++;
    console.log(moveCount)
    checkWin();
    checkTie();
    playerTurn();
  }
// Function to control player mouse hovers and show player svg
  const playGame = function() {
      $('.box').each(function(){
        $(this).mouseenter(function(){ 
          if ( $(player1).hasClass("active")) {
            this.style.backgroundImage = "url('img/o.svg')";
          } else {
            this.style.backgroundImage = "url('img/x.svg')";
          }
        });
        $(this).mouseleave(function(){ 
          this.style.backgroundImage = "none";
        });
      });
      $('.box').click(function() { 
        if (player1.classList.contains("active")) {
          if ( this.classList.contains("box-filled-1") === false && this.classList.contains("box-filled-2") === false ) {
            this.classList.add('box-filled-1');
            this.style.backgroundImage = "url('img/o.svg')";
            $(this).unbind('mouseenter mouseleave');
            playerAction();
          }
        } else if (player2.classList.contains("active")) {
          if ( this.classList.contains("box-filled-1") === false && this.classList.contains("box-filled-2") === false ) {
            this.classList.add('box-filled-2');
            this.style.backgroundImage = "url('img/x.svg')";
            $(this).unbind('mouseenter mouseleave');
            playerAction();
          }
        } 
      }); 
    };
// To switch between who is the active player
  const playerTurn = function() {
    if ($(player1).hasClass('active')) {
      $(player1).removeClass('active');
      $(player2).addClass('active');
    } else {
      $(player2).removeClass('active');
      $(player1).addClass('active');
    }
  };
// Function to show winning player message
  const winMessage = function(rowOne, rowTwo, rowThree) {
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].children[rowOne].classList.contains('box-filled-2') && boxes[i].children[rowTwo].classList.contains('box-filled-2') && boxes[i].children[rowThree].classList.contains('box-filled-2')) {
            $("#finish").removeClass("screen-win-one");
            $("#finish").removeClass("screen-win-tie");
            $(".message").html("Player 2 wins!");
            $("#finish").addClass("screen-win-two");
            $("#finish").show();
            $("#board").hide();
            console.log("Winner X");
            return true;
      } else if (boxes[i].children[rowOne].classList.contains('box-filled-1') && boxes[i].children[rowTwo].classList.contains('box-filled-1') && boxes[i].children[rowThree].classList.contains('box-filled-1')) {  
            $("#finish").removeClass("screen-win-two");
            $("#finish").removeClass("screen-win-tie");
            $(".message").html("Player 1 wins!");
            $("#finish").addClass("screen-win-one");
            $("#finish").show();
            $("#board").hide();
            console.log("Winner O");
      } else {
          winner = false;
      }
    }
  };
// Function to check for winning combinations on grid 
  const checkWin = function() {
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('click', () => {
            if (winMessage(0, 1, 2) || winMessage(3, 4, 5) || winMessage(6, 7, 8) || winMessage(0, 3, 6) || winMessage(1, 4, 7) || winMessage(2, 5, 8) || winMessage(0, 4, 8) || winMessage(2, 4, 6)) {
            } 
        });
      }
  }
// Function to check for tie and if the board is full and no winner
  const checkTie = function() {
    if ( moveCount >= 9  ) {
                console.log("Tie");
                console.log(moveCount);
                $("#finish").removeClass("screen-win-one");
                $("#finish").removeClass("screen-win-two");
                $(".message").html("It's a Tie!");
                $("#finish").addClass("screen-win-tie");
                $("#finish").show();
                $("#board").hide();
                moveCount = 0;
        }
  };

  gameStart();

})();