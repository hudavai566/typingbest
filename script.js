let time = 60;
let timer;

function start(){
  clearInterval(timer);
  time = 60;
  document.getElementById("time").innerText = time;
  document.getElementById("wpm").innerText = 0;
  document.getElementById("input").value = "";
  document.getElementById("input").focus();

  timer = setInterval(() => {
    time--;
    document.getElementById("time").innerText = time;

    if(time === 0){
      clearInterval(timer);
      calculateWPM();
    }
  }, 1000);
}

function calculateWPM(){
  let text = document.getElementById("input").value.trim();
  if(text.length === 0){
    document.getElementById("wpm").innerText = 0;
    return;
  }
  let words = text.split(/\s+/).length;
  document.getElementById("wpm").innerText = words;
}
