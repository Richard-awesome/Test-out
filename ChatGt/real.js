let ArrayofQuestions = [];
let input = document.querySelector('input');
let contain = document.querySelector('.contain');
let pushed = document.querySelector('.pushed');

function placed(){
 
 contain.innerHTML += `<p class='mine'>${input.value.trim()}</p>`

 if (input.value.toLowerCase() == 'hi' || input.value.toLowerCase() == 'hello' || input.value.toLowerCase() == `what's up`|| input.value.toLowerCase() == `what's up`|| input.value.toLowerCase() == 'hey' || input.value.toLowerCase() == `yo!`){
  setTimeout(() => {
    contain.innerHTML += `<p class="yours">What's Up?</p>`
  }, 1000);
  
  
 } else if(input.value.toLowerCase() == `i'm good` || input.value.toLowerCase() == `i'm okay`){
  setTimeout(() => {
    contain.innerHTML += `<p class="yours">Good to know!</p>`
  }, 1000);
  

  setTimeout(() => {
    contain.innerHTML += `<p class="yours">What did you do today?</p>`
  }, 2000);
 
 }
 else if(input.value.toLowerCase() == `thanks`){
  setTimeout(() => {
    contain.innerHTML += `<p class="yours">You're Welcome!</p>`    
  }, 1000);
 
}
else if(input.value.toLowerCase() == `have mine`){
  setTimeout(() => {
    contain.innerHTML += `<p class="yours">That would be nice!</p>`    
  }, 1000);
 
}

else if(input.value.toLowerCase() == 'coffee'){
  setTimeout(() => {
    contain.innerHTML += `<p class="yours"> I would really love some coffee!</p>` 
  for(let i =0; i <= input.value.trim().length; i++){
    console.log(input.value[i])
  }
  }, 1000);
}
 else  if(input.value.toLowerCase() !== ''){
  setTimeout(() => {
    contain.innerHTML += `<p class="yours">That's really cool!</p>`  
  }, 1000);
  
} 
localStorage.setItem('cook', contain.innerHTML)
  input.value = ''
}

 contain.innerHTML = localStorage.getItem('cook')