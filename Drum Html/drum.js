
      const numberOfElement=document.querySelectorAll('.drum').length;

     for(let i=0;i<numberOfElement;i++)
      {
       const musicElement=document.querySelectorAll('.drum')[i];

      document.querySelectorAll('.drum')[i].addEventListener ('click',function () 
      { 
       
        makesound(this.innerHTML);
        makeAnimation(this.innerHTML);
      //  if(this.innerHTML==='w')
      //    {  this.style.color='green';
      //       this.style.color='white';

      //    }  
      //   else if(this.innerHTML==='a')
      //   {
      //     this.style.color='purple';
      //       this.style.color='white';

      //   }       
        // const audioPlay=new Audio(`/audio/one${this.innerHTML}.MP3`);
        // audioPlay.play();  
        //sitch statement for play different song
        
          // var buttoninnerhtml=this.innerHTML;
          // switch(buttoninnerhtml)
          //  {

          //    case 'W':const audio1=new Audio(`/audio/oneW.MP3`);
          //             audio1.play();
          //             break;
          //   case 'S':const audio2=new Audio(`/audio/oneW.MP3`);
          //             audio2.play();
          //             break;
          //   case 'A':const audio3=new Audio(`/audio/oneW.MP3`);
          //             audio3.play();
          //             break;
          //  }
        
       
      }  );
      }
      
    document.addEventListener('keypress',function(event)
     {
       const keypressed=event.key;
        makesound(keypressed);
        makeAnimation(keypressed);
      }
    );

function makesound(key)
  {
    const audioPlay=new Audio(`/audio/${key}.MP3`);
        audioPlay.play();   
  }

function makeAnimation(currentkey)
{
    var activeKey=document.querySelector(`.${currentkey}`);
    activeKey.classList.add('buttonColor');
    activeKey.classList.add('pressed');


    setTimeout(function(){ activeKey.classList.remove('pressed')},300);
    setTimeout(function (){activeKey.classList.remove('buttonColor')},300);
}
   