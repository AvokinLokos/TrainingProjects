const questions1 = JSON.parse(localStorage.getItem('questions'));

const btn = document.querySelectorAll('.btn1');
for (let i = 0; i < btn.length; i++) {
  btn[i].style.display = 'none';
}

let hundred = 100;
let two = 2;
let win = 1000000;

function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  
  let score = 0;
  let prize =100;
  const btnStart = document.getElementById('start');
  const btnSkip = document.getElementById('skip');
  let arrOfShownQues = [];
  let ques = document.getElementById('question');
  let quiz = document.getElementById('quiz');
  let i=getRandInt(0, questions1.length-1);
  let scoreShow = document.getElementById('score');
  let prizeShow = document.getElementById('prize');
  btnSkip.style.display = 'none';
  ques.style.display='none';
  scoreShow.style.display='none';
  prizeShow.style.display='none';


  btnStart.onclick = function genQues() {
    btnSkip.style.display = 'inline';
    ques.style.display = 'inline';
    scoreShow.style.display='block';
  prizeShow.style.display='block';
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.display = 'block';
    }
    if(!arrOfShownQues.includes(i,0)){
      ques.innerHTML = questions1[i]['question'];
      arrOfShownQues.push(i);
        for (let j = 0; j < btn.length; j++){
        btn[j].innerHTML = questions1[i]['content'][j];
      }
      scoreShow.innerHTML = `Total prize: ${score}`;
      prizeShow.innerHTML = `Prize on current round: ${prize}`;  
  }else{
      i=getRandInt(0, questions1.length-1);
      genQues();
  }
  btnStart.style.display = 'none';
      }
  
  btnSkip.onclick = function genQues() {
    for (let i = 0; i < btn.length; i++) {
    btn[i].style.display = 'block';
  }
  ques.style.display = 'inline';
    scoreShow.style.display='block';
  prizeShow.style.display='block';
  if(!arrOfShownQues.includes(i,0)){
    ques.innerHTML = questions1[i]['question'];
    arrOfShownQues.push(i);
      for (let j = 0; j < btn.length; j++){
      btn[j].innerHTML = questions1[i]['content'][j];
    }
    scoreShow.innerHTML = `Total prize: ${score}`;
    prizeShow.innerHTML = `Prize on current round: ${prize}`;
 
}else{
    i=getRandInt(0, questions1.length-1);
    genQues();
}
      btnSkip.style.display = 'none';
      }

  function index(element, collection) {
      let len = collection.length;
      for (let i = 0; i < len; i++) {
          if (element === collection[i]) {
              return i;
          }
      }
  }

btn.forEach(btn1 => {
  btn1.addEventListener('click',function () {
      let ind = index(this, btn);
      if(ind === questions1[i]['correct']){
        ques.style.display = 'inline';
    scoreShow.style.display='block';
  prizeShow.style.display='block';
          i=getRandInt(0, questions1.length-1);
          score+=prize;
          prize*=two;
          for (let i = 0; i < btn.length; i++) {
                btn[i].style.display = 'block';
          }
          if(!arrOfShownQues.includes(i,0)){
          ques.innerHTML = questions1[i]['question'];
          arrOfShownQues.push(i);
          for (let j = 0; j < btn.length; j++){
          btn[j].innerHTML = questions1[i]['content'][j];
          }
          scoreShow.innerHTML = `Total prize: ${score}`;
          prizeShow.innerHTML = `Prize on current round: ${prize}`;
    
    
    }else{
        i=getRandInt(0, questions1.length-1);
        arrOfShownQues.push(i);
    }
      if(score >= win){
        for (let i = 0; i < btn.length; i++) {
          btn[i].style.display = 'none';
        }
        arrOfShownQues = [];
        score = 0;
        prize = hundred;
        ques.style.display = 'inline';
    scoreShow.style.display='block';
  prizeShow.style.display='block';
        btnSkip.style.display = 'none';
        btnStart.style.display = 'inline';
        scoreShow.innerHTML = 'Congratulations!';
        prizeShow.innerHTML = 'Your prize is 1000000.';
        i=getRandInt(0, questions1.length-1);
        arrOfShownQues.push(i);
      }
        }else{
          for (let i = 0; i < btn.length; i++) {
            btn[i].style.display = 'none';
          }
          ques.style.display = 'none';
          scoreShow.style.display='block';
          prizeShow.style.display='block';
        scoreShow.innerHTML = 'Game over';
        prizeShow.innerHTML = `Your prize is: ${score}`;
        arrOfShownQues = [];
        score = 0;
        prize = hundred;
        btnSkip.style.display = 'none';
        btnStart.style.display = 'inline';
        i=getRandInt(0, questions1.length-1);
        arrOfShownQues.push(i);
      }
  });
})
