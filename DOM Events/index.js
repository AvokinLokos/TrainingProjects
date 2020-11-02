/* START TASK 1: Your code goes here */
function firstCol(e){
   let tr = e.parentNode;
   let ch = tr.children;
   for (let elem of ch) {
    elem.style.backgroundColor = 'blue';
    }
}

function yellowColor(e){
    e.style.backgroundColor = 'yellow';
}

function specCell(){
    let tab = document.getElementsByTagName('table')[0];
    tab.style.backgroundColor = 'green';

    let td = document.getElementsByTagName('td');
    for(let i =0; i<td.length; i++){
        if(td[i].style.backgroundColor === ''){
            td[i].style.backgroundColor ='green';
        }
    }
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
let num = document.getElementsByClassName('phone')[0];
function val() {
    return /^[+380][0-9]{12}$/.test(num.value);
}

function toSend(btn){
    if(val()){
    num.style.border='1px solid gray';
    let block = document.getElementById('invalidData');
    block.style.display = 'none'; 
    block = document.getElementById('validData');
    block.style.display = 'block';
    }else{
        let block = document.getElementById('invalidData');
        block.style.display = 'block'; 
        block = document.getElementById('validData');
        block.style.display = 'none';
        btn.disabled = true;
        num.style.borderColor='red';
        num.oninput = function(){
            if(val()){
            btn.disabled = false;
            }
        } 
    }
}


num.oninput = function() {
    if(!/^[+380][0-9]{12}/.test(num.value)){
       num.style.borderColor='1px solid red';
  }
}

/* END TASK 2 */

/* START TASK 3: Your code goes here */

document.getElementsByClassName('score')[0].style.marginRight = '465px';

let court = document.getElementById('court');
let ball = document.getElementById('ball');
const two =2;
court.onclick = function(event) {

    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
      top: event.clientY - fieldCoords.top - court.clientTop - ball.clientHeight / two,
      left: event.clientX - fieldCoords.left - court.clientLeft - ball.clientWidth / two
    };

    if (ballCoords.top < 0){ 
      ballCoords.top = 0;
    }

    if (ballCoords.left < 0){
      ballCoords.left = 0;
    }


    if (ballCoords.left + ball.clientWidth > court.clientWidth) {
      ballCoords.left = court.clientWidth - court.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > court.clientHeight) {
      ballCoords.top = court.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
  }
  
let scoreB = 0;
let scoreA = 0;
let congrat = document.getElementsByClassName('congrat')[0];
let baskets = document.getElementsByClassName('basket');
const threeSec = 3000;
let listener = function (ev){
  if(ev.detail.elId === 'B'){
      let scoreShow = document.getElementsByClassName('score')[1];
      scoreB++;
      scoreShow.innerText = `Team B: ${scoreB}`;
      congrat.innerText = 'Team B score!';
      congrat.style.color = 'red';
      setTimeout(function(){
        congrat.innerText = '';
      },threeSec);
}else{
  let scoreShow = document.getElementsByClassName('score')[0];
  scoreA++;
  scoreShow.innerText = `Team A: ${scoreA}`;
  congrat.innerText = 'Team A score!';
  congrat.style.color = 'blue';
  setTimeout(function(){
    congrat.innerText = '';
  },threeSec);
}
};

function showTeam(el){
  let ev = new CustomEvent('goal', {detail: { elId: el.id }});
  el.removeEventListener('click', listener(ev));
}

/* END TASK 3 */