
    let score =JSON.parse(localStorage.getItem('score')) ||{
      wins:0,
      losses:0,
      ties:0
    };
    /*if(score === null){
      score = {
        wins :0,
        losses: 0,
        ties:0
      };
    }
      */
       
    let isAutoPlaying = false;
    let intervalId;
    

    function autoplay(){
      if(!isAutoPlaying){
        intervalId=setInterval(()=>{
        const playerMove=pickComputerMove();
        playGame(playerMove);
      },1000);
      isAutoPlaying=true;
      }else{
       clearInterval(intervalId);
       isAutoPlaying = false;
      }
     
    }

      updateScoreElement();
      
      // here we can use onclick attribute also but now we r doing with advanced function addEventListener
      document.querySelector('.js-rock-button').addEventListener('click',()=>{
        playGame('rock');
      });
        
      // if we press any key on keyboard ..
      // event will let us know that which key we pressed
      document.body.addEventListener('keydown',(event)=>{  
          if (event.key=='r') {
            playGame('rock');
          }else if(event.key=='p'){
           playGame('paper');
          }else if(event.key=='s'){
            playGame('scissor');
          }
      });

    function playGame(playerMove){
      computerMove = pickComputerMove();
        

        let result = '';
        if (playerMove === 'scissor'){
          if (computerMove === 'rock'){
            result = 'You Lose!';
        }else if(computerMove ==='paper'){
            result = 'You Won.';
        }else{
          result = 'Tie';
        }

        }else if (playerMove === 'paper'){
          if (computerMove === 'rock'){
           result = 'You Won.';
          }else if(computerMove ==='paper'){
          result = 'Tie';
          }else{
           result = 'You Lose!';
          }
          
        }else{
          if (computerMove === 'rock'){
          result = 'Tie';
          }else if(computerMove ==='paper'){
         result = 'You Lose!';
          }else{
          result = 'You Won.';
          }
        }
          
           if (result === 'You Won.') {
            score.wins +=1;
           }else if (result === 'You Lose!'){
            score.losses +=1;
           }else if(result === 'Tie' ){
            score.ties +=1;
           }
            
           localStorage.setItem('score',JSON.stringify(score)); // we use JSON.strigify here bcoz score is an obj and we have to chnge it to string

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `You pick
     <img src="images/${playerMove}-emoji.png" class="move-icon">,
     Computer pick 
     <img src="images/${computerMove}-emoji.png"
     class="move-icon" >. `;

         
    }


   let computerMove = ' ';

     function updateScoreElement(){
       document.querySelector('.js-score').innerHTML=` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
     }

    function pickComputerMove(){
      const randomNumber = Math.random();

      let computerMove = ' ';

      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
      }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissor';
      }
      return computerMove;
    }
  