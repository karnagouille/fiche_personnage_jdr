
// boutton +5
const minFive = document.getElementById('min_five');
const maxFive = document.getElementById('max_five');
const plusFive = document.getElementById('plus_five');

const experience = document.getElementById('experience');
const maxExp = document.getElementById('max_exp');

maxFive.addEventListener('click',()=>{

if(Number(experience.innerText) < Number (maxExp.innerText)){
    experience.innerHTML=Number(experience.innerText)+5
    barrexp();
}
});

minFive.addEventListener('click',()=>{

if(Number(experience.innerText) >0){
    experience.innerHTML=Number(experience.innerText)-5
    barrexp();
}
});

// boutton +10

const minTen = document.getElementById('min_ten');
const maxTen = document.getElementById('max_ten');
const plusTen = document.getElementById('plus_ten');



maxTen.addEventListener('click',()=>{

if(Number(experience.innerText)+10 < Number (maxExp.innerText)){
    experience.innerHTML=Number(experience.innerText)+10
    barrexp();
}
});

minTen.addEventListener('click',()=>{

if(Number(experience.innerText)-10 >0){
    experience.innerHTML=Number(experience.innerText)-10
    barrexp();
}
});

// boutton +50

const minFifty = document.getElementById('min_fifty');
const maxFifty = document.getElementById('max_fifty');
const plusFifty = document.getElementById('plus_fifty');



maxFifty.addEventListener('click',()=>{

if(Number(experience.innerText)+50 < Number (maxExp.innerText)){
    experience.innerHTML=Number(experience.innerText)+50
    barrexp();
}
});

minFifty.addEventListener('click',()=>{

if(Number(experience.innerText)-50 >0){
    experience.innerHTML=Number(experience.innerText)-50
    barrexp();
}
});

// boutton +100
const minHundred = document.getElementById('min_hundred');
const maxHundred = document.getElementById('max_hundred');
const plusHundred = document.getElementById('plus_hundred');



maxHundred.addEventListener('click',()=>{

if(Number(experience.innerText)+100 < Number (maxExp.innerText)){
    experience.innerHTML=Number(experience.innerText)+100
    barrexp();
}
});

minHundred.addEventListener('click',()=>{

if(Number(experience.innerText) -100 >0){
    experience.innerHTML=Number(experience.innerText)-100
    barrexp();
}
});


// barre d'xp
function barrexp() {
const div_xp = document.getElementById('div_xp');
const pourcentage = Number(experience.innerText)/ Number(maxExp.innerText)*100;
div_xp.style.width = pourcentage + "%";
}


// Points de vies
const btnmax = document.getElementById('btnmax');
const btnmin = document.getElementById('btnmin');
const count = document.getElementById('count');
const maxdiv = document.getElementById('maxdiv');

btnmax.addEventListener('click',()=>{
    if(Number(count.innerText) <Number (maxdiv.innerText)){
    count.innerText=Number(count.innerText) +1
    };
    });

btnmin.addEventListener('click',()=>{
    if(Number(count.innerText) >0)
    count.innerText=Number(count.innerText) -1
    
    }
);
//------------------------------------