let usersign = localStorage.getItem('sign');

const astroDescription=[
     {
     	 name:"Aquarius",
         src:"img/aquariuss.png",
         description:"Aquarius, Element:Water Aquarians are usually full of ideas, ready to get the big picture on a problem and figure out how we should all move forward collectively into the unknown. This sign is known to have an affinity for the unknown—and what may seem experimental or avant-garde to the rest of us. Aquarians are always looking forward into the future with a cool, airy perspective.Aquarians are the inventors, scientists, experimental artists, and artisans of the zodiac. Lucky Jam: Amethyst",
         jams:["img/Amethyst.png"],
         compatibility:["90%","45%","85%","58%","98%","67%","92%","50%","98%","70%","82%","66%"]
     },
     {
         name:"Pisces",
         src:"img/pisces.png",
         description:"Pisces, Element: Water. They are: Empathetis, sensitive, adaptable, dreamy, generous, naive. Endlessly empathetic and understanding, the Pisces personality is sensitive. Above all, Pisces is always searching, and wondering about what's beyond the material world.Pisces tend to be a little gullible and can be prone to people-pleasing. Generosity is amazing, but make sure you're taking care of yourself, too. It's OK—and sometimes necessary—to raise an eyebrow or just say-no. Lucky Jam: Aquamarine, Blood Stone",
         jams:["img/bloodStone.png"],
         compatibility:["30%","97%","50%","88%","50%","92%","60%","89%","46%","94%","39%","90%"]
     },
     {
         name:"Aries",
         src:"img/aries.png",
         description:"Aries, Element:Fire. Quality:Hot and Dry, Cardinal, Innovative, Stubborn. House:House of Self. Aries personnalities are the best ones to be with. Aries people are fearless and strongwhen it comes to face the challenges. However, like every other people, Aries also have few of the negative traits in their personality: they are very impatient in more than one way, they are very short tempered, they often behave selfish. Lucky Gem: BloodStone and Amethyst",
         jams:["img/diamond.png","img/Amethyst.png"],
         compatibility:["40%","50%","50%","45%","90%","20%","97%","40%","100%","80%","95%","40%"]
     
     },
       {
     	 name:"Taurus",
         src:"img/taurus.png",
         description:"Taurus, Element: Earth. They are hot-tempered, dependable, resilient, hard-working, slow and steady, enjoy extravagance and beauty, Taurus likes routine, familiarity, and stability. We often associate Taurus with the kind of beauty that's found in the environment or the earth itself. Taurus is famously routine-obsessed and tends to gravitate toward what they know feels good and comfy. Forcing yourself to go on an adventure or mix up your routine can be really beneficial. Lucky Gem:Emerald, Amber",
         jams:["img/emerald.png","img/amber.png"],
         compatibility:["45%","76%","62%","99%","72%","68%","30%","97%","75%","98%","77%","100%"]
     },
     {
         name:"Gemini",
         src:"img/twins.jpg",
         description:"Gemini, Element:Air. They are chatty, curious, cerebral, flexible, energetic, gossipy, imaginative, knowledgeable, outgoing, social, well-spoken. Gemini's desire to spread the word can get them into trouble, and this sign is often stereotyped as being gossipy and flirty. Geminis can also benefit from slowing down, staying present, and getting grounded. Practices like breathwork, meditation, and yoga will calm their buzzing energy. Lucky Gem: Pearl Alexandrite and MoonStone",
         jams:["img/pearlAlexandriteMoonStone.png"],
         compatibility:["100%","56%","89%","76%","94%","68%","93%","75%","100%","60%","90%","65%"]
     
     },
     {
         name:"Cancer",
         src:"img/cancerr.png",
         description:"Cancer, Element: Water. They are emotional, nurturing, caring, homey, nourishing, comforting, sensitive. Cancers have a lot of feelings, which can be beautiful—but there's also a shadow side to all of this sensitivity: Cancers can feel easily offended, wounded, and hurt. Many Cancers need to learn that in order to preserve their energy and mental health, it's best to not take things personally.A major opportunity for growth involves learning to express their feelings to others. Lucky Gem: Ruby",
         jams:["img/ruby.png"],
         compatibility:["45%","98%","55%","88%","65%","90%","50%","85%","52%","98%","50%","85%"]
     
     },
     {
     	 name:"Leo",
         src:"img/lion.jpg",
         description:"Leo, Element: Fire. They are confident, courageous, creative, generous, ambitious, dominant. The sign of Leo wants to see and be seen, just like the sun that rules it, which is why Leo is associated with visibility, attention, courage, generosity, and creative impulses. Leos would do well to make sure they're resting, relaxing... They are perceived as self-centered, taking time to help others and remember that the world doesn't revolve around them is a good idea for this sign!Lucky Gem: Peridot, Spinel and Sardonyx",
         jams:["img/peridotSpinel.png"],
         compatibility:["89%","56%","95%","50%","85%","48%","92%","60%","90%","52%","97%","50%"]
     
     },
     {
         name:"Virgo",
         src:"img/virgo.png",
         description:"Virgo, Element:Earth, They are detail- oriented, dedicated, flexible, independant, modest, organized, practical. Virgos are totally capable of caring for themselves. Sometimes Virgos are so bent on serving to the best of their abilities, avoiding errors, and triple-checking their work that they can forget to have fun. All of that perfectionism can be tiring! The typical Virgo will do well to remember that it's OK to make mistakes from time to time, and relaxation is an essential form of self-care. Lucky Gem: Sapphire ",
         jams:["img/sapphire.png"],
         compatibility:["50%","82%","48%","90%","85%","92%","53%","95%","60%","95%","40%","92%"]
     
     },
     {
         name:"Libra",
         src:"img/libra.png",
         description:"Libra, Element:Air. They are balanced, compassionate, diplomatic... Libras are interested in finding balance everywhere: in spheres of social justice, friendships. As such, they're often stereotyped as being indecisive—but they're just weighing all the options. Additionally, Libras can be so focused on helping others keep the peace that they don't always stand up for themselves. It's important for them to vocalize when their feelings are hurt instead of sweeping everything under the rug. Lucky Gem: Opal,Tourmaline.",
         jams:["img/opalTourmaline.png"],
         compatibility:["100%","40%","85%","47%","98%","52%","70%","50%","96%","45%","70%","55%"]
     
     },
       {
     	 name:"Scorpio",
         src:"img/scorpio.png",
         description:"Scorpio, Element: Water. They are creative, determined, mysterious. Scorpionic energy often appears calm and subdued but is intensely emotional. Scorpios tend to like stability, routines, and home life, they are famously discreet and even secretive, with an air of mystery around them. A major opportunity for growth involves letting things go. Scorpios tend to hold onto grudges, negative energy, or obsessive thought patterns about people or situations that have wronged them. Lucky Gem: Topaz, Citrine",
         jams:["img/topazCitrine.png"],
         compatibility:["45%","90%","60%","85%","48%","100%","55%","88%","50%","95%","70%","85%"]
     
     },
     {
         name:"Sagittarrius",
         src:"img/contacteur.jpg",
         description:"Sagittarrius, Element: Fire. They are: adventurous, adaptable, curious, visionary. They tend to be adaptable to change and like to mix up their daily routines often.  They're always looking for the next adventure, and that can mean abandoning whatever other plans they may have already made. They would also do well to think before they speak, as they have a reputation for being straightforward to a fault. Lucky Gem: Tanzanite, Turquoise and Zircon",
         jams:["img/tanzinr.png"],
         compatibility:["85%","50%","90%","60%","87%","55%","98%","47%","80%","50%","100%","62%"]
     
     },
     {
         name:"Capricorn",
         src:"img/capricorn.png",
         description:"Capricorn, Element: Earth. They are: ambitious, authentic, dedicated, serious, structured, traditional, wise. Capricorn are very interested in new beginnings. It's the job of the Capricorn to strike a balance between these two realms of earthly achievements and spiritual truth. If they let their drive get the best of them, Capricorns can be workaholics. Capricorn's quest involves finding a sweet balance between the wise and serious elder in them and the playful child-at-heart. Lucky Gem: Garnet",
         jams:["img/garnet.png"],
         compatibility:["50%","85%","45%","95%","55%","90%","60%","97%","58%","87%","62%","100%"]
     
     },
];

let counter=1;
function showCardSign(sign){
	for(let i=0;i<astroDescription.length;i++){
        // -----------
        // try not to use var, use let or const instead
        // -----------

		var currentNameSign=astroDescription[i];

        // -----------
        // use 3 equals it's safer
        // -----------
        
		if(currentNameSign['name']==sign){
			var imgSign=document.createElement("img");
            imgSign.setAttribute("src",currentNameSign['src']);
            imgSign.classList.add("imgSize");
            document.getElementById("container").appendChild(imgSign);

            let cardText=document.createElement("p");
            cardText.textContent=currentNameSign['description'];
            //cardText.classList.add("overlay");
            let text=document.getElementsByClassName("text")[0];
            text.appendChild(cardText);
            cardText.classList.add("overlay");

            //document.querySelector(".text").textContent=currentNameSign['description'];
            let signText=document.getElementById("signCentered")
            signText.textContent=currentNameSign['name'];
            
            for(let j of currentNameSign['jams']){
            	var imgJam=document.createElement("img");
            	imgJam.setAttribute("src",j);
                imgJam.classList.add("borderImg");
            	document.getElementById("stoneImg").appendChild(imgJam);
            } 
               console.log(counter); 
                 if(counter==2){
                 stoneImg=document.getElementById("stoneImg");
                 stoneImg.style.display="none";
                 //imgJam.classList.add("disappear");
                 signText.textContent=usersign+" - "+currentNameSign['name'];
                 document.getElementById("heart").classList.remove("disappear");
                 // eraseTwoJams(astroSign);
                 // eraseTwoJams(usersign);
             }
		}
	}
    counter++;
}

function twoCard(){

}
function twoJams(){

}

showCardSign(usersign);

let astroSign;
let btnOther=document.getElementById("otherSign");
btnOther.addEventListener("click",getNextDayMonth);

//There is an other way but its bring me errors!

// -----------
// check out modules in Javascript to solve the issue
// -----------

function getNextDayMonth(){
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
    showCardSign(astroSign);
    checkCompatibility();
}
//first sign
console.log(usersign);
//second sign
console.log(astroSign);
//function to check pourcentage of compatibility of 2 cards
function checkCompatibility(){
//over all the cards objects
 for(let i=0; i<astroDescription.length;i++){
    //get the index of the second sign depend of his name
    if(astroDescription[i]['name']==astroSign){
        //over now to get the first sign
       for(let j=0;j<astroDescription.length;j++){
        //get the first sign
        if (astroDescription[j]['name']==usersign) {
            //print the percentage of compatibility according to the index of the second sign
           console.log(astroDescription[j]['compatibility'][i]);
           document.getElementById("percant").textContent=astroDescription[j]['compatibility'][i];
        }
       }
    }
 }
}



