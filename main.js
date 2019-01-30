


// to run the sound.
var x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}

// for reset game it will reloading the page(Dom)
var resetGame = function () {
    // reset the  player variable to X
    player = "X";
    // reset all grid items .text to '' 
    $('.grid-item').text("");
    // reset the  table array to all '' 
    table = ['', '', '', '', '', '', '', '', '',]
}
var reset = $('#Reset').on('click', resetGame);




//make the user select the cell .
var player = "X";

function findCell(event) {
    if ($(event.target).text() === "") {
        // add player to screen
        $(event.target).text(player);
        // add player to table array
        table[event.target.id] = player

        theWiner();


        // change turn
        if (player === "X") {
            player = "O";
        } else {
            player = "X";

        }
    }
    
}



// //count the winer
var oInitWins = parseInt(localStorage.getItem("oWins")) || 0;
 var xInitWins = parseInt(localStorage.getItem("xWins")) || 0;

 let conutTheWiner = {
     O: oInitWins,
     X: xInitWins
};


//count the score.
 function countWinnerFunction(){
   if(player === "X"){
         localStorage.setItem("xWins", parseInt(++conutTheWiner["X"]));
          } else {
  localStorage.setItem("oWins", parseInt(++conutTheWiner["O"]));
     }
      $('#O').text(conutTheWiner['O']);
     $('#X').text(conutTheWiner['X']);
 }

// debugger;

// select the win

var table = ['', '', '', '', '', '', '', '', ''];
function theWiner() {
    // top row win
    if (table[0] === table[1] && table[0] === table[2] && table[0] !== '') {


       
countWinnerFunction()

        swal({
            title: 'Winner is ' + table[0],
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());

    }//second row
    else if (table[3] === table[4] && table[3] === table[5] && table[3] !== '') {
     
        countWinnerFunction()

        swal({
            title: 'Winner is ' + table[3],
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());
    }
    //last row
    else if (table[6] === table[7] && table[6] === table[8] && table[6] !== '') {
       

        countWinnerFunction()

       

        swal({
            title: 'Winner is ' + table[6],
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());
    }
    //frist colume
    else if (table[0] === table[3] && table[0] === table[6] && table[0] !== '') {

        countWinnerFunction()

     

        //popup massage.
        swal({
            title: 'Winner is ' + table[0],
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());

    }
    //second colume
    else if (table[1] === table[4] && table[1] === table[7] && table[1] !== '') {

        countWinnerFunction()
       
       
        swal({
            title: 'Winner is ' + table[1],
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());
    }
    //last colume
    else if (table[2] === table[5] && table[2] === table[8] && table[2] !== '') {

        countWinnerFunction()
        
        
        swal({
            title: 'Winner is ' + table[2],
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());
    }
    //the last thing .
    else if (table[0] === table[4] && table[0] === table[8] && table[0] !== '') {
        countWinnerFunction()
    
      
        swal({
            title: 'Winner is ' + table[0],
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());
    }
    else if (table[2] === table[4] && table[2] === table[6] && table[2] !== '') {

        countWinnerFunction()
       
 
        swal({
            title: 'Winner is ' + table[2],
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());

    } else if (!table.includes("")) {

        swal({
            title: 'Tie ',
            text: '',
            //icon: "success",
            button: "New Game!",
        }).then(() => newGame());

    }


    //make new game
    function newGame() {
        // reset the  player variable to X
        player = "X";
        // reset all grid items .text to '' 
        $('.grid-item').text("");
        // reset the  table array to all '' 
        table = ['', '', '', '', '', '', '', '', '',]


    }
    $('.swal-button-container').on('click', newGame);
}



function clearScore() {
    // window.localStorage.clear();
     localStorage.clear();
     conutTheWiner = {
        O: 0,
        X: 0
   };
   $("#X").text("0");
   $("#O").text("0");
     //console.log(`Score cleared, new score\n${localStorage}`);

 }
 $('.grid-item').on('click', findCell);

//to start the game
// function startTheGame() {
//     $('.grid-item').on('click', findCell);
// }

// $('#StartGame').on('click', startTheGame);
$('#clear-score').on('click', clearScore);





//play with computer.
// function playWithComputer(){

//     $(event.target).text(player);
//         // add player to table array
//      table[event.target.id] = player
//     // create variable emptySpaces for new array where we will store the empty spaces
//     var emptySpaces=['', '', '', '', '', '', '', '', ''];
//     // loop through your table and add all empty space indexes to new array
//     for(var i=0;i<table.length;i++){
//         if(table[i]===""){
//             var randomcell = Math.floor(Math.random()*table.length);
//     }
//      var randomcell = Math.floor(Math.random()*table.length);

//     //  while(table[randomcell] !== ""){
//     //     var randomcell = Math.floor(Math.random()*table.length);
//     //     table[randomcell] = player;
//     //  }
//     //  do {
//     //     i = i + 1;
//     //     result = result + i;
//     //   } while (i < 5);


// findCell();
// theWiner()
// }}

// $('.play-with-computer').on('click',playWithComputer)
