let score=JSON.parse(localStorage.getItem('scores'))||{wins:0,loses:0,ties:0};


update_score();

     function playmove(playermove)
       {
        
          let computerMove=pickmove();
          if(playermove==='ROCK')
            {
                if(computerMove==='ROCK')
                     {
                    result='you tie';
                    }
                   else if(computerMove==='paper')
                    {
                       result='you lose';
                     }
                  else if(computerMove==='Scissors')
                   {
                     result='you win';
                   }

            }
        else if(playermove==='paper')
             {
                if(computerMove==='paper')
                 {
                   result='you tie';
                }
               else if(computerMove==='Scissors')
               {
                  result='you lose';
              }
              else if(computerMove==='ROCK')
               {
                 result='you win';
               }    
            }
       else if((playermove==='Scissors'))
             {

            if(computerMove==='Scissors')
             {
                result='you tie';
            }
           else if(computerMove==='ROCK')
            {
              result='you win';
           }
           else if(computerMove==='paper')
           {
             result='you lose';
           }
           }
           
           if(result==='you win')
           {
             score.wins+=1;
           }
           else if(result==='you lose')
           {
             score.loses+=1;
           }
           else if(result==='you tie')
           {
             score.ties+=1;
           }
           localStorage.setItem('scores',JSON.stringify(score));
           if(score.wins!==0||score.loses!==0||score.ties!==0)
          {
           document.querySelector('.js-result').innerHTML=`${result}`;

          document.querySelector('.js-move').innerHTML=`
           YOU 
      <img src="/image/${playermove}.png" class="move-icon">
      <img src="/image/${computerMove}.png" class="move-icon">
    COMPUTER`;
          }
           update_score();
          // alert(`you picked ${playermove} . compuetr  picked ${computerMove} and ${result} 
          // WIN :${score.wins} , LOSE:${score.loses} , TIE :${score.ties}`); 

       }
       function update_score()
         {
          
          document.querySelector('.js-score').innerHTML=`WIN :${score.wins} , LOSE:${score.loses} , TIE :${score.ties}`;

         }
     function get_score()
       {
         alert(`
                 'wins  :'${score.wins},
                 'loses  :'${score.loses},
                 'ties  :'${score.ties}

              `)
          if(score.wins>score.loses)
            {
               alert(`you are doung great`);
            }
       }
     function reset_score()
     {
         score.wins=0;
         score.loses=0;
         score.ties=0;
         localStorage.removeItem('score');
        
         update_score();
     }
     function pickmove()
       {
        let randNumber=Math.floor(Math.random()*20);
     if(randNumber<=6)
     {
           computerMove='ROCK';
     }
     else if(randNumber>=7&&randNumber<=13)
     {
        computerMove='paper';
     }
    else if(randNumber>=14&&randNumber<=20)
      {
         computerMove='Scissors';
      }


      return computerMove;
       }