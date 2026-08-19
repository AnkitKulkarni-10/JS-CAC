//Random color generator: Using setInterval() and clearInterval() methods.
const randomColor = function(){
  const hex = '0123456789ABCDEF' //Range of hex values
  let color = '#' // A color is for eg. #414141 i.e a 6 digit code
  for(let i=0; i < 6 ; i++){
    color+= hex[Math.floor(Math.random()*16)]; //
  }
  return color;
};
let intervalId;
const startChangingColor = function(){
  let colorChange = function() {
    document.body.style.backgroundColor = randomColor()
  } 
  if(intervalId == null){
    intervalId = setInterval(colorChange,1000);
  }
}
document.querySelector('#start').addEventListener('click', startChangingColor);

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#stop').addEventListener('click', stopChangingColor)