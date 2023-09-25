let startButton;
let stopButton;
let resetButton;
let showTime;

let timer;
let startTime;   　
let elapsedTime = 0;　　　//経過時間
let holdTime = 0;　　　//一時停止用に時間保持

window.onload = function () {
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    showTime = document.getElementById("time");
}
function start(){  //スタートボタン押す時
    startTime = Date.now();
    measureTime();  //時間計測
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
    
}
function stop(){    //ストップボタン押す時
    clearInterval(timer);// タイマー停止
    holdTime += Date.now() - startTime;　//停止時間保持
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function reset(){     //リセットボタン押す時
    clearInterval(timer);
    //表示を初期化
    elapsedTime = 0;
    holdTime = 0;
    showTime.textContent = "00:00";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    
}
　　//再び計測開始
function measureTime() {

    timer = setTimeout(function () {　
        //現在時刻-開始時間-保持時間で求める
    elapsedTime = Date.now() - startTime + holdTime;
    showTime.textContent = new Date(elapsedTime).toISOString().slice(14, 19);
    measureTime();
    }, 10);　　　
}








