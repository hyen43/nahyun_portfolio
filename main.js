const moreBtn = document.querySelector('nav .icon');
const navbar = document.querySelector('nav ul');

moreBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  navbar.classList.toggle('active');
});

/*
* 변수 지정하기 
  1) 버튼 변수
  2) 문서전체 변수(문서의 높이를 지정)
* 문서의 높이를 계산하고 원하는 부분이 상단에서 얼만큼 떨어져 있는지 OFFSET 값을 계산하기
* 스크롤과 클릭 이벤트 작성하기 
*/

let btt = document.getElementById('back-to-top'),
  docElem = document.documentElement,
  offset,
  scrollPos,
  docHeight;


//문서 높이 계산하기(문서의 높이가 있을 때, offset이 있음 )
docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);

if (docHeight != 0) {
  offset = docHeight / 4; //offset을 전체 높이의 1/4로 하겠다. 
}


// 스크롤 이벤트 추가(윈도우에 스크롤이 생기면)
window.addEventListener('scroll', () => {
  scrollPos = docElem.scrollTop;
  console.log(scrollPos);

  btt.className = (scrollPos > offset) ? 'visible' : '';// if else 문을 줄인 것 

  /* 
  if(scrollPos > offset){
    btt.className = 'visible';
  } else{
    btt.className = '';
  }
  */

});

//클릭 이벤트 추가

btt.addEventListener('click', (ev) => {
  ev.preventDefault();//링크의 본연의 기능을 막는다.
  //docElem.scrollTop = 0;
  scrollToTop();
});

/* 함수가 할 일을 적는다: 스크롤 양을 조금씩 빼다가 0이 되면 멈춤 */
function scrollToTop() {
  //일정시간 마다 할일
  //let scrollInterval = setInterval(할일. 시간);(이름이 있어야 함)
  //0.0015s = 15 (0.001 초)
  //윈도우 스크롤이 0이 아닐 때 실제로 할 일 : window.scrollBy(0,-55); x축은 바뀌는게 없고 y축만 바뀜
  // 스크롤 양이 0 이면 setInterval을 멈춰라.  clearInterval(이름);
  let scrollInterval = setInterval(function () {
    if (scrollPos != 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}