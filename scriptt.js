let usersign = localStorage.getItem('sign');

const astroDescription=[
     {
     	 name:"Aquarius",
         src:"img/aquariuss/png",
         description:"",
         jams:["img/Amethyst.png"]
     },
     {
         name:"Pisces",
         src:"img/pisces.png",
         description:"Aquamarine, Blood Stone",
         jams:["img/bloodStone.png"]
     },
     {
         name:"Aries",
         src:"img/aries.png",
         description:"Aries 21st March to 10th April. Element:Fire. Quality:Hot and Dry, Cardinal, Innovative, Stubborn. House:House of Self. Aries personnalities are the best ones to be with. Aries people are fearless and strongwhen it comes to face the challenges. However, like every other people, Aries also have few of the negative traits in their personality: they are very impatient in more than one way, they are very short tempered, they often behave selfish. Lucky Gem: BloodStone and Amethyst",
         jams:["diamond.png","img/Amethyst.png"]
     },
       {
     	 name:"Taurus",
         src:"img/taurus.png",
         description:"",
         jams:["emerald.png","img/amber.png"]
     },
     {
         name:"Gemini",
         src:"img/twins.jpg",
         description:"pearl alexandrite and moonStone",
         jams:["img/pearlAlexandriteMoonStone.png"]
     },
     {
         name:"Cancer",
         src:"img/cancerr.png",
         description:"",
         jams:["img/ruby.png"]
     },
     {
     	 name:"Leo",
         src:"img/lion.jpg",
         description:"peridot, spinel and sardonyx",
         jams:["img/peridotSpinel.png"]
     },
     {
         name:"Virgo",
         src:"img/virgo.png",
         description:"",
         jams:["img/sapphire.png"]
     },
     {
         name:"Libra",
         src:"img/libra.png",
         description:"",
         jams:["img/opalTourmaline.png"]
     },
       {
     	 name:"Scorpio",
         src:"img/scorpio.png",
         description:"",
         jams:["img/topazCitrine.png"]
     },
     {
         name:"Sagittarrius",
         src:"img/contacteur.jpg",
         description:"tanzanite, turquoise and zircon",
         jams:["img/tanzinr.png"]
     },
     {
         name:"Capricorn",
         src:"img/capricorn.png",
         description:"",
         jams:["img/garnet.png"]
     },
];

function showCardSign(){
	for(let i=0;i<astroDescription.length;i++){
		var currentNameSign=astroDescription[i];
		if(currentNameSign['name']==usersign){
			var imgSign=document.createElement("img");
            imgSign.setAttribute("src",currentNameSign['src']);
            imgSign.classList.add("imgSize");
            document.getElementById("container").appendChild(imgSign);
            document.querySelector(".text").textContent=currentNameSign['description'];
            for(let j of currentNameSign['jams']){
            	var imgJam=document.createElement("img");
            	imgJam.setAttribute("src",j);
            	document.getElementById("stoneImg").appendChild(imgJam);
            }   
		}
	}
}
showCardSign();