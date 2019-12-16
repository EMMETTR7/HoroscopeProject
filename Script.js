signs = ['Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn', 'That is not a real date', ""];
messages = ["have a good day", "you're a tosspot", "you'e a shitter", "you're a legend", "you're an idiot", "big up yaself", "you're a wasteman", "you're a hamRoll", "you're a paigon", "you're a tosser", "you're the bouff daddy", "you're a fraud", "please enter a real date", ""];
images = ["image/aquarius.png", "image/pisces.png", "image/aries.png", "image/taurus.png", "image/gemini.png", "image/cancer.png", "image/leo.png", "image/virgo.png", "image/libra.png", "image/scorpio.png", "image/sagittarius.png", "image/capricorn.png", "", ""];


function start(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var sign = determineSign();
    var username = document.getElementById('username').value;

    if(username==""){
        alert("Enter Your Name");
        sign = 13;
    }
    document.getElementById("sign").innerHTML =signs[sign];
    document.getElementById("image").src=images[sign];
    document.getElementById("message").innerHTML = username + ", " + messages[sign];

}

function determineSign(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    if(month==1){
        if(day<=20){
            return 11;
        }
        if(day>=21){
            return 0;
        }
    }
    if(month==2){
        if(day<=19){
            return 0;
        }
        if(day>=20 && day<=28){
            return 1;
        }
        if(day>=29){
            return 12;
        }
    }
    if (month==3){
        if(day<=20){
            return 1;
        }
        if(day>=21){
            return 2;
        }
    }
    if (month==4){
        if(day<=19){
            return 2;
        }
        if(day>=20 && day<=30){
            return 3;
        }
        if(day>30){
            return 12;
        }
    }
    if (month==5){
        if(day<=20){
            return 3;
        }
        if(day>=21){
            return 4;
        }
    }
    if (month==6){
        if(day<=21){
            return 4;
        }
        if(day>=22 && day<=30){
            return 5;
        }
        if(day>30){
            return 12;
        }
    }
    if (month==7){
        if(day<=23){
            return 5;
        }
        if(day>=24){
            return 6;
        }
    }
    if (month==8){
        if(day<=23){
            return 6;
        }
        if(day>=24){
            return 7;
        }
    }
    if (month==9){
        if(day<=22){
            return 7;
        }
        if(day>=23 && day<=30){
            return 8;
        }
        if(day>=30){
            return 12;
        }
    }
    if (month==10){
        if(day<=22){
            return 8;
        }
        if(day>=23){
            return 9;
        }
    }
    if (month==11){
        if(day<=22){
            return 9;
        }
        if(day>=23 && day<=30){
            return 10;
        }
        if(day>30){
            return 12;
        }
    }
    if (month==12){
        if(day<=20){
            return 10;
        }
        if(day>=21){
            return 11;
        }
    }
}