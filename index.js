const heartButton = document.querySelector('.button');
const heart = document.querySelector('.button__heart');
const textHeart = document.querySelector('.help')
heartButton.addEventListener('click',function(){

  heart.style.animationPlayState = 'paused';
  heartButton.classList.add('fade-out');
  setTimeout(() => {
      heartButton.remove();
      
    }, 1000);
    textHeart.classList.add('fade-out');
   
  setTimeout(() => {  
    typeAndDelete();
    
  }, 2000);
     
});




const textElement = document.querySelector('.typewriter-text');
const text =["root@pavel-pc:~# ping evelina.heart -c 3",'Инициализация системы...',"root@evelina:~# grep -r 'самая красивая' /ru/spb/","Found 1 match: /ru/spb/evelina.txt","Sending message 'i love u'"
    ,'ПИП-ПИП-siski','гладим дусю','погладили','ваше устройство взорвется через 3......2........1','','penis =)', 'C 8 марта!♥'] 

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function typeAndDelete(){
  textElement.classList.remove('hide-cursor');
    await sleep(900);
    for(let i = 0;i<text.length;i++){
      for(let j = 0;j<text[i].length;j++){
        textElement.textContent +=text[i][j];
        await sleep(100);
      }
      await sleep(2500);
    if (i < text.length - 1) {
            for (let j = text[i].length; j > 0; j--) {
                textElement.textContent = text[i].substring(0, j - 1);
                await sleep(25); 
            }
            await sleep(500); // Небольшая пауза перед началом печати следующей строки
        }
    
    }
  } 

