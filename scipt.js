
let countDounDate = new Date("22 aug , 2025 00:00:00").getTime();

let num = setInterval(()=>{


    let now = new Date().getTime();

    let distance = countDounDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


    if(distance<0){
        clearInterval(num);

        document.getElementById("days").innerHTML = "00";

        document.getElementById("hours").innerHTML = "00";
    
        document.getElementById("minutes").innerHTML = "00";
    
        document.getElementById("seconds").innerHTML = "00";
    
    


    }
},1000)