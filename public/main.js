
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

if(Number(experience.innerText)+10 <= Number (maxExp.innerText)){
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

if(Number(experience.innerText)+50 <= Number (maxExp.innerText)){
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

if(Number(experience.innerText)+100 <= Number (maxExp.innerText)){
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





const boutonPlus = document.querySelectorAll('.statmax')

boutonPlus.forEach(bouton =>{
    bouton.addEventListener('click',()=>{
        const blockStat = bouton.closest(".stats"); // closest remonte et regarde le parents dans la hierarchie
        const valeur = blockStat.querySelector('.statcount');
        const counter = document.querySelector('.counter');
        if(Number(valeur.innerText)<15 && Number(counter.innerText)>0) {
            valeur.innerText = Number(valeur.innerText)+1 ;
            counter.innerText = Number(counter.innerText)-1 ;
        };
    });
})

const boutonmoins = document.querySelectorAll('.statmin');

boutonmoins.forEach(bouton =>{
    bouton.addEventListener('click',()=>{
        const blockstat = bouton.closest('.stats');
        const valeur = blockstat.querySelector('.statcount');
        const counter = document.querySelector('.counter');
        if(Number(valeur.innerText)>8 && Number(valeur.innerText )<=15) {
            valeur.innerText = Number(valeur.innerText)-1
            counter.innerText = Number(counter.innerText)+1
        };
    })
})



const bouton1 =document.querySelectorAll('.bonus1');

bouton1.forEach(bouton => {

    bouton.addEventListener('click',()=>{

    const blockstat = bouton.closest('.stats');
    const statcount = blockstat.querySelector('.statcount');

    const ancien = document.querySelector('.activeBonus1');
    
    if(ancien && ancien !== blockstat){
        ancien.classList.remove('activeBonus1');
        const ancienstatcount = ancien.querySelector('.statcount');
        ancienstatcount.innerText = Number(ancienstatcount.innerText)-1;
    }

        if(!blockstat.classList.contains('activeBonus1')){
            blockstat.classList.add('activeBonus1');
            statcount.innerText = Number(statcount.innerText)+1;
        }

    
})
    
})








const bouton2 =document.querySelectorAll('.bonus2');

bouton2.forEach(bouton => {

    bouton.addEventListener('click',()=>{

    const blockstat = bouton.closest('.stats');
    const statcount = blockstat.querySelector('.statcount');

    const ancien = document.querySelector('.activeBonus2');
    
    if(ancien && ancien !== blockstat){
        ancien.classList.remove('activeBonus2');
        const ancienstatcount = ancien.querySelector('.statcount');
        ancienstatcount.innerText = Number(ancienstatcount.innerText)-2;
    }

        if(!blockstat.classList.contains('activeBonus2')){
            blockstat.classList.add('activeBonus2');
            statcount.innerText = Number(statcount.innerText)+2;
        }

    
})
    
})

























/*
const statsmax1 = document.getElementById('statsmax1');
const statsmin1 = document.getElementById('statsmin1');
const statscount1 = document.getElementById('statscount1');

statsmax1.addEventListener('click',()=>{
    if(Number(statscount1.innerText)< 15) {
        statscount1.innerText = Number(statscount1.innerText)+1
    };
});



const statsmax2 = document.getElementById('statsmax2');
const statsmin2 = document.getElementById('statsmin2');
const statscount2 = document.getElementById('statscount2');

statsmax2.addEventListener('click',()=>{
    if(Number(statscount2.innerText)< 15) {
        statscount2.innerText = Number(statscount2.innerText)+1
    };
});


const statsmax3 = document.getElementById('statsmax3');
const statsmin3 = document.getElementById('statsmin3');
const statscount3 = document.getElementById('statscount3');

statsmax3.addEventListener('click',()=>{
    if(Number(statscount3.innerText)< 15) {
        statscount3.innerText = Number(statscount3.innerText)+1
    };
});


const statsmax4 = document.getElementById('statsmax4');
const statsmin4 = document.getElementById('statsmin4');
const statscount4 = document.getElementById('statscount4');

statsmax4.addEventListener('click',()=>{
    if(Number(statscount4.innerText)< 15) {
        statscount4.innerText = Number(statscount4.innerText)+1
    };
});
const statsmax5 = document.getElementById('statsmax5');
const statsmin5 = document.getElementById('statsmin5');
const statscount5 = document.getElementById('statscount5');

statsmax5.addEventListener('click',()=>{
    if(Number(statscount5.innerText)< 15) {
        statscount5.innerText = Number(statscount5.innerText)+1
    };
});


const statsmax6 = document.getElementById('statsmax6');
const statsmin6 = document.getElementById('statsmin6');
const statscount6 = document.getElementById('statscount6');

statsmax6.addEventListener('click',()=>{
    if(Number(statscount6.innerText)< 15) {
        statscount6.innerText = Number(statscount6.innerText)+1
    };
});

*/


