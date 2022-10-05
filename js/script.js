function checkTime(i){
    return i < 10 ? "0" + i : i;
}

// function updateClock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = checkTime(date.getMinutes());
//     let seconds = checkTime(date.getSeconds());
//     let ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12;
//     let time = `${hours}:${minutes}:${seconds} ${ampm}`;
//     document.getElementById('time').innerHTML = time;
//     document.getElementById('date').innerHTML = `${date.toLocaleDateString(
//         'en-us', {month: 'numeric', day: 'numeric', year: 'numeric'}
//     )}`;
//     setTimeout(updateClock, 1000);
// }

// function updateClock(){
//     const date = new Date()
//     document.getElementById('time').innerHTML = date.toLocaleTimeString([], {hour12: true});
//     document.getElementById('date').innerHTML = date.toLocaleDateString('en-us', {month: "numeric", day: "numeric", year: "numeric"});
//     setInterval(updateClock, 1000);
// }

function updateClock(){
    var date = new Date()
    document.getElementById('time').innerHTML = date.toLocaleTimeString([], {hour12: true});
    document.getElementById('date').innerHTML = date.toLocaleDateString('en-us', {month: "numeric", day: "numeric", year: "numeric"});
    // let options = {
    //     timezone: "America/Chicago",
    //     hour12: true
    // };
    
    setTimeout(updateClock, 1000);
    
}

function timezones(){
    var aryIannaTimeZones = Intl.supportedValuesOf('timeZone');

    let date = new Date();
    aryIannaTimeZones.forEach((timezone) =>
    {
        // let strTime = date.toLocaleString('en-us', {timeZone: '${timezone}'});
        console.log(timezone)
    });
}

// timezones();

function calcTime(offset){

}


// updateClock();

updateClock();

// setInterval(updateClock, 1000);

function setGradient() {
    var background = generateGradient()
    console.log(background)
    document.getElementById("randomGradient").style.background = background
};

document.onload = setGradient()

function generateGradient() {

    var colorAmount = getRandomInt(2,4);
    console.log(colorAmount);
    colorAmount = colorAmount > 1 ? colorAmount : 2;
    console.log(colorAmount);
    var colors = [];
    for (var i = 0; i < colorAmount; i++){
      colors[i] = generateHexColor()
    }
  
    const angle = getRandomInt(1, 360);
  
    var gradient = "linear-gradient(" + angle +"deg, "
    for (var i = 0; i < colors.length - 1; i++) {
      gradient += colors[i] + ", "
    }
  
    gradient += colors[colors.length -1] + ")"
  
    return gradient
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateHexColor() {
    var temp = "#" + generateHex(6);
    console.log(temp);
    return temp;
};

function generateHex(length) {

    var temp = "";
    for (var i = 0; i < length; i++){
      temp += Math.round(Math.random() * 14).toString(16);
    }
  
    return temp;
  
};