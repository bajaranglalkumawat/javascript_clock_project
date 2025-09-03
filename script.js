console.log("we are building clock project"); 
 const element = document.querySelector('.clock');    
  const sound = document.querySelector('audio'); 
  
const time = new Date(); 
  const option = { 
     timeZone:'Asia/kolkata', 
      hour : '2-digit',
      minute :'2-digit', 
       second : '2-digit',
  }
 element.textContent = time.toLocaleString('en-us',option);  
  sound.play();

 setInterval(() => { 

const time = new Date(); 
  const option = { 
     timeZone:'Asia/kolkata', 
      hour : '2-digit',
      minute :'2-digit', 
       second : '2-digit',
  }
 element.textContent = time.toLocaleString('en-us',option)

sound.play();
    
 }, 1000);