starveDay = 25000 //Source : https://www.un.org/en/chronicle/article/losing-25000-hunger-every-day

starveSecond = (((starveDay/24)/60)/60)

var start = Date.now();

setInterval(calcStarve, 500)

function calcStarve() {
    document.getElementById("starveCounter").innerHTML = Math.floor(((Date.now() - start)/1000)*starveSecond)
}