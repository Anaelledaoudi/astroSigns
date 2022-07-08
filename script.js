let btn=document.getElementById("btnDate");
btn.addEventListener("click",redirectAndGetDayMonth);

let m;
let d;
let astroSign;

function redirectAndGetDayMonth(){
  getDayMonth();
  redirect();
}
function redirect(){
  location.href="zodiacPage.html"
}

function getDayMonth(){
let date=document.getElementById("cal").value;
let dateInput  = new Date(date);
console.log(date);
    m=dateInput.getMonth()+1;
    d=dateInput.getDate();

  console.log(m);
  console.log(d);

checkAstro(m,d);
}

function checkAstro(m,d){
	if((d>=20&&m==1)||(d<=18&&m==2)){
		astroSign="Aquarius";
	}
	else if((d>=19&&m==2)||(d<=20&&m==3)){
        astroSign="Pisces";
	}
	else if((d>=21&&m==3)||(d<=20&&m==4)){
       astroSign="Aries";
	}
	else if((d>=21&&m==4)||(d<=20&&m==5)){
	    astroSign="Taurus";
	}
    else if((d>=21&&m==5)||(d<=20&&m==6)){
    	astroSign="Gemini";
    }

    else if((d>=21&&m==6)||(d<=22&&m==7)){
    	astroSign="Cancer";
    }

    else if((d>=23&&m==7)||(d<=23&&m==8)){
        astroSign="Leo";
    }
    else if((d>=24&&m==8)||(d<=22&&m==9)){
    	astroSign="Virgo";
    }

    else if((d>=23&&m==9)||(d<=23&&m==10)){
    	astroSign="Libra";
    }

    else if((d>=24&&m==10)||(d<=22&&m==11)){
    	astroSign="Scorpio";
    }

    else if((d>=23&&m==11)||(d<=21&&m==12)){
    	astroSign="Sagittarrius";
    }

    else if((d>=22&&m==12)||(d<=19&&m==1)){
    	astroSign="Capricorn";
    }
    console.log(astroSign);
    localStorage.setItem('sign', astroSign);
    
}
