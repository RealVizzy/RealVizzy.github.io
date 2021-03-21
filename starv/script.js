starveDay = 25000 //Source : https://www.un.org/en/chronicle/article/losing-25000-hunger-every-day
starveDate = new Date("2010")

starveYear = starveDay*365
starveYearGrowth = 1.012 //Population Growth

var start = Date.now();

setInterval(update, 500)

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calcStarveRate(time) {
    return ((starveYear)*Math.pow(starveYearGrowth, (time-starveDate)/31540000000))/31540000000
}

function overTimeStarve(start, end) {
    return (calcStarveRate(start)*(end - start)+calcStarveRate(end)*(end - start))/2
}

function calcStarve(start, end) {
    return numberWithCommas(Math.floor(overTimeStarve(start, end)))
}

function update() {
    document.getElementById("starveCounter").innerHTML = calcStarve(start, Date.now())
    document.getElementById("starveCounterDay").innerHTML = calcStarve(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), Date.now())
    document.getElementById("starveCounterMonth").innerHTML = calcStarve(new Date(new Date().getFullYear(), new Date().getMonth()), Date.now())
    document.getElementById("starveCounterYear").innerHTML = calcStarve(new Date(new Date().getFullYear().toString()), Date.now())
    document.getElementById("starveCounterDecade").innerHTML = calcStarve(new Date((Math.floor(new Date().getFullYear() / 10) * 10).toString()), Date.now())
    document.getElementById("starveCounterCentury").innerHTML = calcStarve(new Date((Math.floor(new Date().getFullYear() / 100) * 100).toString()), Date.now())
}