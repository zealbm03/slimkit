let checkoutBtn = document.querySelector('#checkoutBtn');
let link_do_checkout = "https://google.com";

checkoutBtn.addEventListener('click', () => {
    checkoutBtn.href = link_do_checkout;
});

// TIMER

document.getElementById('timer1').innerHTML = "09" + ":" + "00";
      startTimer1();
      
      function startTimer1() {
        var presentTime1 = document.getElementById('timer1').innerHTML;
        var timeArray1 = presentTime1.split(/[:]+/);
        var m = timeArray1[0];
        var s = checkSecond1((timeArray1[1] - 1));
        if(s==59){m=m-1}
        
        document.getElementById('timer1').innerHTML =
          m + ":" + s;
        setTimeout(startTimer1, 1000);
      }
      
      function checkSecond1(sec) {
        if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
        if (sec < 0) {sec = "59"};
        return sec;
      }

document.getElementById('timer2').innerHTML = "09" + ":" + "00";
startTimer2();
      
      function startTimer2() {
        var presentTime1 = document.getElementById('timer2').innerHTML;
        var timeArray1 = presentTime1.split(/[:]+/);
        var m = timeArray1[0];
        var s = checkSecond1((timeArray1[1] - 1));
        if(s==59){m=m-1}
        
        document.getElementById('timer2').innerHTML =
          m + ":" + s;
        setTimeout(startTimer2, 1000);
      }
      
      function checkSecond1(sec) {
        if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
        if (sec < 0) {sec = "59"};
        return sec;
      }

// HEADER APARECENDO

let headerCheckout = document.querySelector('#headerCheckout');
function adjustHeaderOpacity() {

  let scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 100) {
      headerCheckout.style.opacity = "0.9";
  } else {
      headerCheckout.style.opacity = "0"; 
  }
}

window.addEventListener('scroll', adjustHeaderOpacity);