window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var acrescentartens = 
    document.getElementById("tens");
    var acrescentarSeconds = 
    document.getElementById("seconds");
    var buttonStart =
    document.getElementById("buton-start");
    var buttonPause =
    document.getElementById("buton-pause");
    var buttonReset =
    document.getElementById("buton-reset");
    var interval ;


    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonPause.onclick = function () {
        clearInterval(interval);
    }

    buttonReset.onclick = function () {
        clearInterval(interval);
        seconds = "00";
        tens = "00";
        acrescentartens.innerHTML = tens;
        acrescentarSeconds.innerHTML = seconds;
    }

     function startTimer () {
        tens++;

        if(tens <= 9){
            acrescentartens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            acrescentartens.innerHTML =  tens;
        }

        if(tens > 99){
            console.log("seconds")
            seconds++;
            acrescentarSeconds.innerHTML = "0" + seconds;
            tens = 0 ;
            acrescentartens.innerHTML = "0" + 0 ;

        }

        if(seconds > 9 ){
            acrescentarSeconds.innerHTML = seconds;
        }
    }
}



  