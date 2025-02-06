//랜덤번호 지정
//유저가 번호를 입력 [go]버튼 클릭
//랜덤번호 맞추면, 맞췄습니다!
//랜덤번호 < 유저번호 Down!
//랜덤번호 > 유저번호 Up!
//[Reset]버튼 누르면 게임 리셋
//5번의 기회를 다 쓰면 게임종료(버튼 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려줌, 기회 깎지 않음
//유저가 이미 입력한 숫자를 또 입력하면 알려줌, 기회 깎지 않음

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area");
let history = []

playButton.addEventListener("click", play); //함수도 매개변수로 넘길 수 있다
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100)+1; //Math.floor()소숫점 버림
  console.log("정답", computerNum)
}

function play(){
  let userValue = userInput.value;

  if(userValue<1 || userValue>100){
    resultArea.textContent = "1과 100사이 숫자를 입력해 주세요."
    return;
  }

  if(history.includes(userValue)){
    resultArea.textContent ="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요."
    return;
  }

chances --;
chanceArea.textContent = `남은기회:${chances}번`; //동적 넣으려면 "" 안됨, `${변수}`사용
console.log("chance", chances);

  if(userValue < computerNum){
    resultArea.textContent = "Up!"; //노드의 text값 반환
  }else if(userValue > computerNum){
    resultArea.textContent = "Down!";
  }else{
    resultArea.textContent = "맞췄습니다!";
    gameOver = true
  }

  history.push(userValue);
  console.log(history)

  if(chances < 1){
    gameOver=true
  }

  if(gameOver == true){
    playButton.disabled = true
  }
}

function reset() {
  //user input창 깨끗하게 정리
  userInput.value = "";
  //새로운 번호 생성
  pickRandomNum();

  resultArea.textContent = "결과값이 여기 나옵니다!"
}

pickRandomNum();




