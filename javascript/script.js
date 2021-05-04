let face = 0;
let dice = 0;
let result = " ";
let cumul = 0;
let roll = 0;
let fail = 0;
let crit = 0;

function simul(dice, face){
  result = " ";
  cumul = 0;
  fail = 0;
  crit = 0;
  for(let i = 0; i != dice; i++){
    roll =  Math.ceil(Math.random() * face);
    if(roll == 1){
      crit += 1;
    }else if(roll == face){
      fail += 1;
    };
    result = result + roll + " / ";
    cumul = cumul + roll;
  };
  document.getElementById("resultat").innerHTML=result;
  document.getElementById("accumuler").innerHTML=cumul;
  document.getElementById("reussite").innerHTML=crit;
  document.getElementById("echec").innerHTML=fail;
};

function choose(dice, face){
  result = " ";
  cumul = 0;
  fail = 0;
  crit = 0;
  dice = parseInt(prompt("Choisissez le nombre de dé a lancer"));
  face = parseInt(prompt("Choisissez le nombre de face des dés a lancer"));
  for(let i = 0; i != dice; i++){
    roll =  Math.ceil(Math.random() * face);
    if(roll == 1){
      crit += 1;
    }else if(roll == face){
      fail += 1;
    };
    result = result + roll + " / ";
    cumul = cumul + roll;
  };
  document.getElementById("resultat").innerHTML=result;
  document.getElementById("accumuler").innerHTML=cumul;
  document.getElementById("reussite").innerHTML=crit;
  document.getElementById("echec").innerHTML=fail;
};
